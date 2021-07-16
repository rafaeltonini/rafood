import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container,
         ProductArea,
         ProductButtons,
         ProductImg,
         ProductInfoArea,
         ProductInfo,
         ProductQtdArea,
         ProductName,
         ProductIngredients,
         ProductButton,
         ProductQtd,
         ProductQtdimg,
         ProductText,
         ProductPrice
} from './styled';

export default ({data, setStatus}) => {
    const dispatch = useDispatch();

    const [qtd, setQtd] = useState(1);

    useEffect(() => {
        setQtd(1);
    }, [data])

    const handleCancel = () => {
        setStatus(false);
    }

    const handleMenosQtd = () => {
        if(qtd > 1) {
            setQtd(qtd - 1);
        }
    }

    const handleMaisQtd = () => {
        setQtd(qtd + 1);
    }

    const handleAddtoCart = () => {
        //montar o payload para alimentar o reducer
        //mandar para o reducer
        dispatch({
            type: 'ADD_PRODUCT',
            payload:{data, qtd}
        })
        setStatus(false);
    }

    return (
        <Container>
            <ProductArea>
                <ProductImg src={data.image}/>
                <ProductInfoArea>
                    <ProductInfo>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductInfo>
                    <ProductQtdArea>
                        <ProductQtd>
                            <ProductQtdimg src='/assets/minus.png' onClick={handleMenosQtd}/>
                            <ProductText>{qtd}</ProductText>
                            <ProductQtdimg src='/assets/plus.png' onClick={handleMaisQtd}/>
                        </ProductQtd>
                        <ProductPrice>
                            R${(data.price * qtd).toFixed(2)}
                        </ProductPrice>
                    </ProductQtdArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancel}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddtoCart}>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}