import { Typography, Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PageProps } from "../App"
import { DatasetOne } from "../utils/getData";

const TableOne = ({data}: PageProps) => 
{
    if (!data) return <div>No data to display</div>;

    if (Array.isArray(data) && data.length > 0 && 'month' in data[0]) {
    const datasetOne = data as DatasetOne[];

    const groupedLabel = datasetOne.reduce((acc, item) => {
      if (!acc[item.month]) {
        acc[item.month] = { month: item.month, ZooBank: 0, CreditDog: 0, MoneyTree: 0 };
      }
      acc[item.month][item.originationPartner] += item.originalBalance;
      return acc;
    }, {} as { [key: string]: { month: string; ZooBank: number; CreditDog: number; MoneyTree: number } });

    const rows = Object.values(groupedLabel);

    const columns: GridColDef[] = [
      { field: 'month', headerName: 'Month', width: 300 },
      { field: 'ZooBank', headerName: 'ZooBank', width: 300 },
      { field: 'CreditDog', headerName: 'CreditDog', width: 300 },
      { field: 'MoneyTree', headerName: 'MoneyTree', width: 300 },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Original Balance Over Time Table
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pagination
            autoPageSize
            getRowId={(row) => row.month}
          />
        </Box>
      );
    }
  
    return <div>The provided data format is not valid</div>;
  };

export default TableOne