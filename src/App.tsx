import React from 'react';
import './App.css';
import Container from "./Container";
import {
  RecoilRoot
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Container></Container>
    </RecoilRoot>
  );
}

export default App;
