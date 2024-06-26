import axios from 'axios';
export default class Get {
    static async getAll(limit, page) {
        const response = await axios.get('http://localhost:8080/games'
            , {
                params: {
                    page: page,
                    size: limit
                }
            }
        );
        return response;
    }

    static async deleteFromCart(id, game_id) {
        const response = await axios.delete(`http://localhost:8080/wishlist/${id}/${game_id}`)
        return response;
    }


    static async getDishes(){
        const response = await axios.get(`http://localhost:8081/api/v1/dish`)
        return response;
    }

    static async getStopListDishes(){
        const response = await axios.get(`http://localhost:8081/api/v1/dish/menu?category=STOPPED`)
        return response;
    }

    static async getOrders(){
        const response = await axios.get(`http://localhost:8081/api/v1/basket?status=PAID`)
        return response;
    }

    static async getDishById(id){
        const response = await axios.get(`http://localhost:8081/api/v1/dish/${id}`)
        return response;
    }

    static async getIngredients(){
        const response = await axios.get(`http://localhost:8081/api/v1/ingredient`)
        return response;
    }

    static async getSuppliers(){
        const response = await axios.get(`http://localhost:8081/api/v1/supplier`)
        return response;
    }

    static async getProducts(){
        const response = await axios.get(`http://localhost:8081/api/v1/consignment`)
        return response;
    }

    static async getMeasures(){
        const response = await axios.get(`http://localhost:8081/api/v1/measure`)
        return response;
    }
    

    
}