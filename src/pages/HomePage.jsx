import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { routersLinks } from '../Routes/routers';
import { Link } from 'react-router-dom';

// UI FUNCTION -----------------------
export default function HomePage() {
  return (
    <Container sx={{ my: 12 }}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {routersLinks.map(link => {
            return (
              <Grid item key={link.text.toString().toLocaleLowerCase()} xs={4}>
                <Card sx={{ border: '1px solid', borderColor: '#f1f1f1' }}>
                  <CardActionArea>
                    <CardContent>
                      <Link
                        to={link.text.toString().toLocaleLowerCase()}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        <Typography variant="button" color="primary.main" component="div">
                          {link.text.toString().toLocaleLowerCase()}
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
