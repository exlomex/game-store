import {useEffect, useState} from "react";

export default function useDebounce(value: string, delay: number): string {
    const [item, setItem] = useState<string>('')

    useEffect(() => {
        const timer = setTimeout(() => setItem(value), delay)

        return () => clearTimeout(timer)
    }, [value, delay]);

    return item;
}