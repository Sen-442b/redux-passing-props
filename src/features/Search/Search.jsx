import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addedSearchResults, addServerResults } from "../../app/resultsSlice";
import './Search.css'

export default function Search() {

    const dispatch = useDispatch();
    

    const [serverSearch, setServerSearch] = useState({});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setServerSearch((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(JSON.stringify(serverSearch, '', 2));
    // };

    const handleSubmit = () => {
         dispatch(addServerResults(serverSearch));
    };

    return( 
        <div className="search">
        <form onSubmit={handleSubmit}>
            <div>
                <button>Search</button>
            </div>
            <label >
                <input
                    onChange={handleChange}
                    value={serverSearch.server}
                    id="server"
                    name="server"
                    type="string"
                    placeholder="Server Name"
                    >
                    </input>
            </label>
            <label >
                <input 
                    onChange={handleChange}
                    value={serverSearch.date}
                    id="date"
                    name="date"
                    type="date"
                >
                </input>
            </label> 
            <label >
                <input
                    onChange={handleChange}
                    value={serverSearch.id}
                    id="id"
                    name="id"
                    type="number"
                    placeholder="Server ID"
                >
                </input>
            </label>
        </form>  
        </div>
    )
    
};
