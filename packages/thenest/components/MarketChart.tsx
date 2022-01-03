import { useMemo, useCallback } from "react";
import { AreaClosed, Line, Bar } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom, AxisRight } from "@visx/axis";
import { GridRows, GridColumns } from "@visx/grid";
import { scaleTime, scaleLinear } from "@visx/scale";
import {
  Tooltip,
  TooltipWithBounds,
  defaultStyles,
  useTooltip,
} from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { localPoint } from "@visx/event";
import { LinearGradient } from "@visx/gradient";
import { max, extent, bisector } from "d3-array";
import { timeFormat } from "d3-time-format";

// import {
//   XYChart,
//   AnimatedAxis,
//   AnimatedGrid,
//   AnimatedAreaSeries,
//   Tooltip,
// } from "@visx/xychart";

import data from "../utils/data.json";

const formatDate = timeFormat("%b %d, '%y");
const getDate = (d: IData) => new Date(d.snapped_at);
const getTokenPrice = (d: IData) => d.price;
const getMarketCap = (d: IData) => d.market_cap;
const bisectDate = bisector<IData, Date>((d) => new Date(d.snapped_at)).left;

export const background = "#000";
export const accentColor = "#000";
export const accentColorDark = "#333";
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: "1px solid white",
  color: "white",
};

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

interface IData {
  snapped_at: string;
  price: number;
  market_cap: number;
  total_volume: number;
}

