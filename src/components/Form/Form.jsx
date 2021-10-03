import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Form = ({
  type,
  value,
  setType,
  setValue,
  addItem,
  removeItem,
  enableRemoveBtn,
}) => {
  const handlerType = (e) => setType(e.target.value);
  const handlerValue = (e) => setValue(e.target.value);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        gap: "1rem",
        margin: "1rem 0",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <FormControl sx={{ flex: "1 1 100px" }}>
          <InputLabel id="type">Type</InputLabel>
          <Select
            id="type"
            labelId="type"
            label="Type"
            variant="outlined"
            value={type}
            onChange={handlerType}
          >
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
            <MenuItem value="link">Link</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ flex: "1 1 250px" }}>
          <TextField
            id="value"
            label="Value"
            variant="outlined"
            value={value}
            onChange={handlerValue}
          />
        </FormControl>
      </Box>

      <Box sx={{ flex: "1 0 144px", display: "flex", gap: "1rem" }}>
        {type && value && (
          <Button variant="contained" onClick={addItem}>
            <AddCircleIcon />
          </Button>
        )}

        {enableRemoveBtn && (
          <Button variant="outlined" color="error" onClick={removeItem}>
            <RemoveCircleIcon />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Form;
