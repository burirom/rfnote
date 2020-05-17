import * as React from 'react';
import { footerStyles }from '../../style'
import useReactRouter from 'use-react-router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { makeStyles, createStyles } from '@material-ui/core';

const rootStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      background:'#323643',
      color: '#93deff'
    }
  }),
);

const FooterBar = () => {
    const rootClases = rootStyles();
    const footerClasses = footerStyles();
    const { history } = useReactRouter();
    return (
        <>
            <BottomNavigation className={footerClasses.btnNav + " " + rootClases.root}>
                <BottomNavigationAction 
                 value="recents"
                 icon={<HomeOutlinedIcon />} 
                 onClick={() => history.push('/home')}
                 className={rootClases.root}/>
                <BottomNavigationAction 
                 value="recents"
                 icon={<NoteAddOutlinedIcon />} 
                 onClick={() => history.push('/note')}
                 className={rootClases.root}/>
                <BottomNavigationAction 
                 value="recents"
                 icon={<BookmarksOutlinedIcon />} 
                 onClick={() => history.push('/bookmark')}
                 className={rootClases.root}/>
                <BottomNavigationAction 
                 value="recents"
                 icon={<SettingsOutlinedIcon />} 
                 onClick={() => history.push('/configuration')}
                 className={rootClases.root}/>
            </BottomNavigation>
        </>
    )
}

export default FooterBar;
