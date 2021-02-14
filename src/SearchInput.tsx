import { FC } from "react";
import { css } from "@emotion/react";

interface ISearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<ISearchInputProps> = ({ onChange }) => {
  return (
    <input
      css={css`
        width: 100%;
      `}
      onChange={onChange}
      type="text"
    ></input>
  );
};

export default SearchInput;
