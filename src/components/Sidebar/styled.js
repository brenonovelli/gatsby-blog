import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: left;
  width: 20rem;

  ${media.lessThan('large')`
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`;
