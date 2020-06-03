import * as React from 'react';
import { store } from '../../Redux/store'
import SerchBar from '../../Components/SearchBar/SearchBar'
import HomeCard from '../Component/HomeCard'
import CommonContainer from '../../Components/Container/CommonContainer'
import useReactRouter from 'use-react-router';


function Home () {
    console.log('ホーム',store.getState())
    const { history } = useReactRouter();

    React.useEffect(() => {
       if(store.getState().query) history.push('/note'+store.getState().query)
    },[])
    return (
        <CommonContainer>
          <SerchBar />
          <HomeCard />
        </CommonContainer>
    )
}

 export default Home;