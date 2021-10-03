import { Container } from "@mui/material";
import { useState } from "react";
import Code from "./components/Code/Code";
import Form from "./components/Form/Form";

const initialState = [
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
];

const App = () => {
  const [state, setState] = useState(initialState);

  const addItem = (index) => {
    let newState = [...state];
    newState.splice(index + 1, 0, { type: "", value: "" });
    setState(newState);
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
      <Code state={state} />
    </Container>
  );
};

export default App;
