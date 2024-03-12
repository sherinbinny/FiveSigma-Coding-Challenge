import { Typography, Box } from "@mui/material"
import { PageProps } from "../App" 

const TableOne = ({data}: PageProps) => 
    <Box
        sx={{display: 'flex'}}
    >
        <Box>
            <Typography
                variant="h5"
            >
                Original Balance Over Time Table
            </Typography>
            <Typography>
                Create a table showing the original balance for each origination partner over time for the past 6 months.
            </Typography>
            <Typography>
                {data ? JSON.stringify(data) : 'No data to display'}
            </Typography>
        </Box>
    </Box>


export default TableOne