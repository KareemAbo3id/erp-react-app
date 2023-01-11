import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import MainNavBar from '../../components/Common/MainNavBar';
import PageTitle from '../../components/Common/PageTitle';

// UI FUNCTION -----------------------
export default function PlaceholderPage(props) {
  return (
    <>
      <MainNavBar brand={<PageTitle>{props.pageTitle}</PageTitle>} userName="Khalid Abdulnasir" />
      <Container sx={{ my: 12 }}>
        <Stack spacing={2}>{props.children}</Stack>
      </Container>
    </>
  );
}
