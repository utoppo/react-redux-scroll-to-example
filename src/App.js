import React from "react";
import { Provider } from "react-redux";
import "./styles.css";
import styled from "@emotion/styled";
import store from "./state/createStore";
import Cards from "./components/Cards";
import Filter from "./components/Filter";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
`;

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Filter />
        <Cards />
        <h2>Start editing to see some magic happen!</h2>
      </Wrapper>
    </Provider>
  );
}
