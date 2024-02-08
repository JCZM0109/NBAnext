import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;


// in order to get the players first, I will need to  check the ID of the team on the second API since they included other teams,
// once I get the ID I can use that to make the second request

export const getTeamId = async (abb) => {

  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams',
    params: {code: abb},
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  const response = await axios.request(options)

  // console.log(response.data.response[0].id)

  return response.data.response[0].id

}

export const getAllPlayers = async (team, season) => {
    

  //options used to fetch list of players
    const optionsP = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {
          team: team,
          season: season
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      };

    const response = await axios.request(optionsP)

    return response.data.response
};