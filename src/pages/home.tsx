import { Box, Typography } from "@mui/material"


const Home = () => 
    <Box
        sx={{
            width: 800 
        }}
    >
        <Typography
            variant='h6'
        >
            Abide Frontend Coding Challenge...
        </Typography>
        <Typography>
            This is a quick coding challenge to give you a chance to 
            demonstrate your frontend coding and design skills. In this 
            challenge you will create 2 charts and 2 tables to visualise 
            the data returned in the getData() function. For the tables, please 
            use <a target="#blank" href="https://mui.com/x/react-data-grid/">MUI X Data Grid</a>.
            The chart library you use is up to you.
        </Typography>
    </Box>


export default Home