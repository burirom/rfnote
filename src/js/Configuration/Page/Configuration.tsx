import * as React from 'react';
import { Link } from "react-router-dom";
import CommonContainer from '../../Components/Container/CommonContainer'
import Box from '@material-ui/core/Box';
import { commonStyles } from '../../style'
import Button from '@material-ui/core/Button';
import ConfigCard from '../../Components/card/ConfigCard'

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
                        <Link to="ChangeImg">
                            <Button size="large" variant="contained" color="primary">
                                画像変更
                            </Button>
                        </Link>
                        <Link to="/">
                        <Button size="large" variant="contained" >
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