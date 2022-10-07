import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  aligm-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid rgb(0 0 0 / 5%);
`
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`
export const Body = styled.div`
  flex: 1;
`
export const Name = styled.h3`
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
`
export const Desc = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 24px;
`
