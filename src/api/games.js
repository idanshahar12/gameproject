export const fetchGames = async () => {
    const API_URL = "/api/games";
    try {
        const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Data failure: ", response.statusText);
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
    } catch (error) {
        // console.log("Failed to fetch games: ", error);
        throw error;
    }
};




export const fetchGameById = async (id) =>{
    console.log(id)
    const API_URL = "/api/game?id="+id;
    try {
        const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch games by id", response.statusText);
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
    } catch (error) {
        console.log("Failed to fetch game by id: ", error);
        throw error;
    }

}
