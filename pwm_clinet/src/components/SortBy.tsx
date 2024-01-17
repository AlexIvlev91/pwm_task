import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortBy = ({ setSortOption }: any) => {

    const handleSortChange = (event:any) => {
        setSortOption(event.target.value);
      };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl>
        <InputLabel
          sx={{
            fontSize: 13,
            margin: "-5px",
          }}
          id="sortBylabel"
        >
          Sort By
        </InputLabel>
        <Select
          labelId="sortBylabel"
          id="sortBySelect"
          label="Sort By"
          sx={{ width: 136, height: 36 }}
          onChange={handleSortChange}
        >
          <MenuItem value="asc">The cheapest</MenuItem>
          <MenuItem value="desc">The most expensive</MenuItem>
          <MenuItem value="rate">Top-rated</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel
          sx={{
            fontSize: 13,
            margin: "-5px",
          }}
          id="conditionLabel"
        >
          Condition
        </InputLabel>
        <Select
          labelId="conditionLabel"
          id="conditionSelect"
          label="Condition"
          sx={{ width: 136, height: 36 }}
        >
          <MenuItem value={4}></MenuItem>
          <MenuItem value={5}></MenuItem>
          <MenuItem value={6}></MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel
          sx={{
            fontSize: 13,
            margin: "-5px",
          }}
          id="deliveryLabel"
        >
          Delivery
        </InputLabel>
        <Select
          labelId="deliveryLabel"
          id="deliverySelect"
          label="Delivery"
          sx={{ width: 136, height: 36 }}
        >
          <MenuItem value={7}></MenuItem>
          <MenuItem value={8}></MenuItem>
          <MenuItem value={9}></MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default SortBy