export const MarketChart = ({
  width,
  height,
  margin = { top: 40, right: 30, bottom: 50, left: 40 },
}: AreaProps) => {
  const { showTooltip, hideTooltip, tooltipTop, tooltipLeft, tooltipData } =
    useTooltip<IData>({
      tooltipTop: 0,
      tooltipLeft: 0,
    });

  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // scales
  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(data, getDate) as [Date, Date],
      }),
    [innerWidth, margin.left]
  );
  const tokenPriceScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [0, (max(data, getTokenPrice) || 0) + innerHeight / 3],
        nice: true,
      }),
    [margin.top, innerHeight]
  );
  const mcapScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [0, (max(data, getMarketCap) || 0) + innerHeight / 3],
        nice: true,
      }),
    [margin.top, innerHeight]
  );

  // tooltip handler
  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      const { x } = localPoint(event) || { x: 0 };
      const x0 = dateScale.invert(x);
      const index = bisectDate(data, x0, 1);
      const d0 = data[index - 1];
      const d1 = data[index];

      let d = d0;
      if (d1 && getDate(d1)) {
        d =
          x0.valueOf() - getDate(d0).valueOf() >
          getDate(d1).valueOf() - x0.valueOf()
            ? d1
            : d0;
      }
      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: tokenPriceScale(getTokenPrice(d)),
      });
    },
    [showTooltip, tokenPriceScale, dateScale]
  );

  if (width < 10) return null;

  return (
    <>
      <div className="relative">
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#area-background-gradient)"
            rx={14}
          />
          <Group left={margin.left} top={margin.top}>
            <AxisLeft scale={tokenPriceScale} />
            <AxisBottom scale={dateScale} top={innerHeight} />
            <AxisRight scale={mcapScale} />

            <LinearGradient
              id="area-gradient"
              from={accentColor}
              to={accentColor}
              toOpacity={0.1}
            />
            <GridRows
              left={margin.left}
              scale={tokenPriceScale}
              width={innerWidth}
              strokeDasharray="1,3"
              stroke={accentColor}
              strokeOpacity={0}
              pointerEvents="none"
            />
            <GridColumns
              top={margin.top}
              scale={dateScale}
              height={innerHeight}
              strokeDasharray="1,3"
              stroke={accentColor}
              strokeOpacity={0.2}
              pointerEvents="none"
            />
            <AreaClosed<IData>
              data={data}
              x={(d) => dateScale(getDate(d)) ?? 0}
              y={(d) => tokenPriceScale(getTokenPrice(d)) ?? 0}
              yScale={tokenPriceScale}
              strokeWidth={1}
              stroke="url(#area-gradient)"
              fill="url(#area-gradient)"
              curve={curveMonotoneX}
            />
            <AreaClosed<IData>
              data={data}
              x={(d) => dateScale(getDate(d)) ?? 0}
              y={(d) => mcapScale(getMarketCap(d)) ?? 0}
              yScale={mcapScale}
              strokeWidth={1}
              stroke="url(#area-gradient)"
              fill="url(#area-gradient)"
              curve={curveMonotoneX}
            />
            <Bar
              x={margin.left}
              y={margin.top}
              width={innerWidth}
              height={innerHeight}
              fill="transparent"
              rx={14}
              onTouchStart={handleTooltip}
              onTouchMove={handleTooltip}
              onMouseMove={handleTooltip}
              onMouseLeave={() => hideTooltip()}
            />
            {tooltipData && (
              <g>
                <Line
                  from={{ x: tooltipLeft, y: margin.top }}
                  to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                  stroke={accentColorDark}
                  strokeWidth={2}
                  pointerEvents="none"
                  strokeDasharray="5,2"
                />
                <circle
                  cx={tooltipLeft}
                  cy={tooltipTop + 1}
                  r={4}
                  fill="black"
                  fillOpacity={0.1}
                  stroke="black"
                  strokeOpacity={0.1}
                  strokeWidth={2}
                  pointerEvents="none"
                />
                <circle
                  cx={tooltipLeft}
                  cy={tooltipTop}
                  r={4}
                  fill={accentColorDark}
                  stroke="white"
                  strokeWidth={2}
                  pointerEvents="none"
                />

                <circle
                  cx={tooltipLeft}
                  cy={mcapScale(getMarketCap(tooltipData)) + 1}
                  r={4}
                  fill="black"
                  fillOpacity={0.1}
                  stroke="black"
                  strokeOpacity={0.1}
                  strokeWidth={2}
                  pointerEvents="none"
                />
                <circle
                  cx={tooltipLeft}
                  cy={mcapScale(getMarketCap(tooltipData))}
                  r={4}
                  fill={accentColorDark}
                  stroke="white"
                  strokeWidth={2}
                  pointerEvents="none"
                />
              </g>
            )}
          </Group>
        </svg>

        {tooltipData && (
          <div>
            <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={tooltipStyles}
            >
              <div>
                Token price: ${`${getTokenPrice(tooltipData).toLocaleString()}`}
              </div>
              <div>
                Market cap: ${`${getMarketCap(tooltipData).toLocaleString()}`}
              </div>
            </TooltipWithBounds>
            <Tooltip
              top={innerHeight + margin.top - 14}
              left={tooltipLeft}
              style={{
                ...defaultStyles,
                minWidth: 72,
                textAlign: "center",
                transform: "translateX(-50%)",
              }}
            >
              {formatDate(getDate(tooltipData))}
            </Tooltip>
          </div>
        )}
      </div>
      {/* <XYChart
        height={500}
        xScale={{ type: "time" }}
        yScale={{ type: "linear" }}
      >
        <AnimatedAxis orientation="bottom" numTicks={4} />
        <AnimatedAxis key="price" orientation="left" numTicks={4} />
        <AnimatedGrid columns={false} numTicks={2} />
        <AnimatedAreaSeries
          dataKey="price"
          data={data}
          xAccessor={(x) => new Date(x.snapped_at)}
          yAccessor={(y) => y.price}
        />
        <AnimatedAreaSeries
          dataKey="mcap"
          data={data}
          xAccessor={(x) => new Date(x.snapped_at)}
          yAccessor={(y) => y.market_cap}
          opacity="40%"
        />

        <Tooltip<IData>
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData, colorScale }) => (
            <div>{tooltipData.nearestDatum.datum.price}</div>
          )}
        />
      </XYChart> */}
    </>
  );
};

export default MarketChart;
