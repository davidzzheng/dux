import { useMemo, useCallback, useRef, useState } from "react";
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
import { Brush } from "@visx/brush";
import { Bounds } from "@visx/brush/lib/types";
import BaseBrush from "@visx/brush/lib/BaseBrush";
import { PatternLines } from "@visx/pattern";
import { LinearGradient } from "@visx/gradient";
import { localPoint } from "@visx/event";
import { max, extent, bisector } from "d3-array";
import { timeFormat } from "d3-time-format";
import { abbreviateNumber } from "js-abbreviation-number";

import inData from "../utils/data.json";

const formatDate = timeFormat("%b %d, '%y");
const getDate = (d: IData) => new Date(d.snapped_at);
const getTokenPrice = (d: IData) => d.price;
const getMarketCap = (d: IData) => d.market_cap;
const bisectDate = bisector<IData, Date>((d) => new Date(d.snapped_at)).left;

export const background = "#000";
export const accentColor = "#666";
export const accentColorDark = "#333";
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: "1px solid white",
  color: "white",
};

const brushMargin = { top: 10, bottom: 15, left: 100, right: 100 };
const chartSeparation = 30;
const PATTERN_ID = "brush_pattern";
export const background2 = "#af8baf";
const selectedBrushStyle = {
  fill: `url(#${PATTERN_ID})`,
  stroke: "white",
};

export type MarketChartProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  data?: IData[];
  transactions?: any[];
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
  margin = { top: 40, right: 100, bottom: 30, left: 100 },
  data = inData,
  transactions = [],
}: MarketChartProps) => {
  const { showTooltip, hideTooltip, tooltipTop, tooltipLeft, tooltipData } =
    useTooltip<IData>({
      tooltipTop: 0,
      tooltipLeft: 0,
    });

  const brushRef = useRef<BaseBrush | null>(null);
  const [filteredData, setFilteredData] = useState<IData[]>(data);
  const [filteredTxs, setFilteredTxs] = useState<any[]>(transactions);

  const onBrushChange = (domain: Bounds | null) => {
    if (!domain) return;
    const { x0, x1, y0, y1 } = domain;
    const filteredData = data.filter((s) => {
      const x = getDate(s).getTime();
      const y = getTokenPrice(s);
      return x > x0 && x < x1 && y > y0 && y < y1;
    });

    const filteredTransactions = transactions.filter((tx) => {
      const x = getDate;
    });
    setFilteredData(filteredData);
  };

  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const topChartBottomMargin = chartSeparation + 10;
  const topChartHeight =
    0.8 * innerHeight - topChartBottomMargin + margin.bottom;
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation;

  const xMax = Math.max(width - margin.left, 0);
  const yMax = Math.max(topChartHeight, 0);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(
    bottomChartHeight - brushMargin.top - brushMargin.bottom,
    0
  );

  // scales
  const dateScale = useMemo(
    () =>
      scaleTime<number>({
        range: [margin.left, xMax],
        domain: extent(filteredData, getDate) as [Date, Date],
      }),
    [filteredData, margin.left, xMax]
  );
  const tokenPriceScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, margin.top],
        domain: [0, (max(filteredData, getTokenPrice) || 0) + innerHeight / 3],
        nice: true,
      }),
    [yMax, margin.top, filteredData, innerHeight]
  );
  const mcapScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, margin.top],
        domain: [0, (max(filteredData, getMarketCap) || 0) + innerHeight / 3],
        nice: true,
      }),
    [yMax, margin.top, filteredData, innerHeight]
  );

  const brushDateScale = useMemo(
    () =>
      scaleTime<number>({
        range: [0, xBrushMax],
        domain: extent(data, getDate) as [Date, Date],
      }),
    [data, xBrushMax]
  );
  const brushPriceScale = useMemo(
    () =>
      scaleLinear({
        range: [yBrushMax, 0],
        domain: [0, max(data, getTokenPrice) || 0],
        nice: true,
      }),
    [data, yBrushMax]
  );

  // tooltip handler
  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      const { x } = localPoint(event) || { x: 0 };
      const x0 = dateScale.invert(x);
      const index = bisectDate(filteredData, x0, 1);
      const d0 = filteredData[index - 1];
      const d1 = filteredData[index];

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
    [dateScale, filteredData, showTooltip, tokenPriceScale]
  );

  if (width < 10) return null;

  return (
    <>
      <div className="relative">
        <svg width={width} height={topChartHeight + margin.bottom}>
          <rect
            x={0}
            y={0}
            width={width}
            height={topChartHeight}
            fill="url(#area-background-gradient)"
            rx={14}
          />
          <Group>
            <AxisLeft
              scale={tokenPriceScale}
              left={margin.left}
              label="Price"
            />
            <AxisBottom scale={dateScale} top={topChartHeight} />
            <AxisRight
              scale={mcapScale}
              left={innerWidth + margin.left}
              label="Market Cap"
              tickFormat={(v) => abbreviateNumber(+v, 0)}
            />

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
              height={topChartHeight}
              strokeDasharray="1,3"
              stroke={accentColor}
              strokeOpacity={0.2}
              pointerEvents="none"
            />
            <AreaClosed<IData>
              data={filteredData}
              x={(d) => dateScale(getDate(d)) ?? 0}
              y={(d) => tokenPriceScale(getTokenPrice(d)) ?? 0}
              yScale={tokenPriceScale}
              strokeWidth={1}
              stroke="url(#area-gradient)"
              fill="url(#area-gradient)"
              curve={curveMonotoneX}
            />
            <AreaClosed<IData>
              data={filteredData}
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
              height={topChartHeight}
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
              {getMarketCap(tooltipData) > 0 && (
                <div>
                  Market cap: ${`${getMarketCap(tooltipData).toLocaleString()}`}
                </div>
              )}
              <div>
                Token price: ${`${getTokenPrice(tooltipData).toLocaleString()}`}
              </div>
            </TooltipWithBounds>
            <Tooltip
              top={topChartHeight - 14}
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

      <svg width={width} height={bottomChartHeight}>
        <Group left={brushMargin.left}>
          <AreaClosed<IData>
            data={data}
            x={(d) => brushDateScale(getDate(d)) ?? 0}
            y={(d) => brushPriceScale(getTokenPrice(d)) ?? 0}
            yScale={brushPriceScale}
            strokeWidth={1}
            stroke="url(#area-gradient)"
            fill="url(#area-gradient)"
            curve={curveMonotoneX}
          />
          <PatternLines
            id={PATTERN_ID}
            height={8}
            width={8}
            stroke={accentColor}
            strokeWidth={1}
            orientation={["diagonal"]}
          />
          <Brush
            xScale={brushDateScale}
            yScale={brushPriceScale}
            width={xBrushMax}
            height={yBrushMax}
            margin={brushMargin}
            handleSize={8}
            innerRef={brushRef}
            resizeTriggerAreas={["left", "right"]}
            brushDirection="horizontal"
            onChange={onBrushChange}
            onClick={() => setFilteredData(data)}
            selectedBoxStyle={selectedBrushStyle}
            useWindowMoveEvents
          />
        </Group>
      </svg>
    </>
  );
};

export default MarketChart;
