import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({ appearance = "green", children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.green]: appearance === "green",
				[styles.white]: appearance === "white",
			})}
			{...props}
		>
			{children}
		</button>
	);
};
