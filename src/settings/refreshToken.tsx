import Cookies from "js-cookie";
import mem from "mem";
import { axiosPrivate } from "./axios";

const refreshTokenFn = async () => {
	const token = Cookies.get("token");
	const refreshToken = Cookies.get("refreshToken");
	if (token) {
		try {
			const { status, data } = await axiosPrivate.post("/refresh-token", {
				refreshToken: refreshToken,
				accessToken: token,
			});
			if (status === 200) {
				if (!data?.token) {
					Cookies.remove("token");
					Cookies.remove("refreshToken");
					Cookies.remove("expiration");
				}
				Cookies.set("token", data?.token);
				Cookies.set("refreshToken", data?.refreshToken);
				Cookies.set("expiration", data?.expiration);
				localStorage.setItem("session", JSON.stringify(data));
				return data;
			}
		} catch (e) {
			console.log(e);
			Cookies.remove("token");
			Cookies.remove("refreshToken");
			Cookies.remove("expiration");
		}
	}
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
	maxAge,
});
