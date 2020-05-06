import * as React from 'react';
import SerchBar from '../../Components/SearchBar/SearchBar'
import HomeCard from '../Component/HomeCard'
import { commonStyles } from '../../style'

function Home () {
    const commonClasses = commonStyles();
    return (
        <div className={commonClasses.mainBackColor + " " + commonClasses. height100}>
          <SerchBar />
          <HomeCard />
        </div>
    )
}

 export default Home;