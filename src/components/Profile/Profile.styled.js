import styled from 'styled-components';

export const Description = styled.div`
    padding: 20px;
    align-items: center;
    text-align: center;
    font-size: 20px;
    background-color: #F4EFEF; 
`
export const Image = styled.img`
    display: inline-block;
    margin-top: 20px;
    width: 480px;
    object-fit: contain;
    border: 1px solid #F4EFEF;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
`

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
    gap: 5px;
    width: 120px;
    height: 120px;
    background-color: #ddd;
`

