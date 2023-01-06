import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit(){
    let {id} = useParams();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [director, setDirector] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/movies/'+id)
        .then((response)=>{
            setTitle(response.data.title);
            setPoster(response.data.poster);
            setDirector(response.data.director);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editMovie = {
            title:title,
            poster:poster,
            director:director
        }

        axios.put('http://localhost:4000/api/movies/'+id,editBook)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit Movie Title </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Movie poster: </label>
                        <input type="text"
                            className="form-control"
                            value={poster}
                            onChange={(e)=>{setPoster(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Movie director: </label>
                        <input type="text"
                            className="form-control"
                            value={director}
                            onChange={(e)=>{setDirector(e.target.value)}}
                        />
                    </div>
                <input type="submit" value="Edit Movie"></input>
            </form>
        </div>
    );
}