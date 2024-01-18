import { FC, HTMLAttributes, PropsWithChildren, memo } from "react";
import styles from "./ClearButton.module.scss";
import cn from "classnames";

type TClearButtonProps = HTMLAttributes<HTMLButtonElement>;

const ClearButton: FC<PropsWithChildren<TClearButtonProps>> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <button className={cn(styles.clearButton, className)} {...otherProps}>
      {children}
    </button>
  );
};

export default memo(ClearButton);
