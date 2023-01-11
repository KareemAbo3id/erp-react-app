import { Typography } from '@mui/material';

// UI FUNCTION -----------------------
export default function PageTitle(props) {
  return (
    <div>
      <Typography variant="h5" fontWeight={300} sx={{ padding: 0, margin: 0, marginLeft: '0.6rem' }}>
        {props.children}
      </Typography>
    </div>
  );
}
