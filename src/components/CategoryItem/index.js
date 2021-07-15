import React from 'react';
import { Container, CategoryImage } from './styled';

export default ({data, activeCategory, setActiveCategory}) => {
    const handleChangeCat = () => {
        setActiveCategory( data.id );
    }

    return (
    <Container data-tip={data.name} data-for="tip-top" active={activeCategory} id={data.id} onClick={handleChangeCat}>
        <CategoryImage src={data.image} />
    </Container>
    )
}