import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    width: 650px;
`;

export const ProductArea = styled.div`
    height: 200px;
    display: flex;
`;

export const ProductButtons = styled.div`
    height: 50px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ProductButton = styled.button`
    border: 0;
    background-color: #073C07;
    box-shadow: 4px 5px 0px #999;
    color: #FFF;
    font-size: ${props=>props.small ? '14px' : '22px'};
    font-weight: bold;
    padding: ${props=>props.small ? '5px 10px' : '10px 20px'};
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductImg = styled.img`
    width: 308px;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

export const ProductInfo = styled.div`
`;

export const ProductQtdArea = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #073C07;
    color: #FFF;
`;

export const ProductQtd = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtdimg = styled.img`
    width: 24px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export const ProductText = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-right: 10px;
`;

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;
`;