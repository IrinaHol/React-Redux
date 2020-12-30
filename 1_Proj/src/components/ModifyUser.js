import React, {useState} from 'react'
import ModalWindow from "./ModalWindow";

export default function ModifyUser (props){
    let {id} = props;

    let [flag,setFlag] = useState(false);
    const modifyHandler = (event) =>{
        event.preventDefault();
if(flag){
    setFlag(flag=> !flag)
}
else {
    setFlag(flag=>!flag)
}

        console.log(flag)

    }


    return (
        <div>
            <form onSubmit={modifyHandler}>
            <button>Modify</button>
            </form>
            {
                flag && <ModalWindow id={id}/>
            }

        </div>
    );
}