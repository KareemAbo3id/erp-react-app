import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavBar from './components/Common/MainNavBar';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/common/PlaceholderPage';
import ErrorPage from './pages/ErrorPage';
import { routersLinks } from './Routes/routers';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavBar navBarTitle="ERP" userName="Khalid Abdulnasir" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {routersLinks.map(routeLink => {
            return (
              <Route
                key={routeLink.text.toString().toLowerCase()}
                path={'/' + routeLink.text.toString().toLowerCase()}
                element={<PlaceholderPage pageTitle={routeLink.text.toString()}>{routeLink.page}</PlaceholderPage>}
              />
            );
          })}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
