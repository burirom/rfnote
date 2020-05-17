import * as React from 'react';
import { store } from '../../Redux/store'
import SerchBar from '../../Components/SearchBar/SearchBar'
import HomeCard from '../Component/HomeCard'
import CommonContainer from '../../Components/Container/CommonContainer'

function Home () {
    console.log('ホーム',store.getState())
    return (
        <CommonContainer>
          <SerchBar />
          <HomeCard />
        </CommonContainer>
    )
}

 export default Home;