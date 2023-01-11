import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReportIcon from '@mui/icons-material/Report';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

const Erorrcolor = red[500];

// UI FUNCTION -----------------------
export default function ErrorPage() {
  return (
    <Container>
      <Card sx={{ minWidth: '50%' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography color={Erorrcolor} gutterBottom>
            <ReportIcon sx={{ fontSize: '5rem' }} />
          </Typography>
          <Typography variant="h4" component="div" gutterBottom>
            Error 404 <br />
            Page Not Found
          </Typography>
          <Typography variant="body2" gutterBottom>
            This is not the page you are looking for.
          </Typography>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button variant="outlined" size="large">
                Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
