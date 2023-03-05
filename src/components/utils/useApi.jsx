import { useEffect, useState } from "react";
import axios from "axios";


const useApi = (url) => {

    const [data, setData] = useState([])

    useEffect((url) => {
        fetch(url)
            .then((res) => res.data)
            .then((json) => {
                setData(json)
            })
            .catch(err => console.log(err))

        // axios.get(url)
        //     .then((res) => res.data)
        //     .then((json) => {
        //         setData(json)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }, [])
    return [data]
}

export default useApi

