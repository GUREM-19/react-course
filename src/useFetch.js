import { useState, useEffect } from "react";

// Custom Hook

const  useFetch= (url) => {
 
//Hooks -> functions that let you “hook into” React state and lifecycle features from function components
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(() =>{
    fetch(url)
        .then(res =>{
            if(!res.ok) {
                throw Error("could not fetch data :c");
            }
            return res.json();
        })
        .then(data =>{
            setData(data)
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        });
   }, [url]);
   
   return{ data, loading, error }
}

export default useFetch;
 
