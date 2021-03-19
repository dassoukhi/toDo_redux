import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Favories = () => {
    
   // const [favories, setFavories] = useState([])
    const  listFavories = useSelector(state => state.listeFavories.favoriesValue)
    console.log("dans favorie : ", listFavories)
    // useEffect(() =>{
    //     if (!localStorage.getItem("favories")) {
    //         localStorage.setItem("favories", JSON.stringify([]))
    //     }
    //     setFavories(JSON.parse(localStorage.getItem("favories")))
    // }, [])
    return (
        <div>
            <p>Personnage favories</p>
            <div align= "left"> <Link to={"/characters"}>Home</Link></div>
            { listFavories.map((person, index) => 
                    <div key={index}> <img alt={person.name} src = {person.path+'/standard_large.' +
                person.extension} width= '100px' height= '150px' /> <br/>{person.name} </div>)
                
                }
        </div>
    );
};

export default Favories;