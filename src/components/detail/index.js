import React,{useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addInFavories } from '../../actions/favories';


const Detail = (props) => {
    const [person, setPerson] = useState([])
    const [comics, setComics] = useState([])
    const [series, setSeries] = useState([])
    const [stories, setStories] = useState([])
    const [events, setEvents] = useState([])
    const  listFavories = useSelector(state => state.listeFavories.favoriesValue)
    const dispatch = useDispatch()
    console.log("dans detail : ",listFavories)

    // if (!localStorage.getItem("favories")) {
    //     localStorage.setItem("favories", JSON.stringify([]))
    // }

    // const addInStorage = (name, path, extension) =>{
    //     const dict = {"name": name, "path": path, "extension": extension}
    //     const AllFavories = JSON.parse(localStorage.getItem("favories"))
    //     let existe = AllFavories.find(element => element.name === dict.name);
    //     if (!existe) {
    //         AllFavories.push(dict)
    //         localStorage.setItem("favories", JSON.stringify(AllFavories))
    //     }
    // } 


    const urlApi = (id) => "http://gateway.marvel.com/v1/public/characters/"+id+"?ts=1&apikey=dd28b449ee1177ca97b55399d41172bf&hash=6a885ae2304275688c2144824df85a7a"

    useEffect(()=>{
        axios.get(urlApi(props.match.params.id)).then(response => {
            setPerson(response.data.data.results)
            setComics( response.data.data.results[0].comics.items)
            setSeries( response.data.data.results[0].series.items)
            setStories( response.data.data.results[0].series.items)
            setEvents( response.data.data.results[0].events.items)
        })
    }, [props])

    return (
        <div>
            <div align= "left"><Link to={"/favories"}>Favories</Link></div>
           
            { person.map((p) => 
                <div key={p.id}> <img alt={p.name} src = {p.thumbnail.path+'/standard_large.' +
            p.thumbnail.extension} width= '100px' height= '150px' /> <br/>{p.name}<br/> <button onClick={() => dispatch(addInFavories({"name": p.name, "path": p.thumbnail.path, "extension": p.thumbnail.extension}))}>Ajouter dans favoris</button> </div>
            )}
            Comics: 
            {comics.map(comic => <div key={comic.name}>{comic.name}</div>)}
            Series: 
            {series.map(serie => <div key={serie.name}>{serie.name}</div>)}
            Stories: 
            {stories.map(storie => <div key={storie.name}>{storie.name}</div>)}
            Events: 
            {events.map(event => <div key={event.name}>{event.name}</div>)}
        </div>
    );
};
export default Detail;