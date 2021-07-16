import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 900;
    display: ${props=>props.status ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #00980D;
    max-height: 92vh;
    max-width: 100vw;
    overflow: auto;
`;