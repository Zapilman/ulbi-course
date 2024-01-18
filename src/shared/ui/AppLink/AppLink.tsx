import { memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import cn from "classnames";

type TAppLinkProps = LinkProps & {
  className?: string;
};

const AppLink = ({ className, children, ...otherProps }: TAppLinkProps) => {
  return (
    <Link {...otherProps} className={cn(className)}>
      {children}
    </Link>
  );
};

export default memo(AppLink);
