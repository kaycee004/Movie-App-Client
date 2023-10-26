import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Bookmark from "./pages/Bookmark/Bookmark";
import Error from "./pages/Error/Error";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthContext";
import {Toaster} from 'react-hot-toast'
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Toaster position='top-right'/>
        <AuthProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvseries" element={<TvSeries />} />
            <Route element={<PrivateRoute/>}>
              <Route path="/bookmark" element={<Bookmark />} />
            </Route>
            </Route>


            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
