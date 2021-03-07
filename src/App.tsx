import React from "react";
import Container from "./Container";
import { RecoilRoot } from "recoil";
import { Global, css } from "@emotion/react";
import "antd/dist/antd.css";

function App() {
  return (
    <RecoilRoot>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
          }
        `}
      />
      <Container></Container>
    </RecoilRoot>
  );
}

export default App;
