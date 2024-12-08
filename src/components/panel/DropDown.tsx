import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface DropDownProps {
  stateName: string;
  setStateName: (value: string) => void;
}

function DropDown({ stateName, setStateName }: DropDownProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setStateName(event.target.value);
  };

  const stateData = [
    "Assam",
    "nagaland",
    "punjab",
    "chhattisgarh",
    "gujarat",
    "goa",
    "andhra pradesh",
    "kerala",
    "jammu & kashmir",
    "madhya pradesh",
    "puducherry",
    "daman & diu",
    "haryana",
    "lakshadweep",
    "delhi ut",
    "maharashtra",
    "assam",
    "a & n islands",
    "uttar pradesh",
    "d&n haveli",
    "manipur",
    "odisha",
    "arunachal pradesh",
    "uttarakhand",
    "tripura",
    "karnataka",
    "chandigarh",
    "west bengal",
    "himachal pradesh",
    "jharkhand",
    "rajasthan",
    "tamil nadu",
    "telangana",
    "mizoram",
    "d & n haveli",
    "bihar",
    "meghalaya",
    "sikkim",
  ];

  return (
    <>
      <InputLabel id="demo-select-small-label">Below Data was overall for 2001-2021</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={stateName}
        label="State"
        onChange={handleChange}
        sx={{ width: 200 }}
      >
        {stateData.map((item: any) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
        ;
      </Select>
    </>
  );
}

export default DropDown;
