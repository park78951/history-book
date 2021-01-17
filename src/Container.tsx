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
  return `${dateFormat.getFullYear()}년 ${dateFormat.getMonth()}월 ${dateFormat.getDate()}일 ${
    dateFormat.getHours
  }시 ${dateFormat.getMinutes()}분`;
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
        overflow-y: hidden;
      `}
    >
      <ul
        css={css`
          overflow-y: scroll;
        `}
      >
        {histories.map(history => (
          <li
            css={css`
              color: #fff;
            `}
          >
            <span>제목: {history.title || "무제"}</span>
            <span>주소: {history.url}</span>
            <span>
              방문시간:{" "}
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
