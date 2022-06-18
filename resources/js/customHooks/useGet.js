import { useState, useEffect } from "react";

function useGet(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null)
            })
            .catch((error) => {
               setIsPending(false);
               setError(error)
            });
    }, [url]);

    return { data, error, isPending };
}
export default useGet;
