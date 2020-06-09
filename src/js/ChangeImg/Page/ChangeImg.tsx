import * as React from 'react'
import { Link } from "react-router-dom";
import CommonContainer from '../../Components/Container/CommonContainer'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { commonStyles,ChangeImgStyles } from '../../style'
import { store } from '../../Redux/store';
import ConfigCard from '../../Components/card/ConfigCard'

import { setUserImg,getUserImgUrl } from '../../../API/firebase/Storage.js'
import { setStoreImg } from '../../../API/firebase/Store.js'

function ChangeImg() {
    const commonClasses = commonStyles();
    const changeImgClasses = ChangeImgStyles();

    const [imgUrl, setImgUrl ] = React.useState(null)
    const [imgBlob, setImgBlob ] = React.useState(null)

    const sendUserImg = async () => {
       const userID = store.getState().user.userId;
       await setUserImg(imgBlob,userID)
       const userData = await getUserImgUrl(userID,imgBlob.name)
       await setStoreImg(userID,userData)
       store.dispatch({ type:'SET_USER_DATA_IMG', payload: userData})
    }
    
    return (
        <>
            <CommonContainer>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{ height: '100vh' }}
                >
                        <ConfigCard title="画像変更" imgUrl={imgUrl} >
                            <Link to="configuration" className={
                                commonClasses.txtDecration 
                                }
                            >
                                <Button size="large" variant="contained" className={
                                    commonClasses.subBackColor+
                                    " "+
                                    commonClasses.subTextColor
                                    }
                                    onClick={sendUserImg}
                                >
                                    これにする
                                </Button>
                            </Link>
                            <Button size="large" variant="contained" 
                                className={
                                    commonClasses.mainBackColor+
                                    " "+
                                    commonClasses.thirdTextColor
                                }
                                // setImgUrl()
                                
                            >
                                <input type="file" className={changeImgClasses.inputFile} 
                                   onChange={({ target: { validity, files } }) => {
                                    if (validity.valid) {
                                        setImgBlob(files[0])
                                        setImgUrl(URL.createObjectURL(files[0]))
                                    }
                                  }}
                                />
                                画像を選ぶ
                            </Button>
                        </ConfigCard>
                </Box>
            </CommonContainer>
        </>
    )
}

export default ChangeImg;