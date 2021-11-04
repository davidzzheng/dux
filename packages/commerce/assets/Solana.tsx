import * as React from "react";

function Solana(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 298 234" {...props}>
      <g fill="currentColor">
        <path d="M48.395 178.438a9.697 9.697 0 016.867-2.848H292.91c4.328 0 6.496 5.246 3.434 8.308l-46.957 47a9.712 9.712 0 01-6.871 2.848H4.867c-4.328 0-6.496-5.242-3.433-8.309zm0 0M48.395 2.848A9.697 9.697 0 0155.262 0H292.91c4.328 0 6.496 5.242 3.434 8.309l-46.957 47a9.712 9.712 0 01-6.871 2.847H4.867c-4.328 0-6.496-5.242-3.433-8.308zm0 0M249.387 90.086a9.716 9.716 0 00-6.871-2.852H4.867c-4.328 0-6.496 5.246-3.433 8.309l46.96 47.004a9.713 9.713 0 006.868 2.848H292.91c4.328 0 6.496-5.247 3.434-8.31zm0 0" />
      </g>
    </svg>
  );
}

const MemoSolana = React.memo(Solana);
export default MemoSolana;
