import * as React from 'react';
import SerchBar from '../../Components/SearchBar/SearchBar'
import BookMarkCard from '../Component/BookMarkCard'
import CommonContainer from '../../Components/Container/CommonContainer'

function BookMark () {
    return (
        <CommonContainer>
            {/* <SerchBar /> */}
            <BookMarkCard />   
        </CommonContainer>
    )
}

 export default  BookMark;