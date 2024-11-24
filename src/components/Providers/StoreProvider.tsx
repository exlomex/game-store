import {Provider} from "react-redux";
import {createReduxStore} from "@/store/config";
import {ReactNode} from "react";

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;

    const store = createReduxStore()

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};
