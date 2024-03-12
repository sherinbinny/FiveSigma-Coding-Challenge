import { Typography, Box } from "@mui/material"
import { PageProps } from "../App" 

const TableTwo = ({data}: PageProps) => 
    <Box
        sx={{display: 'flex'}}
    >
        <Box>
            <Typography
                variant="h5"
            >
                Current Interest Rate by Region Table
            </Typography>
            <Typography>
                Create a table showing the current interest rate by region...
            </Typography>
            <Typography>
                {data ? JSON.stringify(data) : 'No data to display'}
            </Typography>
        </Box>
    </Box>


export default TableTwo