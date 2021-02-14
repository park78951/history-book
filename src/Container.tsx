import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import { atom, useRecoilState } from "recoil";

import HistoryList from "./HistoryList";

const historiesState = atom<chrome.history.HistoryItem[]>({
  key: "historiesState",
  default: [],
});

const searchState = atom<string>({
  key: "searchState",
  default: "",
});

const Container: FC = () => {
  const [histories, setHistories] = useRecoilState(historiesState);
  const [search, setSearch] = useRecoilState(searchState);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const searchHistories = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    chrome.history.search({ text: search }, historyList => {
      setHistories(historyList);
    });
  };

  useEffect(() => {
    chrome.history.search({ text: "" }, historyList => {
      setHistories(historyList);
    });
  }, [setHistories]);

  return (
    <div
      css={css`
        width: 400px;
        background-color: #000;
        overflow-y: auto;
        padding: 10px 0;
      `}
    >
      <form
        onSubmit={searchHistories}
        css={css`
          display: flex;
          justify-content: center;
          overflow-y: auto;
        `}
      >
        <input
          value={search}
          onChange={onChangeSearch}
          css={css`
            width: 200px;
            height: 25px;
            border: none;
            border-bottom: 1px solid #dc143c;
            background-color: transparent;
            color: #fff;
            outline: none;
            margin-right: 10px;
            padding-left: 5px;
          `}
        />
        <button
          type="submit"
          css={css`
            width: 80px;
            height: 25px;
            color: #dc143c;
            border: 1px solid #dc143c;
            background-color: #000;
            outline: none;
          `}
        >
          검색
        </button>
      </form>
      <div
        css={css`
          width: 100%;
          height: 500px;
          overflow-y: auto;
        `}
      >
        <HistoryList histories={histories} />
      </div>
    </div>
  );
};

export default Container;
