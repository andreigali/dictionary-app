import SearchBar from "./components/SearchBar";
import Header from "./components/header";
import "./App.css";
import { SearchProvider } from "./context/SearchContext";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader";
import Favourites from "./components/Favourites";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Dictionary</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <SearchProvider>
        <div></div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header></Header>
                  <SearchBar />
                </>
              }
            />
            <Route
              path="/word/:text"
              element={
                <>
                  <Header></Header>
                  <PageLoader />
                  <SearchBar />
                  <Main />
                </>
              }
            ></Route>
            <Route path="/favs" element={<Favourites />}></Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
