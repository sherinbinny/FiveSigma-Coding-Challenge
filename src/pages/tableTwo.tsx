import { Typography, Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PageProps } from "../App" 

const TableTwo = ({data}: PageProps) =>
{
    if (!data) return <div>No data to display</div>;

    if (Array.isArray(data) && data.length > 0 && 'region' in data[0]) {
        const datasetTwo = data as Array<{ region: string, current_interest_rate: number }>;
    
        const rows = datasetTwo.map((item, index) => ({
            id: index,
            region: item.region,
            currentInterestRate: item.current_interest_rate,
        }));

        const columns: GridColDef[] = [
            { field: 'region', headerName: 'Region', width: 600 },
            { field: 'currentInterestRate', headerName: 'Current Interest Rate', width: 600 },
        ];
    
        return (
            <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant="h5" gutterBottom>
                Current Interest Rate by Region Table
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                pagination
                autoPageSize
                getRowId={(row) => row.id}
            />
            </Box>
        );
    }
  
    return <div>The provided data format is not valid</div>;
};


export default TableTwo