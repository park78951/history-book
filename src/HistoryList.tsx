import { FC } from "react";
import { css } from "@emotion/react";

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

interface IHistoryListProps {
  histories: chrome.history.HistoryItem[];
}

const HistoryList: FC<IHistoryListProps> = ({ histories }) => {
  return (
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
            {history.lastVisitTime
              ? convertDateFormat(history.lastVisitTime)
              : "정보없음"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default HistoryList;
