import {useDispatch} from "react-redux";
import {DELETE_USERS} from "../redux/action-creators";

export default function UserItem (props){
    let {item} = props;
 const dispatch = useDispatch();

    const deleteChosenItem = ()=>{
        dispatch({type:DELETE_USERS,payload:item})
    }


    return (
        <div>
            <form action="" onSubmit={deleteChosenItem}>
            <button>delete</button>
            </form>
        </div>
    );
}