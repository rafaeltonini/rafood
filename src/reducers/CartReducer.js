const initialState = {
    products: [],
    adress: [],
    discount: 0,
    delivery: 0
};

export default (state = initialState, action) => {
    let products = [...state.products];

    switch(action.type) {
        case 'ADD_PRODUCT':
            let id = action.payload.data.id;

            let index = products.findIndex(item => item.id === id);
            if(index > -1) {
                products[index].qt += action.payload.qtd;
            } else {
                products.push({
                    ...action.payload.data,
                    qtd: action.payload.qtd
                });
            }
            return{ ...state, products}
        break;
        case 'CHANGE_PRODUCT' :

            if(products[action.payload.key]) {
                switch(action.payload.opcao) {
                    case '-':
                        products[action.payload.key].qtd--;

                        if(products[action.payload.key].qtd <= 0) {
                            products = products.filter((item, index) => index != action.payload.key);
                        }

                    break;
                    case '+':
                        products[action.payload.key].qtd++;
                    break;
                
                }
            }
            return{ ...state, products}
        break
            

    }

    return state;
}