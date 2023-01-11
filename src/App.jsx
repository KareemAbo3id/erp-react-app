import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/common/PlaceholderPage';
import ErrorPage from './pages/ErrorPage';
import { routersLinks, userOptions } from './Routes/routers';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routersLinks.map(routeLink => {
            return (
              <Route
                key={routeLink.text.toString().toLowerCase()}
                path={'/' + routeLink.text.toString().toLowerCase()}
                element={<PlaceholderPage pageTitle={routeLink.text.toString()}>{routeLink.page}</PlaceholderPage>}
              />
            );
          })}

          {userOptions.map(routeLink => {
            return (
              <Route
                key={routeLink.text.toString().toLowerCase()}
                path={'/' + routeLink.text.toString().toLowerCase()}
                element={<PlaceholderPage pageTitle={routeLink.text.toString()}>{routeLink.page}</PlaceholderPage>}
              />
            );
          })}

          <Route
            path="/"
            element={
              <PlaceholderPage pageTitle="ERP">
                <HomePage />
              </PlaceholderPage>
            }
          />

          <Route
            path="*"
            element={
              <PlaceholderPage pageTitle="Error">
                <ErrorPage />
              </PlaceholderPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
