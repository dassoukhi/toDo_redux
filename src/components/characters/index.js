import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

// import Search from '../search';
const urlApi = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dd28b449ee1177ca97b55399d41172bf&hash=6a885ae2304275688c2144824df85a7a&offset="
const urlApiSearch = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dd28b449ee1177ca97b55399d41172bf&hash=6a885ae2304275688c2144824df85a7a&name="
const Characters = () => {
    const listeToDoState = useSelector(state => state.listeToDo.listValue)
    console.log("in characters :",listeToDoState)

    const [personnages, setPersonnages] = useState([])
    const [page, setPage] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const history = useHistory()

    if (!localStorage.getItem('token')) {
        history.push('/')
    }
    
    useEffect(()=>{
        axios.get(urlApi+page).then(response => {
            setPersonnages([...personnages,...response.data.data.results])
        }).catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    const pageSuivate = () =>{
        setPage(page+20)
    }

    const seachCharacter = ()=>{
        
            axios.get(urlApiSearch+inputValue).then(response => {
                if (response.data.data.results.length > 0) {
                    setPersonnages(response.data.data.results)
                }               
                setInputValue("")
            }).catch(err => console.log(err))
        
    }
    return (
        <div>
            <div align= "left"><Link to={"/favories"}>Favories</Link></div>
            <div align= "right">
                    <input 
                    type="text"
                    placeholder="Search characters"
                    name="inputValue"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" onClick={seachCharacter}>Search</button>

            </div>
            <InfiniteScroll
                dataLength={personnages.length}
                next={pageSuivate}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                    
                    <p>Characters</p>
                    
                    { personnages.map((person) => 
                        <div key={person.id}> <Link to={"/characters/"+person.id}><img alt={person.name} src = {person.thumbnail.path+'/standard_large.' +
                    person.thumbnail.extension} width= '100px' height= '150px' /> <br/>{person.name} </Link> </div>)
                    
                    }
            </InfiniteScroll>
            
        </div>
    );
};

export default Characters;