import { Typography, Box } from "@mui/material"
import { PageProps } from "../App" 

const ChartOne = ({data}: PageProps) => 
    <Box
        sx={{display: 'flex'}}
    >
        <Box>
            <Typography
                variant="h5"
            >
                Original Balance Over Time Line Graph
            </Typography>
            <Typography>
                Create a line graph showing the original balance for each Origination Partner over time for the past 6 months.
            </Typography>
            
            <Typography>
                {data ? JSON.stringify(data) : 'No data to display'}
            </Typography>
        </Box>
    </Box>


export default ChartOne