import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {ADD_USER, DELETE_USERS} from "../redux/action-creators";
import UserItem from "./UserItem";
import ModifyUser from "./ModifyUser";

export default function User (){
let [index,setIndex] = useState(0);
const store = useSelector(store=>store);
const dispatch = useDispatch();



const addUser = (event)=>{

    event.preventDefault();
  const name = event.target[0].value;
  const age = event.target[1].value;
    setIndex(prev=>prev+1)
  dispatch({type:ADD_USER,payload:{name,age,id:index}})

}

// const deleteUser = (event,value) => {
//   event.preventDefault();
//     console.log(value);
// }

const deleteUser = (event) =>{

    dispatch({type:DELETE_USERS,payload:[]})
}
    return (
        <div>
            <form onSubmit={addUser}>
               <b>name</b> <input type="text"/>
              <b>age</b>  <input type="text"/>
                <button>+add user+</button>
            </form>
            <ul>
                {
                    store.map((el,index) => <li key={Math.random()}><b>Name: </b>{el.name}-<b>Age: </b>{el.age}
                        <UserItem item={index}/>
                    <ModifyUser name={el.name} age={el.age} id={index}/>
                    </li>
                )
                }
            </ul>
        </div>
    );
}