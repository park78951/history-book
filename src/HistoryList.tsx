import { FC } from "react";
import { css } from "@emotion/react";

import { convertToDateFormat } from "./utils";

interface IHistoryListProps {
  histories: chrome.history.HistoryItem[];
}

const historyLiStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const HistoryList: FC<IHistoryListProps> = ({ histories }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 500px;
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
        {histories.length > 0 ? (
          histories.map(history => (
            <li css={historyLiStyle}>
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
          ))
        ) : (
          <li css={historyLiStyle}>검색 결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default HistoryList;
