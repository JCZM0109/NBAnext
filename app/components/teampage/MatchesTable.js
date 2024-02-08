'use client'

import { getMatchesByTeam } from "@/app/services";
import { useEffect, useRef, useState } from "react";
import { TablePagination, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

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
                    borderStyle: "solid",
                    borderRadius: 10,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                    backgroundColor: grey,
                    color: "black",
                    padding: 10,
                },
            },
        },
    },
});


function createData(homeTeam, visitorTeam, score, date) {
    return { homeTeam, visitorTeam, score, date }
};

const columns = ["Home Team", "Visitor Team", "Score", "Date"];


export default function MatchesTable({ teamId, season }) {

    const screenUpper900 = useMediaQuery("(min-height:900px)");

    const [teamMatches, setTeamMatches] = useState([]);
    const [totalRows, setTotalRows] = useState(1);
    const [page, setPage] = useState(1);
    const table_matches = useRef();

    const fetchTeamMatches = async () => {
        const matchesData = await getMatchesByTeam(teamId, page, season)
        setTeamMatches(matchesData.data);
        setTotalRows(matchesData.meta.total_count)
    }

    const handlePageChange = (event, newPage) => {
        setPage(newPage + 1)

        if (newPage < page) {
            setPage(page - 1)
        }

        table_matches.current.scrollTop = 0;
    }


    const rows = [
        teamMatches.map((match, key) => {
            
            const editedDate = match.date.slice(0, match.date.indexOf("T"));
            
            return createData(match.home_team.full_name, match.visitor_team.full_name, `${match.home_team_score}-${match.visitor_team_score}`, `${editedDate}`)
        })
    ];

    const flattenedRows = rows.flat();

    useEffect(() => {
        fetchTeamMatches()
    }, [])

    useEffect(() => {
        fetchTeamMatches()
    }, [page])

    useEffect(() => {
        fetchTeamMatches()
        setPage(1);
    }, [season])

    return (
        <div className="box-tablem">
            <ThemeProvider theme={MuiTheme}>
                <TableContainer component={Paper} className="container-tablematches"  ref={table_matches}>
                    <Table aria-label="simple table" size={screenUpper900 ? "large" : "small"} >
                        <TableHead>
                            <TableRow className="table-row">
                                {
                                    columns.map((column, key) => {
                                        return <TableCell key={key} align="center" className="header-cells">{column}</TableCell>
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                flattenedRows.map((row, key) => {
                                    return (<TableRow key={key}>
                                        <TableCell align="center" className="table-cells">
                                            {row.homeTeam}
                                        </TableCell>
                                        <TableCell align="center" className="table-cells">
                                            {row.visitorTeam}
                                        </TableCell>
                                        <TableCell align="center" className="table-cells">
                                            {row.score}
                                        </TableCell>
                                        <TableCell align="center" className="table-cells">
                                            {row.date}
                                        </TableCell>
                                    </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    <TablePagination
                        count={totalRows || 0}
                        component="div"
                        page={page - 1}
                        onPageChange={handlePageChange}
                        rowsPerPage={25}
                        //Verificando si se está en un movil para cambiar el flex de la pagination
                        {...!screenUpper900 && {sx: {
                            ".MuiTablePagination-toolbar":{
                                flexWrap: "wrap",
                                justifyContent: "center"
                            }
                        }} }
                    />
                </TableContainer>
            </ThemeProvider>
        </div >
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