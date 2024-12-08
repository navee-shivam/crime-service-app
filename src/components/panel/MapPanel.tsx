import axios from "axios";
import { scaleLinear } from "d3-scale";
import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

interface SelectedStateProps {
  selectedState: string;
  setSelectedState: (state: string) => void;
}

const INDIA_JSON = "/assets/india.json";

const MapPanel = ({ selectedState, setSelectedState }: SelectedStateProps) => {
  const [mapData, setMapData] = useState<any>(null);
  const [crimeData, setCrimeData] = useState<any[]>([]);

  const colorScale = scaleLinear(
    [50, 500000], //map dense range
    ["#77EC95", "#072859"] //color codes for bold of state
  );

  const fetchMap = () => {
    fetch(INDIA_JSON)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch MAP JSON data");
        }
        return response.json();
      })
      .then((data) => setMapData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  };

  const fetchApi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8090/api/v1/getCrimeDetailsCount"
      );

      if (response.status === 200) {
        const formattedData = response.data.data.map((item: any) => ({
          id: item.stateCrime,
          crimeRate: Number(item.count),
        }));
        setCrimeData(formattedData);
      }
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    fetchMap();
    fetchApi();
  }, []);

  const getCrimeRateForState = (stateId: string) => {
    const stateData = crimeData.find((item) => item.id === stateId);
    return stateData ? Number(stateData.crimeRate) : 0;
  };

  const onStateClicked = (stateId: string) => {
    console.log("selected : " + stateId);
    setSelectedState(stateId);
    console.log(setSelectedState);
  };

  return (
    <div style={{ width: "100%", maxWidth: "1500px", margin: "0 auto" }}>
      <h1>Crime Rate in India till now</h1>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [78.9629, 22.5937], // India longitude and latitude
        }}
      >
        {mapData && (
          <Geographies geography={mapData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const crimeRate = getCrimeRateForState(geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(crimeRate)}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#F53", outline: "none" },
                      pressed: { fill: "#E42", outline: "none" },
                    }}
                    onClick={() => onStateClicked(geo.id)}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
    </div>
  );
};

export default MapPanel;
