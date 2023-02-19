import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    gap: 2px;
    font-size: 20px;
    list-style: none;
    justify-content: center;
    padding: 0px;
    margin: 0px;
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 5px;
    width: 120px;
    height: 120px;
    background-color: ${function getRandomHexColor(){
            return `#${Math.floor(Math.random() * 16777215)
            .toString(16).padStart(6, 0)}`;
        }
    }
`