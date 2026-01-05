import { useEffect, useState } from "react"
import { fetchGameById } from "../api/games";

export const useFetchGameById = (id) => {
    // console.log(id)
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!id){
            setIsLoading(false);
            return;
        }
        const getGame = async () => {
    
            try {
                
                const data = await fetchGameById(id);
                setGame(data);
            } catch(err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
            
        }
        getGame();
    },[id])
    return { game, isLoading, error };
}