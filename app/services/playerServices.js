import axios from "axios";

const apiKey = process.env.RAPID_API_KEY;

export const getAllPlayers = async (team, season) => {
    

    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {
          team: {team},
          season: {season}
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    const response = await axios.get("https://www.balldontlie.io/api/v1/players");

    return response.data
};