import * as React from 'react';
import { Link } from "react-router-dom";
import CommonContainer from '../../Components/Container/CommonContainer'
import Box from '@material-ui/core/Box';
import { commonStyles } from '../../style'
import Button from '@material-ui/core/Button';
import ConfigCard from '../../Components/card/ConfigCard'
import { store } from '../../Redux/store';

const ConfigurationPage = () => {
    const commonClasses = commonStyles();
    return (
        <>
            <CommonContainer>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{ height: '100vh' }}
                >
                    <ConfigCard title="ユーザー名">
                        <Link to="ChangeImg" className={ commonClasses.txtDecration }>
                            <Button size="large" variant="contained" className={
                                commonClasses.subBackColor+
                                " "+
                                commonClasses.subTextColor
                                }
                            >
                                画像変更
                            </Button>
                        </Link>
                        <Link onClick={() => store.dispatch({ type: 'LOGIN', payload: false})} to="/login" className={ commonClasses.txtDecration }>
                        <Button size="large" variant="contained" 
                        className={
                            commonClasses.mainBackColor+
                            " "+
                            commonClasses.thirdTextColor
                            }
                        >
                            ログアウト
                        </Button>
                        </Link>
                    </ConfigCard>
                </Box>
            </CommonContainer>
        </>
    )
}
export default ConfigurationPage;