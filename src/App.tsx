import {Suspense, useEffect, useState} from "react";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {AppRouter} from "@/components/AppRouter/AppRouter";

export default function App() {
    const dispatch = useAppDispatch()

    const [inited, setInited] = useState(false)

    useEffect(() => {
        if (!inited) {
            dispatch(UserSliceActions.initAuth())
            setInited(true)
        }
    }, [inited, dispatch]);


    if (!inited) return (
        <></>
    )

    return (
        <div className='wrapper'>
            <Suspense fallback={'loading...'}>
                <AppRouter/>
            </Suspense>
        </div>
    );
}
