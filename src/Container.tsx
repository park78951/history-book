import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { atom, useRecoilState } from "recoil";

/**
 *  id: "19248"
 *  lastVisitTime: 1610870494870.381
 *  title: "Atoms | Recoil"
 *  typedCount: 0
 *  url: "https://recoiljs.org/docs/basic-tutorial/atoms"
 *  visitCount: 3
 */

const convertDateFormat = (num: number): string => {
  const dateFormat = new Date(num);
  const year = dateFormat.getFullYear() % 100;
  const month = (dateFormat.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const date = dateFormat
    .getDate()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const hours = dateFormat
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const minutes = dateFormat
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  return `${year}-${month}-${date} ${hours}:${minutes}`;
};

const historiesState = atom<chrome.history.HistoryItem[]>({
  key: "historiesState",
  default: [],
});

const Container = () => {
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
      <ul
        css={css`
          overflow-y: auto;
          list-style: none;
          padding: 0 10px;
        `}
      >
        {histories.map(history => (
          <li
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: #fff;
            `}
          >
            <span
              css={css`
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 240px;
              `}
            >
              {history.title || "무제"}
            </span>
            <span
              css={css`
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 87px;
              `}
            >
              {" "}
              {history.lastVisitTime
                ? convertDateFormat(history.lastVisitTime)
                : "정보없음"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Container;
