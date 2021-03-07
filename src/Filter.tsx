import React, { FC } from "react";
import { DatePicker, Space } from "antd";
import { css } from "@emotion/react";

import { Moment } from "moment";

interface IFilterProps {
  onChangeStartDate: (date: Moment | null, dateStr: string) => void;
  onChangeEndDate: (date: Moment | null, dateStr: string) => void;
}

const Filter: FC<IFilterProps> = ({ onChangeStartDate }) => {
  return (
    <div
      css={css`
        width: 100%;
        padding: 10px;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div>
          <span
            css={css`
              color: #fff;
            `}
          >
            시작:{" "}
          </span>
          <Space>
            <DatePicker size="small" onChange={onChangeStartDate} />
          </Space>
        </div>
        <div
          css={css`
            margin-left: 10px;
          `}
        >
          <span
            css={css`
              color: #fff;
            `}
          >
            끝:{" "}
          </span>
          <Space>
            <DatePicker size="small" />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Filter;
