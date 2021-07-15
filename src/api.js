let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(BASE+'/categories');
        const json = await res.json();
        return json;
    },
    getProducts: async (category, page, search) => {
        //GET /api/products ([search, page, category])
        //Crio uma variavel que vai validar os campos que vou mandar na url do get
        let fields = {};
        if(category > 0) {
            fields.category = category;
        }
        if(page > 0) {
            fields.page = page;
        }
        if(search != '') {
            fields.search = search;
        }
        //Com isso terei algo assim: {category: 1, page: 1, search: 'teste'}
        //Para enviar na url preciso que seja uma string assim:
        //"category=1&page=1&search=teste"
        //para isso vou usar a funcao URLSearchParams
        let urlFields = new URLSearchParams(fields).toString();

        const res = await fetch(BASE+'/products?'+urlFields);
        const json = await res.json();
        return json;
    }
};