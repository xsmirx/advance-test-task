import { Button, Card, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";

const StyledBtn = styled(Button)({
  textTransform: "none",
});
const StyledCode = styled(Card)({
  padding: "1rem",
});

const Methods = ({ state }) => {
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
    //check for empty field on form
    let arr = state.filter((item) => {
      for (let key in item) {
        if (!item[key]) {
          return false;
        }
      }
      return true;
    });

    let namesOfFields = Object.keys(arr[0]);
    let result = {};
    for (let i = 0; i < namesOfFields.length; i++) {
      result[namesOfFields[i]] = [];
      for (let j = 0; j < arr.length; j++) {
        result[namesOfFields[i]].push(arr[j][namesOfFields[i]]);
      }
    }

    return result;
  };

  const convertArrayToObject = (obj) => {
    let result = [];

    let namesOfFields = Object.keys(obj);

    let numberOfFields = namesOfFields.length;
    let numberOfForms = obj[namesOfFields[0]].length;

    for (let i = 0; i < numberOfForms; i++) {
      result.push({});
      for (let j = 0; j < numberOfFields; j++) {
        result[i][namesOfFields[j]] = obj[namesOfFields[j]][i];
      }
    }

    return result;
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

export default Methods;
