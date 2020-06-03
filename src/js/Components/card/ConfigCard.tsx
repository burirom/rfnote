import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { commonStyles } from "../../style";

const useStyles = makeStyles((theme) =>
  createStyles({
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    font: {
        fontSize: '24px',
        fontWeight: 'bold'

    }
  }),
);

const ConfigCard = ({imgUrl,title,children}) => {
    const classes = useStyles();
    const commonClasses = commonStyles();

    return (
    <Card className={commonClasses.width100}>
      <CardContent>
        <Box
        　display="flex"
        　justifyContent="center"
        >
        <Avatar
         src={imgUrl} 
         className={classes.large}
         />
        </Box>
        <Box
        　display="flex"
        　justifyContent="center"
         className={classes.font}
        >
       {title}
        </Box>
      </CardContent>
      <CardContent>
      <Box
        　display="flex"
        　justifyContent="center"
        >
        {children}
      </Box>
      </CardContent>
    </Card>
    )
}

export default ConfigCard;