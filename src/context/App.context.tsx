import { createContext, PropsWithChildren, useState } from "react";

export interface AppContextInterface {
	auth: boolean;
	setAuth?: (newAuth: boolean) => void;
}

export const AppContext = createContext<AppContextInterface>({
	auth: false,
});

export const AppContextProvider = ({ children }: PropsWithChildren<AppContextInterface>): JSX.Element => {
	const [authState, setAuthState] = useState<boolean>(false);

	const setAuth = (newAuth: boolean) => {
		setAuthState(newAuth);
	};

	return <AppContext.Provider value={{ auth: authState, setAuth }}>{children}</AppContext.Provider>;
};
