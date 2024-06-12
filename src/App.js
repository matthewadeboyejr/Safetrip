import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Drivers from "./pages/Drivers";
import RootLayout from "./components/layout/RootLayout";
import Newdriver from "./pages/Newdriver";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<RootLayout />}>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="newdriver" element={<Newdriver />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
