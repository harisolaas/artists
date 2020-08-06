import styled from 'styled-components';

export const HeadingRoot = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.link};
  }
  > img {
    margin-right: 16px;
  }
`;

type Bio = { extend?: boolean };
export const Bio = styled.p<Bio>`
  ${({ extend }) => !extend && 'max-height: 80px;'}
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  white-space: break-spaces;
  margin-bottom: 0;
`;

export const ExtendButton = styled.button`
  background: unset;
  border: unset;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  color: ${({ theme }) => theme.colors.link};
  &:focus {
    outline: none;
  }
`;

export const SimilarRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    margin: 4px 4px;
    width: 100px;
    text-align: center;
  }
  h3 {
    font-size: 12px;
    width: 100%;
  }
`;
