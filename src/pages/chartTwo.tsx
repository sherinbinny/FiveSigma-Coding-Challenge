import { Typography, Box } from "@mui/material"
import { PageProps } from "../App" 

const ChartTwo = ({data}: PageProps) => 
    <Box
        sx={{display: 'flex'}}
    >
        <Box>
            <Typography
                variant="h5"
            >
                Current Interest Rate by Region Bar Chart 
            </Typography>
            <Typography>
                Create a bar chart showing the current interest rate by region.
            </Typography>
            <Typography>
                {data ? JSON.stringify(data) : 'No data to display'}
            </Typography>
        </Box>
    </Box>


export default ChartTwo