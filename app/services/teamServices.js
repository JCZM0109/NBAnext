import axios from "axios";

export const getTeamList = async() => {
    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
    console.log(response.data.data)
    return response
}

