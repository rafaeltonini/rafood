import React, { useState } from 'react';
import { CartArea, 
         CartHeader, 
         CartIcon, 
         CartText, 
         CartBody,
         ProductArea,
         ProductItem,
         ProductImg,
         ProductInfoArea,
         ProductName,
         ProductPrice,
         ProductQtdArea,
         ProductQtdIcon,
         ProductQtdText
        } from "./styled";
import { useSelector, useDispatch } from 'react-redux';


export default () => {
    const products = useSelector(state => state.cart.products);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleToggleCart = () => {
        setShow(!show);
    }

    const handleQtdCart = (key, opcao) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, opcao}
        })
    }

    return (
        <CartArea>
            <CartHeader onClick={handleToggleCart}>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show && 
                <CartIcon src="/assets/down.png"/>
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductImg src={item.image}/>
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R${item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQtdArea>
                                <ProductQtdIcon 
                                src='/assets/minus.png'
                                onClick={()=>handleQtdCart(index, '-')}
                                />
                                <ProductQtdText>{item.qtd}</ProductQtdText>
                                <ProductQtdIcon 
                                src='/assets/plus.png'
                                onClick={()=>handleQtdCart(index, '+')}
                                />
                            </ProductQtdArea>
                        </ProductItem>
                    ))}
                </ProductArea>
            </CartBody>            
        </CartArea>
    );
}