import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: auto;
  li {
    list-style: none;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
    text-transform: uppercase;
    transition: color 0.15s ease-in-out;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`
