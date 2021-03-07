import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import { atom, useRecoilState } from "recoil";

import HistoryList from "./HistoryList";
import SearchFrom from "./SearchForm";
import Filter from "./Filter";

import { Moment } from "moment";

const historiesState = atom<chrome.history.HistoryItem[]>({
  key: "historiesState",
  default: [],
});

const searchState = atom<string>({
  key: "searchState",
  default: "",
});

interface IFilterState {
  startDate: number | null;
  endDate: number | null;
}

const initFilterstate = {
  startDate: null,
  endDate: null,
};

const filterState = atom<IFilterState>({
  key: "filterState",
  default: initFilterstate,
});

const Container: FC = () => {
  const [histories, setHistories] = useRecoilState(historiesState);
  const [search, setSearch] = useRecoilState(searchState);
  const [filter, setFilter] = useRecoilState(filterState);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    if (value === "") {
      chrome.history.search({ text: "" }, historyList => {
        setHistories(historyList);
      });
    }
  };

  const searchHistories = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    chrome.history.search({ text: search }, historyList => {
      setHistories(historyList);
    });
  };

  const onChangeStartDate = (date: Moment | null, dateStr: string) => {
    setFilter({ ...filter, startDate: new Date(dateStr).getTime() });
  };

  const onChangeEndDate = (date: Moment | null, dateStr: string) => {
    setFilter({ ...filter, endDate: new Date(dateStr).getTime() });
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
      <SearchFrom
        value={search}
        onChange={onChangeSearch}
        onSubmit={searchHistories}
      />
      <Filter
        onChangeStartDate={onChangeStartDate}
        onChangeEndDate={onChangeEndDate}
      />
      <HistoryList histories={histories} />
    </div>
  );
};

export default Container;
