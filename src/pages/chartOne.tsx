import { Typography, Box } from "@mui/material"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { PageProps } from "../App"

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);


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