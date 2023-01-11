import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

const Erorrcolor = red[500];

// UI FUNCTION -----------------------
export default function ErrorPage() {
  return (
    <Container sx={{ my: 12 }}>
      <Card sx={{ minWidth: '50%' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: 14 }} color={Erorrcolor} gutterBottom>
            <InfoIcon fontSize="large" />
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
