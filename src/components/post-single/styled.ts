import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  border-bottom: 1px solid #dee2e6;
  padding: 20px 0;

  a {
    text-decoration: none;
    transition: color 0.15s ease-in-out;
    color: var(--black);

    &:hover {
      color: #0085a1;
    }
  }
`

export const Title = styled.h3`
  font-size: 25px;
  color: #212529;
  font-weight: 800;
  margin-bottom: 10px;
  text-transform: capitalize;
  &:hover {
    color: #0085a1;
  }
`

export const Desc = styled.p`
  margin: 0 0 10px 0;
  font-size: 20px;
  color: #212529;
  font-weight: 300;
  transition: color 0.15s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  &:hover {
    color: #0085a1;
  }
`

export const Details = styled.p`
  margin: 0 0 10px 0;
  font-size: 12px;
  color: #6c757d;
  font-weight: 300;
  font-style: italic;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: #0085a1;
  }
`
