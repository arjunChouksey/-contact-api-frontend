import React from 'react';
import {searchBarStyle, searchInput} from '../../styles';

const SearchBar = ({name, setName}) => {
    return (
        <div style = {searchBarStyle} className="ui loading search">
            <div className="ui fluid big icon input">
                <input 
                style = {searchInput} 
                className="prompt" 
                type="text" 
                placeholder="Search here..." 
                value = {name}
                onChange = {e => setName(e.target.value)} />
                <i className="search icon"></i>
            </div>
        </div>
    )
}

export default SearchBar;