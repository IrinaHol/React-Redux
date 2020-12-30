import {ADD_USER,DELETE_USERS,CHANGE_USER} from "../action-creators";

const initialState = {
    user: []
};

export const reducer =(state=initialState.user,action) =>{
    switch (action.type){
        case ADD_USER:{
            state.push(action.payload)
            return [...state]
        }
        case DELETE_USERS :{
            const filter = state.filter(value => value.id !== action.payload);
            return  [...filter]
        }
        case CHANGE_USER:{
            console.log(state,'state');

const filteredArr = state.filter(value=>value.id === action.payload.id );// повертаю тільки той масив id якого я передаю в кнопці `change and save`
            filteredArr.name = action.payload.name; // міняю його name i age на той який вводять в модальному вікні
            filteredArr.age = action.payload.age;
            console.log(filteredArr.name,'filteredArr.name');
            console.log(filteredArr.age,'filteredArr.age');
            console.log(filteredArr,'filteredArr');
            return [...filteredArr]

        }
        default :{
            return state;
        }
    }

}