import { useDispatch } from "react-redux";
import { addPopularCelebrity } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularCelebrity = () =>{
    const dispatch = useDispatch();
    const getPopularCelebrity = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularCelebrity(json.results));
    }

    useEffect(()=>{
        getPopularCelebrity();
    },[]);
}

export default usePopularCelebrity;

