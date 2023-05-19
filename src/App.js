
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/public/routes';
import './App.css';
import PageNotFound from './components/error/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
