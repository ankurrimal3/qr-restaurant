import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { updateName } from "store/reducers/user";
import MainRouter from "routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();

  const handleChange = ({ target: { value } }: any) =>
    dispatch(updateName(value));

  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  );
}

const Child = () => {
  const user = useAppSelector((s) => s.user);
  return <>{user?.name}</>;
};

export default App;
