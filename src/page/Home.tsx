import styles from "../styles/Home.module.css";
import { P, VideoCard } from "../components";
import { VideoCardData } from "../interface";

export const Home = (): JSX.Element => {
	const videoData: VideoCardData[] = [
		{
			name: "GIGABYTE GeForce RTX 4090 GAMING OC",
			status: 1,
			hashrate: 90,
			temperature: 80,
			fanSpeed: 100,
			W: 250,
		},
		{
			name: "GIGABYTE GeForce RTX 4090 GAMING OC",
			status: 1,
			hashrate: 90,
			temperature: 80,
			fanSpeed: 100,
			W: 250,
		},
	];

	return (
		<div className={styles.homeConteiner}>
			<div className={styles.info}>
				<P size="l">Информация о ферме</P>
				<P size="s">Общее кол-во карт: {videoData.length}</P>
				<P size="s">Общее потребление: 500 Вт</P>
				<P size="s">Общей хэшрейт: 180</P>
			</div>
			<VideoCard data={videoData} />
		</div>
	);
};
