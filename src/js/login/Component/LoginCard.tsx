import * as React from 'react';

import { ContextContainer } from '../Page/Loginpage'

import clsx from 'clsx';
import LoginInput from './LoginInput'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LoginBtn from './LoginBtn'
import { commonStyles } from '../../style'
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
});
const LoginCard = (props) => {
    const { errorMessage,loading } = 
       React.useContext(ContextContainer)
    const classes = useStyles();
    const commonClasses = commonStyles()
    return (
        <>
          <Card className={classes.root+" "} variant="outlined">
              <CardContent>   
                  <h2 className={classes.title +" "+commonClasses.thirdTextColor}>Login</h2>
                  <LoginInput />
                  <LoginBtn onClick={props.onClick} />
                  <p className={clsx(commonClasses.errorTextColor)}>{errorMessage}</p>
              </CardContent>
             { loading && <LinearProgress />} 
          </Card>
        </>
    )
}
export default LoginCard;