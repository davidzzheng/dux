import cn from "classnames";
import "./index.css";
import { Loadable, Size } from "../../shared/types";

export interface CardProps extends Loadable {
  size: Size;
}

export const Card = ({ loading, size = "md", ...rest }: CardProps) => {
  return (
    <div className={cn("card", { loading: loading }, `shadow-${size}`)}>
      testetsestsetestest
    </div>
  );
};

export default Card;
