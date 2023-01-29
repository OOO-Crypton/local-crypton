import { PProps } from "./P.props";
import cn from "classnames";
import styles from "./P.module.css";

export const P = ({ size, className, children, ...props }: PProps) => {
	return (
		<p
			className={cn(className, styles.p, {
				[styles.s]: size === "s",
				[styles.l]: size === "l",
				[styles.m]: size === "m",
			})}
			{...props}
		>
			{children}
		</p>
	);
};
