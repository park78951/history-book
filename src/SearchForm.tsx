import { FC } from "react";
import { css } from "@emotion/react";

interface ISearchFromProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: FC<ISearchFromProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      css={css`
        display: flex;
        justify-content: center;
        overflow-y: auto;
      `}
    >
      <input
        value={value}
        onChange={onChange}
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
  );
};

export default SearchForm;
