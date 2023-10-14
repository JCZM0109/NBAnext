'use client'

import { getMatchesByTeam } from "@/app/services";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material'

import "./matches-table.css";
import { grey } from "@mui/material/colors";



const MuiTheme = createTheme({
    palette: {
        mode: "dark",
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 1,
                    borderColor: grey,
                    borderStyle: "solid",
                    borderRadius: 10,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    backgroundColor: grey,
                    color: "#C1C2C5",
                    padding: 10,
                },
            },
        },
    },
});

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "homeTeam", headerName: "Home Team", width: 130 },
    { field: "visitorTeam", headerName: "Visitor Team", width: 130 },
    { field: "score", headerName: "Score", width: 130 }];


export default function MatchesTable({ teamId }) {

    const [teamMatches, setTeamMatches] = useState([]);
    const [matchMetaData, setMatchMetaData] = useState({})

    const [page, setPage] = useState(1);

    const fetchTeamMatches = async () => {
        const matchesData = await getMatchesByTeam(teamId, page)
        setTeamMatches(matchesData.data);
        setMatchMetaData(matchesData.meta);
    }

    const rows = [
        teamMatches.map((match, key) => {
            return { id: key + 1, homeTeam: match.home_team.full_name, visitorTeam: match.visitor_team.full_name, score: `${match.home_team_score}-${match.visitor_team_score}` }
        })
    ]

    const flattenedRows = rows.flat();


    useEffect(() => {
        fetchTeamMatches()
    }, [])

    return (
        <div className="box-tablem">
            <ThemeProvider theme={MuiTheme}>
                <DataGrid
                    rows={flattenedRows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                />
            </ThemeProvider>
        </div>
    )

}