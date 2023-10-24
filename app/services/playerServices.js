import axios from "axios";

export const getAllPlayers = async () => {
    
    const response = await axios.get("https://www.balldontlie.io/api/v1/players");

    return response.data.data
};