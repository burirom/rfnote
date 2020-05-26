import * as React from 'react';

import { ContextContainer } from '../Page/SignUpPage'
import { Link } from "react-router-dom";

import clsx from 'clsx';
import SignInput from './SignInput'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SignBtn from './SignBtn'
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
    loginlink: {
        fontSize: 18,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
});

const ThanksCard = () => {
    const classes = useStyles();
    const commonClasses = commonStyles()

    return (
        <>
            <Card className={classes.root+" "} variant="outlined">
                <CardContent>   
                    <h2 className={classes.title +" "+commonClasses.thirdTextColor}>Thank you！！</h2>
                    <div className={classes.loginlink} >
                       <Link to="login">→ Login</Link>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
const SignUpCard = () => {
    const { errorMessage,loading } = 
       React.useContext(ContextContainer)
    const classes = useStyles();
    const commonClasses = commonStyles()
    return (
        <>
          <Card className={classes.root+" "} variant="outlined">
              <CardContent>   
                  <h2 className={classes.title +" "+commonClasses.thirdTextColor}>SignUp</h2>
                  <SignInput />
                  <SignBtn />
                  <p className={clsx(commonClasses.errorTextColor)}>
                      {errorMessage}
                   </p>
              </CardContent>
              { loading && <LinearProgress />} 
          </Card>
        </>
    )
}

const cardDiscrimination = () => {
    const { Done } = React.useContext(ContextContainer)
    return Done ? <ThanksCard /> : <SignUpCard />
}


export default cardDiscrimination;