import axios from "axios";

const authorizationKey = process.env.NEXT_PUBLIC_AUTHORIZATION;


export const getData = async () => {

    const optionsP = {
        method: 'GET',
        url: 'https://api.balldontlie.io/v1/teams',
        headers: {
          'Authorization': authorizationKey,
        }
      };
      try {
        const response = await axios.request(optionsP)
        return response.data
      } catch (error) {
        console.error(error);
      }
};

export const getSpecificTeam = async (id) => {
    
    const optionsP = {
        method: 'GET',
        url: `https://api.balldontlie.io/v1/teams/${id}`,
        headers: {
          'Authorization': authorizationKey,
        }
      };
      try {
        const response = await axios.request(optionsP)
        return response.data
      } catch (error) {
        console.error(error);
      }
};

export const getMatchesByTeam = async (id, page, season) => {

    const response = await axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&page=${page}&seasons[]=${season}`)
    
    return response.data
}


// const [teamsList, setTeamsList] = useState({
//     full_name: "Edgar"
// })

// const fetchTeamList = async () => {
//     const teamsData = await getData();
//     // console.log(teamsData)
//     setTeamsList(teamsData.data);
// }

// useEffect(() => {
//     fetchTeamList();
// }, []);

// console.log(teamsList);