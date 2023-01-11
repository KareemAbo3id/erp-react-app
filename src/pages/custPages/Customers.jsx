import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Table Structure:
const columns = [
  { field: 'id', headerName: '#' },
  { field: 'custName', headerName: 'customer name' },
  { field: 'salesman', headerName: 'salesman' },
  { field: 'region', headerName: 'region' },
  { field: 'credit', headerName: 'credit' },
];

// UI FUNCTION -----------------------
export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/KareemAbo3id/erp-react-app/master/db.json')
      .then(res => res.json())
      .then(cust => setCustomers(cust));
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers.map(i => i)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
