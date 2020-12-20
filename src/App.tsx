import React, { Fragment } from 'react';
import './App.css';
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
const color = 'white';

function App() {
  return (
    <Fragment>
      <Button>버튼입니다.</Button>
      <div css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}>
        나도 버튼
      </div>
    </Fragment>
  );
}

export default App;
