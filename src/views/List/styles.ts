import styled from 'styled-components';

export default styled.div`
  a,
  h1 {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
