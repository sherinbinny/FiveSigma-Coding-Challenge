import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { PageProps } from "../App";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartTwo = ({ data }: PageProps) => {
  if (!data) return <div>Please wait, loading...</div>;

  if (Array.isArray(data) && data.length > 0 && 'region' in data[0]) {
    const datasetTwo = data as Array<{ region: string, current_interest_rate: number }>;

    const groupedLabel = datasetTwo.reduce((acc, item) => {
      acc[item.region] = item.current_interest_rate;
      return acc;
    }, {} as { [key: string]: number });

    const regions = Object.keys(groupedLabel);

    const chartData = {
      labels: regions,
      datasets: [
        {
          label: 'Interest Rate',
          data: regions.map(region => groupedLabel[region]),
          backgroundColor: '#63993D',
        }
      ]
    };

    return (
      <Box>
        <Typography variant="h5">Current Interest Rate by Region Bar Chart </Typography>
        <div style={{ width: '100%', height: '400px' }}>
          <Bar data={chartData} />
        </div>
      </Box>
    );
  }

  return <div>The provided data format is not valid</div>;
};

export default ChartTwo;
