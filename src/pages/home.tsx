import { Box, Typography } from "@mui/material"


const Home = () => 
    <Box
        sx={{
            padding: '20px'
        }}
    >
        <Typography
            variant='h3'
            sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '20px',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '2.5rem',
            }}
        >
        Abide Frontend Coding Challenge
        </Typography>
        <Typography 
            variant="h5" 
            sx={{
                color: 'text.primary',
                fontWeight: 'normal',
                fontSize: '1rem',
                marginBottom: '30px',
            }}
        >
        In this challenge, I was tasked with demonstrating my frontend development and design skills by building 2 interactive charts and 2 tables to visualize the data returned from the <strong>getData()</strong> function.
        </Typography>
        <Typography 
            variant="body1" 
            sx={{
                color: 'text.primary',
                fontSize: '1rem',
                margin: '0 auto',
                marginBottom: '20px',
            }}
        >
        For the tables, I utilized <strong>MUI X Data Grid</strong> to present data in a clean and efficient way. For the charts, I chose <strong>Chart.js</strong> to create visually appealing and informative graphs. The goal was to create an intuitive, user-friendly interface while showcasing my ability to work with dynamic data and implement responsive, interactive components.
        </Typography>
        <Typography 
            variant="body1" 
            sx={{
                color: 'text.primary',
                fontSize: '1rem',
                margin: '0 auto',
            }}
        >
        Thank you for reviewing my work, and I look forward to your feedback!
        </Typography>
    </Box>


export default Home