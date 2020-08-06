import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  text-align: center;
  height: 32px;
  border: unset;
  border-bottom: 1px solid gray;
  color: ${({ theme }) => theme.colors.primary};
  background: unset;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Item styles
type Item = { disabled?: boolean };

const activeStyles = css`
  cursor: pointer;
  &:hover {
    background: black;
    font-weight: bold;
  }
`;
const disabledStyles = css`
  font-style: italic;
`;

export const Item = styled.li<Item>`
  text-align: center;
  padding: 4px;
  color: ${({ theme }) => theme.colors.primary};

  ${({ disabled }) => (disabled ? disabledStyles : activeStyles)}
`;
