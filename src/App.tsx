import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapPanel from "./components/panel/MapPanel";
import TablePanel from "./components/panel/TablePanel";
import NavigationLayout from "./components/layout/NavigationLayout";
import ChartPanel from "./components/panel/ChartPanel";
import FormData from "./components/panel/FormData";
import PieCharts from "./components/panel/PieCharts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/table" element={<TablePanel />} />
        <Route path="/maps" element={<MapPanel />} />
        <Route path="/chart" element={<ChartPanel />} />
        <Route path="/form" element={<PieCharts />} />
      </Routes>
      <NavigationLayout />
    </Router>
  );
}

export default App;
