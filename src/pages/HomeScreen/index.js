import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, 
        CategoryArea, 
        CategoryList, 
        ProductArea, 
        ProductList,
        ProdPagArea,
        ProdPagItem 
    } from './styled';
//Componentes    
import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [products, setProducts] = useState([]);
    //Paginacao
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage] = useState(1);
    //Busca por tempo... nao gostei dessa solucao
    const [activeSearch, setActiveSearch] = useState('');
    //State de controle da exibicao do modal
    const [statusModal, setStatusModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const getProducts = async () => {
        const prod = await api.getProducts(activeCategory, activePage, activeSearch);
        if(prod.error == '') {
            setProducts( prod.result.data );
            setTotalPages( prod.result.pages);
            setActivePage( prod.result.page)
        }
    }

    //monitora o headerSearch para alterar o activesearch, com isso ativa o outro useeffect que monitora o activesearch para recarregar os produtos. Esta meio gambiarra mas funciona
    useEffect( () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout( () => { 
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch]);

    useEffect( () => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if(cat.error == '') {
                setCategories( cat.result );
            }
            ReactTooltip.rebuild(); //como as categorias ja foram criadas quando o tooltip le as tips, preciso dar um rebuild apos carregar as categorias para trazer as tooltips dos itens carregados.
        }
        getCategories();
    }, [])

    useEffect( () => {
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch])

    const handleProductClick = (data) => {
        setModalData(data);
        setStatusModal(true);
    }

    return (
        <Container>
            <Header
                search={headerSearch}
                onSearch={setHeaderSearch}
            />
            {console.log('TESTE CATEG: '+categories.length)}
            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma Categoria
                    <CategoryList>
                        <CategoryItem 
                            data={{
                                id:0,
                                name:'Todas as Categorias',
                                image:'/assets/food-and-restaurant.png' 
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index)=>(
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>         
            }
            {console.log('TESTE PROD: '+products.length)}
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index) => (
                            <ProductItem
                                key={index}
                                data={item}
                                onClick={handleProductClick}
                            />
                        ))}                        
                    </ProductList>
                </ProductArea>   
            }
            {totalPages > 0  &&
                <ProdPagArea>
                    { Array(totalPages).fill(0).map((item, index) => (
                        <ProdPagItem 
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                            >
                            {index + 1}
                        </ProdPagItem>
                    ))}
                </ProdPagArea>
            }
            <Modal status={statusModal} setStatus={setStatusModal}>
                <ModalProduct data={modalData} setStatus={setStatusModal}/>
            </Modal>
        </Container>
    );
}