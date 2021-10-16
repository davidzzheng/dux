export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "span" | "div";
  level?: 1 | 2 | 3 | 4;
}

export const Card = ({ as = "div", level = 1, ...rest }: CardProps) => {
  return <div className="p-10 shadow" {...rest} />;
};
