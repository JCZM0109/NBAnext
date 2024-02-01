import axios from "axios";



export const getAllPlayers = async (team, season) => {
    

    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {
          team: {team},
          season: {season}
        },
        headers: {
          'X-RapidAPI-Key': 'db53ce0518msh9435c1b8c9acd47p11798fjsn2e96c9776efb',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    const response = await axios.get("https://www.balldontlie.io/api/v1/players");

    return response.data
};