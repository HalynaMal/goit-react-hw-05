import clsx from "clsx";
import css from "./App.module.css";

import { NavLink } from "react-router-dom";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

function App() {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/Home">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/Movies">
            Movies
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/Searche">
            Searche
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default App;

// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

//   const options = {
//    headers: {
//     // Замість api_read_access_token вставте токен  api-key: 3d2eadbfe8af5a118af2934be0f68dff
//   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDJlYWRiZmU4YWY1YTExOGFmMjkzNGJlMGY2OGRmZiIsInN1YiI6IjY2MGJlMjY2YTg4NTg3MDE3Y2U2Zjc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJN5mfu1Ld40feDAbvGMXnIhz0cpQyybPbSBDXDUuBw'
//    }
//   };
