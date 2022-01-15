import React, { useState } from "react";
import { Zoom } from "@visx/zoom";
import { localPoint } from "@visx/event";
import { Group } from "@visx/group";
import { Pack, hierarchy, stratify } from "@visx/hierarchy";
import { RectClipPath } from "@visx/clip-path";
import { interpolateSinebow } from "d3-scale-chromatic";
import { interpolateZoom } from "d3-interpolate";

import { RankedAccount } from "../pages/api/whales";
import { useWallet } from "@solana/wallet-adapter-react";

const bg = "#FFF";

export type WhaleChartProps = {
  width: number;
  height: number;
  data: RankedAccount[];
};

export default function WhaleChart({
  width,
  height,
  data = [],
}: WhaleChartProps) {
  const { publicKey } = useWallet();
  const [showMiniMap, setShowMiniMap] = useState<boolean>(true);

  const root = hierarchy<RankedAccount>({ amount: 162728.18, children: data })
    .sum((w) => w.amount)
    .sort((a, b) => b.value - a.value);

  const userNode = publicKey && root.children.find((w) => w.data.owned);

  const WhalePack = () => (
    <Pack<RankedAccount> root={root} size={[width, height]}>
      {(packData) => {
        const nodes = packData.children ?? [];
        // const nodes = [packData, ...packData.children];

        // console.log(nodes);
        return (
          <Group>
            {nodes.map((circle, i) => (
              <circle
                key={`circle-${i}`}
                r={circle.r}
                cx={circle.x}
                cy={circle.y}
                fill={
                  circle.data.owned
                    ? "yellow"
                    : interpolateSinebow(i / nodes.length)
                }
                stroke={circle.data.owned && "black"}
              />
            ))}
          </Group>
        );
      }}
    </Pack>
  );

  return (
    <>
      <Zoom<SVGSVGElement>
        width={width}
        height={height}
        scaleXMin={3 / 4}
        scaleYMin={3 / 4}
      >
        {(zoom) => (
          <div className="relative">
            <svg
              width={width}
              height={height}
              style={{
                cursor: zoom.isDragging ? "grabbing" : "grab",
                touchAction: "none",
              }}
              ref={zoom.containerRef}
            >
              <RectClipPath id="zoom-clip" width={width} height={height} />
              <rect width={width} height={height} rx={14} fill={bg} />

              <g transform={zoom.toString()}>
                <WhalePack />
              </g>
              <rect
                width={width}
                height={height}
                rx={14}
                fill="transparent"
                onTouchStart={zoom.dragStart}
                onTouchMove={zoom.dragMove}
                onTouchEnd={zoom.dragEnd}
                onMouseDown={zoom.dragStart}
                onMouseMove={zoom.dragMove}
                onMouseUp={zoom.dragEnd}
                onMouseLeave={() => {
                  if (zoom.isDragging) zoom.dragEnd();
                }}
                onDoubleClick={(event) => {
                  const point = localPoint(event) || { x: 0, y: 0 };
                  zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });
                }}
              />
              {showMiniMap && (
                <g
                  clipPath="url(#zoom-clip)"
                  transform={`
                    scale(0.25)
                    translate(${width * 4 - width - 60}, ${
                    height * 4 - height - 60
                  })
                  `}
                >
                  <rect width={width} height={height} fill="777" />
                  <WhalePack />
                  <rect
                    width={width}
                    height={height}
                    fill="#eee"
                    fillOpacity={0.2}
                    stroke="white"
                    strokeWidth={4}
                    transform={zoom.toStringInvert()}
                  />
                </g>
              )}
            </svg>
            <div className="controls">
              <button
                type="button"
                className="btn btn-zoom"
                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-zoom btn-bottom"
                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-lg"
                onClick={zoom.center}
              >
                Center
              </button>
              <button type="button" className="btn btn-lg" onClick={zoom.reset}>
                Reset
              </button>
              <button
                type="button"
                className="btn btn-lg"
                onClick={() => {
                  const scale =
                    (root.r / userNode.r) * 0.2 - zoom.transformMatrix.scaleX;
                  zoom.reset();

                  // zoom.translateTo();
                  zoom.scale({
                    scaleX: scale,
                    scaleY: scale,
                    point: {
                      x: userNode.x + 2 * userNode.r,
                      y: userNode.y - 4 * userNode.r,
                    },
                  });
                }}
              >
                Zoom
              </button>
            </div>
            <div className="mini-map">
              <button
                type="button"
                className="btn btn-lg"
                onClick={(show) => setShowMiniMap(!show)}
              >
                {showMiniMap ? "Hide" : "Show"} Mini Map
              </button>
            </div>
          </div>
        )}
      </Zoom>
      <style jsx>{`
        .btn {
          margin: 0;
          text-align: center;
          border: none;
          background: #fff;
          color: #888;
          padding: 0 4px;
          border-top: 1px solid #0a0a0a;
        }
        .btn-lg {
          font-size: 12px;
          line-height: 1;
          padding: 4px;
        }
        .btn-zoom {
          width: 26px;
          font-size: 22px;
        }
        .btn-bottom {
          margin-bottom: 1rem;
        }
        .controls {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .mini-map {
          position: absolute;
          bottom: 25px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      `}</style>
    </>
  );
}
