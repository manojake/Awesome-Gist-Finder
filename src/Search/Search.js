import { useState } from "react";

import Header from '../Header/Header'
import './Search.css';

const Search = ({ onSearch = f => f }) => {
    const [search, setSearch] = useState('');
    return (
        <>
            <Header />
            <input
                id="iptSearch"
                placeholder="Enter GitHub Username here"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button
                id='btnSearch'
                onClick={(event) => search.trim() ? onSearch(search) : event.preventDefault()}
            >Search</button>
        </>
    )
}

export default Search