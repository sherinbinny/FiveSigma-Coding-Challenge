import { Typography, Box } from "@mui/material"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { PageProps } from "../App"
import { DatasetOne } from "../utils/getData";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ChartOne = ({data}: PageProps) => 
{
  if (!data) return <div>Please wait, loading...</div>;

  if (Array.isArray(data) && data.length > 0 && 'month' in data[0]) {
    const datasetOne = data as DatasetOne[];

    const groupedLabel = datasetOne.reduce((acc, item) => {
      if (!acc[item.month]) {
        acc[item.month] = { ZooBank: 0, CreditDog: 0, MoneyTree: 0 };
      }
      acc[item.month][item.originationPartner] += item.originalBalance;
      return acc;
    }, {} as { [key: string]: { ZooBank: number, CreditDog: number, MoneyTree: number } });

    const months = Object.keys(groupedLabel);

    const chartData = {
      labels: months,
      datasets: [
        {
          label: 'ZooBank',
          data: months.map(month => groupedLabel[month].ZooBank),
          borderColor: '#FF4571'
        },
        {
          label: 'CreditDog',
          data: months.map(month => groupedLabel[month].CreditDog),
          borderColor: '#63993D'
        },
        {
          label: 'MoneyTree',
          data: months.map(month => groupedLabel[month].MoneyTree),
          borderColor: '#4394E5'
        },
      ],
    };

    return (
      <Box>
        <Typography variant="h5">Original Balance Over Time Line Graph</Typography>
        <div style={{ width: '100%', height: '500px' }}>
          <Line data={chartData} />
        </div>
      </Box>
    );
  }

  return <div>The provided data format is not valid</div>;
};

export default ChartOne;

