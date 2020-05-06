import * as React from 'react';
import { commonStyles, searchStyles } from '../../style'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'

const SearchBar = () => {
    const commonClass = commonStyles();
    const searchClass = searchStyles();
    return (
        <div className={searchClass.searchBar}>
            <TextField
             id="outlined-search" 
             label="Search field" 
             type="search" size="small" 
             variant="outlined" 
             className={searchClass.searchInput} />
            <Button variant="contained" color="primary" className={searchClass.searchBtn}>
                    <SearchIcon className={commonClass.maintextcolor} />
            </Button>
        </div>
    )
}
export default SearchBar;