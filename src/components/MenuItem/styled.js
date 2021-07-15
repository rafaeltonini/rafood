import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: ${props=>props.active ? '#0B4D0B' : 'transparent'};
`;

export const LinkIcon = styled.img`
    height: 34px;
    width: auto;
`;