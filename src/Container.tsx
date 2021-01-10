import React from 'react';
import { css } from '@emotion/react';
import { atom, useRecoilState, RecoilRoot } from 'recoil';

const containerShowState = atom({
  key: 'containerShow',
  default: false,
});

interface IContainerProp {
  direction?: string;
}

interface IToggleButtonProp {
  onClick: () => void;
}

const ToggleButton = (prop: IToggleButtonProp) => {
  const { onClick } = prop;

  return (
    <button
      onClick={onClick}
      css={
        css`
        width: 50px;
          position: absolute;
          right: -100px;
        `
      }
    >
      노출 상태:
    </button>
  )
}

const Container = (prop: IContainerProp) => {
  const [show, setShow] = useRecoilState(containerShowState);
  const toggleContainer = () => {
    setShow(!show);
  }
  const { direction } = prop;
  return (
    <RecoilRoot>
      <div
        className={show ? "open" : undefined}
        css={css`
        border: 1px solid black;
        position: fixed;
        ${direction === "right" ? "right" : "left"}: -320px;
        width: 320px;
        height: 100%;
        box-sizing: border-box;
        transition: left .5s;
        top: 0px;

        &.open {
          ${direction === "right" ? "right" : "left"}: 0px;
        }
        `}
      >
        <ToggleButton onClick={toggleContainer}></ToggleButton>
      </div>
    </RecoilRoot>
  );
}

export default Container;