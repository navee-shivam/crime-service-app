import {
  DetailsRounded,
  FormatLineSpacingSharp,
  Grid4x4Rounded,
  MapRounded,
  PieChartRounded,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigationLayout() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
    switch (newValue) {
      case 0:
        navigate("/table");
        break;
      case 1:
        navigate("/maps");
        break;
      case 2:
        navigate("/chart");
        break;
      case 3:
        navigate("/form");
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 9999,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Grid-View" icon={<Grid4x4Rounded />} />
      <BottomNavigationAction label="Map-View" icon={<MapRounded />} />
      <BottomNavigationAction label="Chart-View" icon={<PieChartRounded />} />
      <BottomNavigationAction label="Form-View" icon={<DetailsRounded />} />
    </BottomNavigation>
  );
}

export default NavigationLayout;
