import * as React from 'react'
import { Link } from "react-router-dom";
import CommonContainer from '../../Components/Container/CommonContainer'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { commonStyles } from '../../style'
import ConfigCard from '../../Components/card/ConfigCard'

function ChangeImg() {
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
                    <ConfigCard title="画像変更">
                        <Link to="configuration" className={
                             commonClasses.txtDecration 
                            }
                        >
                            <Button size="large" variant="contained" className={
                                commonClasses.subBackColor+
                                " "+
                                commonClasses.subTextColor
                                }
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
                        >
                            画像を選ぶ
                        </Button>
                    </ConfigCard>
                </Box>
            </CommonContainer>
        </>
    )
}

export default ChangeImg;