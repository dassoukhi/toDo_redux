import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addInList, deleteInList } from "../../actions/listeToDo";

const ToDo = () => {
    const [task, setTask] = useState("")
    const listeToDoState = useSelector(state => state.listeToDo.listValue)
    const dispatch = useDispatch()
    
    return (
        <div>
            <text>TO DO</text><br></br>
        <label>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
        </label>
        <button onClick={()=>{setTask("");dispatch(addInList(task))}}>Ajouter</button>
                    <div>
                        <ul>
                            {listeToDoState.map((e,index) =>
                                <li key={e.toString()}>
                                    <span>{e}</span> 
                                    <button onClick={() => dispatch(deleteInList(index))}>Supprimer</button></li>
                                )}
                        </ul>
                    </div>
                
        </div>
    );
};

export default ToDo;