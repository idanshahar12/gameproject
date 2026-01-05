import { useEffect, useState } from "react"
import { fetchGames } from "../api/games";

export const useFetchGames = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGames = async () => {
    
            try {
                
                const data = await fetchGames();
                setGames(data);
            } catch(err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
            
        }
        getGames();
    },[])
    return { games, isLoading, error };
}