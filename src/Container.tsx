import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import { atom, useRecoilState } from "recoil";

import HistoryList from "./HistoryList";

const historiesState = atom<chrome.history.HistoryItem[]>({
  key: "historiesState",
  default: [],
});

const Container: FC = () => {
  const [histories, setHistories] = useRecoilState(historiesState);

  useEffect(() => {
    chrome.history.search({ text: "" }, historyList => {
      setHistories(historyList);
    });
  }, [setHistories]);

  return (
    <div
      css={css`
        width: 400px;
        height: 600px;
        background-color: #000;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
        overflow-y: auto;
      `}
    >
      <HistoryList histories={histories} />
    </div>
  );
};

export default Container;
