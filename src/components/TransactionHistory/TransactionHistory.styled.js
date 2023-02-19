import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    padding: 16px;
    font-size: 20px;
    text-align: center;
    padding-left: 80px;
    padding-right: 80px;
    tr: nth-child(even){
        background-color: #ddd;
    };
`
export const Thead = styled.thead`
    background-color: #04AA6D;
    color: white;
    height: 40px;
    text-transform: uppercase;
`
export const Td = styled.td`
    padding-top: 5px;
    padding-bottom: 5px;
`
