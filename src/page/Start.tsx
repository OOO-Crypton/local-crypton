import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { io } from "socket.io-client";
import { Button, Input, P } from "../components";
import { AppContext } from "../context/App.context";
import styles from "../styles/Start.module.css";

enum statusEnum {
	default = "default",
	update = "update",
	login = "login",
}

// const socket = io("http://185.230.143.73:3334");

export const Start = (): JSX.Element => {
	const { setAuth } = useContext(AppContext);
	const [isStart, setIsStart] = useState<boolean>(false);
	const [status, setStatus] = useState<statusEnum>(statusEnum.default);
	const [statusText, setStatusText] = useState<string>("Обновление системы");
	const [messages, setMessages] = useState([
		{
			text: "test1 ",
			name: "test 1",
		},
		{
			text: "test 2",
			name: "test 2",
		},
	]);

	// useEffect(function () {
	// 	socket.on("connect", () => {
	// 		console.log(socket);
	// 	});
	// }, []);

	useEffect(() => {
		if (status === statusEnum.update) {
			setTimeout(() => {
				setStatus(statusEnum.login);
			}, 10000);
		}
	}, [isStart]);

	const { register, handleSubmit } = useForm({
		mode: "all",
		defaultValues: {
			code: "",
		},
	});

	const authFun = async (dataForm: { code: string }) => {
		console.log(dataForm);
		setAuth && setAuth(true);
	};

	return (
		<div className={styles.start}>
			<div className={styles.info}>
				<P size="m">Для начала работы необходимо произвести первичную настройку системы.</P>
				{status === statusEnum.default && <P size="s">Что бы начать настройку нажмите на кнопку</P>}
				{status === statusEnum.update && <P size="s">Ожидайте обновление вашей фермы</P>}
				{status === statusEnum.login && <P size="s">Необходимо зарегистрировать вашу ферму в системе</P>}
			</div>
			{!isStart && (
				<Button
					appearance="green"
					onClick={() => {
						setIsStart(!isStart);
						setStatus(statusEnum.update);
					}}
				>
					Начать
				</Button>
			)}
			{status !== statusEnum.login && isStart && (
				<div className={styles.load}>
					<div className={styles.loadingioSpinnerSpinnerTvxb77ervb}>
						<div className={styles.ldioLdjcy56qku}>
							<div />
							<div />
							<div />
							<div />
							<div />
							<div />
							<div />
							<div />
							<div />
							<div />
							<div />
							<div />
						</div>
					</div>
					<P size="s">{statusText}</P>
				</div>
			)}
			{status === statusEnum.login && (
				<form onSubmit={handleSubmit(authFun)} className={styles.login}>
					<Input placeholder="Код" {...register("code")} />
					<Button appearance="green">Войти</Button>
				</form>
			)}
		</div>
	);
};
