'use client'

import { getMatchesByTeam } from "@/app/services";
import { useEffect, useState } from "react";
// import { DataGrid } from '@mui/x-data-grid';
import { TablePagination, ThemeProvider, createTheme } from '@mui/material'

import "./matches-table.css";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { grey } from "@mui/material/colors";



const MuiTheme = createTheme({
    palette: {
        mode: "dark",
    },
    components: {
        MuiTable: {
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

// const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     { field: "homeTeam", headerName: "Home Team", width: 130 },
//     { field: "visitorTeam", headerName: "Visitor Team", width: 130 },
//     { field: "score", headerName: "Score", width: 130 }];

function createData(homeTeam, visitorTeam, score) {
    return { homeTeam, visitorTeam, score }
};

const columns = ["Home Team", "Visitor Team", "Score"];



export default function MatchesTable({ teamId }) {

    const [teamMatches, setTeamMatches] = useState([]);
    const [totalRows, setTotalRows] = useState(1);

    const [page, setPage] = useState(1);

    const fetchTeamMatches = async () => {
        const matchesData = await getMatchesByTeam(teamId, page)
        setTeamMatches(matchesData.data);
        setTotalRows(matchesData.meta.total_count)
    }

    const handlePageChange = (event, newPage) => {
        setPage(newPage + 1)

        if (newPage < page) {
            setPage(page - 1)
        }
    }


    const rows = [
        teamMatches.map((match, key) => {
            return createData(match.home_team.full_name, match.visitor_team.full_name, `${match.home_team_score}-${match.visitor_team_score}`)
        })
    ];

    const flattenedRows = rows.flat();

    useEffect(() => {
        fetchTeamMatches()
    }, [])

    useEffect(() => {
        fetchTeamMatches()
    }, [page])

    return (
        <div className="box-tablem">
            <ThemeProvider theme={MuiTheme}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    columns.map((column, key) => {
                                        return <TableCell key={key}>{column}</TableCell>
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                flattenedRows.map((row, key) => {
                                    return (<TableRow key={key}>
                                        <TableCell align="center">
                                            {row.homeTeam}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.visitorTeam}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.score}
                                        </TableCell>
                                    </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    <TablePagination
                        count={totalRows}
                        component="div"
                        page={page - 1}
                        onPageChange={handlePageChange}
                        rowsPerPage={25}
                    />
                </TableContainer>
            </ThemeProvider>
        </div>
    )

}












{/* <ThemeProvider theme={MuiTheme}>
                <DataGrid
                    rows={flattenedRows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 25 },
                        },
                    }}
                />
            </ThemeProvider> */}