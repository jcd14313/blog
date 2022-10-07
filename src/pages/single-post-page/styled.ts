import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  border-radius: 3px;
  background: var(--white);
  border-top: 3px solid #d2d6de;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgb(0 0 0 / 40%);
  min-height: 300px;
  padding: 20px;
`

export const UserInfo = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const Name = styled.span`
  color: #337ab7;
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`
export const Published = styled.span`
  color: var(--black);
  font-size: 10px;
  font-weight: 300;
`
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export const Content = styled.div`
  padding: 20px 0;
`

export const Title = styled.h3`
  font-size: 18px;
  color: #212529;
  font-weight: 800;
  margin-bottom: 10px;
  text-transform: capitalize;
`

export const Desc = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
  color: var(--black);
  font-weight: 300;
  transition: color 0.15s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
`
export const Loading = styled.div`
  font-size: 18px;
  font-weight: 300px;
  color: var(--black);
`
export const Heading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: var(--black);
  text-align: center;
  padding: 100px 0;
`
