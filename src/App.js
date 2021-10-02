import { Container, Divider } from "@mui/material";
import { useState } from "react";
import Code from "./components/Code";
import Form from "./components/Form";

const App = () => {
  const [state, setState] = useState([
    {
      type: "email",
      value: "123@gmail.com",
    },
    {
      type: "phone",
      value: "+79650987365",
    },
    {
      type: "",
      value: "",
    },
    {
      type: "link",
      value: "advance-club.ru",
    },
  ]);

  const addItem = (index) => {
    setState([
      ...state.slice(0, index + 1),
      { type: "", value: "" },
      ...state.slice(index + 1),
    ]);
  };

  const removeItem = (index) => {
    setState([...state.filter((itm, indx) => (indx === index ? false : true))]);
  };

  const setType = (index, type) => {
    let newState = [...state];
    newState[index].type = type;
    setState(newState);
  };

  const setValue = (index, value) => {
    let newState = [...state];
    newState[index].value = value;
    setState(newState);
  };

  const items = state.map((item, index, array) => {
    return (
      <Form
        key={index}
        type={item.type}
        value={item.value}
        setType={(type) => setType(index, type)}
        setValue={(value) => setValue(index, value)}
        addItem={() => addItem(index)}
        removeItem={() => removeItem(index)}
        enableRemoveBtn={array.length <= 1 ? false : true}
      />
    );
  });
  return (
    <Container maxWidth="md">
      {items}
      <Divider />
      <Code state={state} />
    </Container>
  );
};

export default App;
