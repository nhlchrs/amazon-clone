
export const initialState ={
    basket: [{
        id:1234,
        title:"this is demo",
        rating:3,
        price:220,
        image:'https://images-eu.ssl-images-amazon.com/images/I/61YSMhOd5EL._AC_UL160_.jpg'
    },{
        id:1234,
        title:"this is demo",
        rating:3,
        price:220,
        image:'https://images-eu.ssl-images-amazon.com/images/I/61YSMhOd5EL._AC_UL160_.jpg'
    },{
        id:1234,
        title:"this is demo",
        rating:3,
        price:220,
        image:'https://images-eu.ssl-images-amazon.com/images/I/61YSMhOd5EL._AC_UL160_.jpg'
    }],
    user:null
};
export const BasketSubtotal = (basket)=>
    basket?.reduce((amount, item) => item.price + amount, 0)




const reducer=  (state, action)=>{
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {...state,
            user: action.user
        }
        case 'ADD_TO_BASKET':
            return{...state,
                basket:[...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
        let newBasket = [...state.basket];
        const indexToRemove = state.basket.findIndex((item)=>item.id === action.id) 
        if(indexToRemove >= 0){
            newBasket.splice(indexToRemove, 1); 
        }   
        else{ 
            console.warn(`cant remove ${action.id} as it is not present`)
        }
        return {...state,
            basket:newBasket
            }
            break;
        default: 
            return {...state};   
        }
}
export default reducer;