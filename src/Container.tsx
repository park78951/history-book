import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import { atom, useRecoilState } from "recoil";

import HistoryList from "./HistoryList";
import SearchInput from "./SearchInput";

const historiesState = atom<chrome.history.HistoryItem[]>({
  key: "historiesState",
  default: [],
});

const searchKeywordState = atom({
  key: "searchKeyword",
  default: "",
});

const Container: FC = () => {
  const [histories, setHistories] = useRecoilState(historiesState);
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  useEffect(() => {
    chrome.history.search({ text: "" }, historyList => {
      setHistories(historyList);
    });
  }, [setHistories]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearchKeyword(event.target.value);
  };

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
      <SearchInput onChange={onChange}/>
      <HistoryList histories={histories} searchKeyword={searchKeyword} />
    </div>
  );
};

export default Container;
