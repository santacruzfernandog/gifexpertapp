import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect( ()=>{

        getGifs(category) //retorna una promesa
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])

    return state;

}