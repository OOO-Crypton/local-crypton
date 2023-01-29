import { SelectProps } from "./Select.props";
import cn from "classnames";
import styles from "./Select.module.css";
import { ForwardedRef, forwardRef } from "react";

export const Select = forwardRef(
	({ className, ...props }: SelectProps, ref: ForwardedRef<HTMLSelectElement>): JSX.Element => {
		return <select className={cn(className, styles.input)} ref={ref} {...props} />;
	}
);
