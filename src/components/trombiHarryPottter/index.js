import React, {useEffect, useState} from 'react';
import axios from "axios";

const TrombiHarryPotter = () => {
    const [listPersone, setListPersonne] = useState([])

    useEffect(()=>{
        async function fechData(){
           await axios.get("http://hp-api.herokuapp.com/api/characters")
      .then(res => {
        const persons = res.data;
        setListPersonne(persons);
      })
        }
        fechData();
        
    }, [])
    if (listPersone) {
        console.log(listPersone);
    }
    return (
        <div>
            <div className = "topContainer">
                { listPersone.map((person,index) => <div key={index}> <img alt={person.name} src = {person.image} width= '100px' height= '150px' /> {person.name}</div>)}
            </div>
        </div>
    );
};

export default TrombiHarryPotter;