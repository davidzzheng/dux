import ParentSize from "@visx/responsive/lib/components/ParentSize";

import WhaleChart from "../components/WhaleChart";

export const WhaleWatch = () => {
  return (
    <div className="max-w-7xl mx-auto pb-12 px-4">
      <div>🐋</div>
      <div className="w-full h-[720px] bg-white rounded-lg shadow">
        <ParentSize>
          {({ width }) => <WhaleChart width={width} height={720} />}
        </ParentSize>
      </div>
    </div>
  );
};

export default WhaleWatch;
