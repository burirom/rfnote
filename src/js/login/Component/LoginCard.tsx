import * as React from 'react';
import LoginInput from './LoginInput'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LoginBtn from './LoginBtn'
import { commonStyles } from '../../style'


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

const LoginCard = () => {
    const classes = useStyles();
    const commonClasses = commonStyles()
    return (
        <>
                <Card className={classes.root+" "} variant="outlined">
                    <CardContent>
                        <h2 className={classes.title +" "+commonClasses.thirdTextColor}>Login</h2>
                        <LoginInput />
                        <LoginBtn />
                    </CardContent>
                </Card>
        </>
    )
}
export default LoginCard;