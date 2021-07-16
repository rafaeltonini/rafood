import React from 'react';
import { Container, ModalBody } from './styled';

export default ({status, setStatus, children}) => {
    const handleSetStatus = (e) => {
        if(e.target.classList.contains('ModalContainer')) {
            setStatus(false);
        }
    }

    return(
        <Container status={status} onClick={handleSetStatus} className='ModalContainer'>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );
}