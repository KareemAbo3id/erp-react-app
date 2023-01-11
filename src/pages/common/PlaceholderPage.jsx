import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import PageTitle from '../../components/Common/PageTitle';

// UI FUNCTION -----------------------
export default function PlaceholderPage(props) {
  return (
    <>
      <Container sx={{ my: 12 }}>
        <Stack spacing={2}>
          <PageTitle>{props.pageTitle}</PageTitle>
        </Stack>

        <Stack spacing={2}>{props.children}</Stack>
      </Container>
    </>
  );
}
