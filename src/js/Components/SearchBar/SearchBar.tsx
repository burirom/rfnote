import * as React from 'react';
import { commonStyles, searchStyles } from '../../style'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import CommonContainer from '../../Components/Container/CommonContainer';

const useStyles = makeStyles({
    root: {
        marginLeft: '10px'
    }
});

const SearchBar = () => {
    const commonClass = commonStyles();
    const searchClass = searchStyles();
    const rootStyles = useStyles();
    return (
        <div className={searchClass.searchBar}>
                <TextField
                id="outlined-search" 
                label="Search field" 
                type="search" size="small" 
                variant="outlined" 
                className={searchClass.searchInput} />
                <Button variant="contained" className={
                    searchClass.searchBtn + 
                    " " + 
                    commonClass.subBackColor +
                    " "+
                    rootStyles.root
                    }
                >
                <SearchIcon className={commonClass.maintextcolor} />
                </Button>
        </div>
    )
}
export default SearchBar;