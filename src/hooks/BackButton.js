import { useEffect } from "react";

export default function useBackButton({ setLevel }) {
    useEffect(() => {
        const handleEvent = () => {
            setLevel("");
        };

        window.addEventListener("popstate", handleEvent);
        return () => {
            window.removeEventListener("popstate", handleEvent);
        };
    }, []);
};
