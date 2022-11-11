import { useState, useEffect } from "react";
import { stringify } from "uuid";


export default function useLocalStorage(key, defaultVal) {
    const [state, setState] = useState(()=>{
        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key) || stringify(defaultVal));
        }
        catch(e){
            val = defaultVal;
        }
        return val;
    });
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state))
    },[state])
  return [state, setState] 
}
