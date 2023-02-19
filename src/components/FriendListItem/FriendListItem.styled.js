import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const Image = styled.img`
    display: inline-block;
    margin: 10px;
    width: 150px;
    object-fit: contain;
    border: 1px solid #F4EFEF;
    border-radius: 10%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
`
export const FriendName = styled.p`
    font-size: 24px;
    color: black;
`

export const Marker = styled.span`
    color: ${props => props.isOnline ? 'green': 'red' };
`