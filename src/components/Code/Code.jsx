import { Button, Card, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";

const StyledBtn = styled(Button)({
  textTransform: "none",
});
const StyledCode = styled(Card)({
  padding: "1rem",
});

const Code = ({ state }) => {
  const [showGet, setShowGet] = useState(false);
  const [showConvert, setShowConvert] = useState(false);

  const handlerGetBtn = () => {
    setShowGet(true);
    setShowConvert(false);
  };
  const handlerConvertBtn = () => {
    setShowConvert(true);
    setShowGet(false);
  };

  const getFormValues = (state) => {
    let arr = state.filter((item) => item.type && item.value);
    return {
      type: arr.map((item) => item.type),
      value: arr.map((item) => item.value),
    };
  };

  const convertArrayToObject = (obj) => {
    let array = [];
    for (let i = 0; i < obj.type.length; i++) {
      array.push({
        type: obj.type[i],
        value: obj.value[i],
      });
    }
    return array;
  };

  return (
    <>
      <Typography variant="body1">
        When click the button, will be displayed the result of work of the
        methods
      </Typography>

      <Box sx={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <StyledBtn variant="contained" onClick={handlerGetBtn}>
          getFormValues()
        </StyledBtn>
        <StyledBtn variant="contained" onClick={handlerConvertBtn}>
          convertArrayToObject()
        </StyledBtn>
      </Box>

      {showGet && (
        <StyledCode elevation="5">
          <pre>{JSON.stringify(getFormValues(state), null, 2)}</pre>
        </StyledCode>
      )}

      {showConvert && (
        <StyledCode elevation="5">
          <pre>
            {JSON.stringify(
              convertArrayToObject(getFormValues(state)),
              null,
              2
            )}
          </pre>
        </StyledCode>
      )}
    </>
  );
};

export default Code;
