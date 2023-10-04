import axios from "axios";



export const getData = async () => {

    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
    // console.log(response.data.data[0])
    return response.data
    // return response.data
};

export const getSpecificTeam = async (id) => {
    
    const response = await axios.get(`https://www.balldontlie.io/api/v1/teams/${id}`)

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