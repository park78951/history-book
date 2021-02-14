import { FC } from "react";
import { css } from "@emotion/react";

import { convertToDateFormat } from "./utils";

interface IHistoryListProps {
  histories: chrome.history.HistoryItem[];
  searchKeyword: string;
}

const HistoryList: FC<IHistoryListProps> = ({ histories, searchKeyword }) => {
  const filteredHistories = histories.filter((history) => {
    return history.title?.includes(searchKeyword);
  });

  return (
    <ul
      css={css`
        overflow-y: auto;
        list-style: none;
        padding: 0 10px;
      `}
    >
      {filteredHistories.map(history => (
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
            {history.lastVisitTime
              ? convertToDateFormat(history.lastVisitTime)
              : "정보없음"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default HistoryList;
