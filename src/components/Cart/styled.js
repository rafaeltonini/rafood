import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0px;
    right: 30px;
`;

export const CartHeader = styled.div`
    height: 50px;
    width: 290px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin-right: 10px;
    margin-left: 10px;
`;

export const CartText = styled.div`
    color: #FFF;
    font-size: 17px;
    flex: 1;
`;

export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};
    color: #FFF;
`;

export const ProductArea = styled.div``;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductImg = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const ProductQtdArea = styled.div`
    display: flex;
    align-items: center;
`;
         
export const ProductQtdIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;
`;

export const ProductQtdText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0px 5px;
`;