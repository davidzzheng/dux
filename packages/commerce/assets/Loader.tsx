import * as React from "react";

function Loader(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
      <path
        fill="#fff"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

const MemoLoader = React.memo(Loader);
export default MemoLoader;
