import { useEffect, useState } from "react";

export default function usePersitedState (key, initialSatate){

    const [state, setState] = useState(()=>{
        const storegeValue = localStorage.getItem(key)

        if(storegeValue){
            return JSON.parse(storegeValue)
        }else{
            return initialSatate
        }
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, setState]
    // tem que retur para a functio o state
}   