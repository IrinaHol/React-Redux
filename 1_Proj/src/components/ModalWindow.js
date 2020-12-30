import React from 'react'
import {useDispatch} from "react-redux";
import '../styles/modal-window-styles.css'
import { CHANGE_USER} from "../redux/action-creators";

export default function ModalWindow (props){
    let {id} = props;
    console.log(id)
const dispatch = useDispatch();
const fixParameters = (event) =>{
    event.preventDefault();

   let name = event.target[0].value;
   let age = event.target[1].value;
   dispatch({type:CHANGE_USER,payload:{name,age,id}})
}


    return (

        <div className="modal-window">
            <form action="" onSubmit={fixParameters} >
                <b>New name: </b> <input type="text"/>
                <b>New age: </b><input type="text"/>
                <button>change and save</button>
            </form>
        </div>
    );
}