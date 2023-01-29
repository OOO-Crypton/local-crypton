import { VideoCardProps } from "./VideoCard.props";
import styles from "./VideoCard.module.css";
import cn from "classnames";
import { P } from "../P/P";
import { nanoid } from "nanoid";

export const VideoCard = ({ data, className, ...props }: VideoCardProps) => {
	return (
		<div className={cn(className, styles.VideoCard)} {...props}>
			<div className={styles.head}>
				<P size="s">Название</P>
				<P size="s">Статус</P>
				<P size="s">Текущий хэшрейт (H/s)</P>
				<P size="s">Температура GPU (&#8451;)</P>
				<P size="s">Скорость вентилятора (%)</P>
				<P size="s">Потребление каждой карты (Вт)</P>
			</div>
			{data.map((item) => (
				<div className={styles.item} key={nanoid()}>
					<P size="s">{item.name}</P>
					<P
						size="s"
						className={cn({
							[styles.work]: item.status === 1,
							[styles.noWork]: item.status === 0,
						})}
					>
						{item.status === 1 ? "Работает" : "Не работает"}
					</P>
					<P size="s">{item.hashrate} H/s</P>
					<P size="s">{item.temperature} &#8451;</P>
					<P size="s">{item.fanSpeed} %</P>
					<P size="s">{item.W} Вт</P>
				</div>
			))}
		</div>
	);
};
