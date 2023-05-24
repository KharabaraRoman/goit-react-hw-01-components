import styled from 'styled-components'

export const Photo = styled.img`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    margin-bottom: 20px;
`
export const UserName = styled.p`
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    letter-spacing: 1.5em;
`
export const Tag = styled.p`
    font-size: 16px;
    display: flex;
    justify-content: center;
    color: black;
`
export const Location = styled.p`
    display: flex;
    justify-content: center;
    letter-spacing: 0.5em;
    font-size: 18px;
    font-weight: 500;
`
export const ListItem = styled.ul`
    display: flex;
    justify-content: center;
    gap: 200px;
    margin-top: 70px;
`
export const Items = styled.li`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    text-decoration: none;
`
export const Stats = styled.span`
    font-size: 18px;
    font-weight: 700;
    margin-top: 5px;
    display: flex;
    justify-content: center;
`