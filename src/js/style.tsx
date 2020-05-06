import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const commonStyles = makeStyles((Theme) =>
  createStyles({
    mainBackColor: {
      background:'#f7f7f7'
    },
    subBackColor: {
      background:'#323643'
    },
    thirdBackColor: {
      background:'#93deff'
    },
    fourthBackColor: {
      background:'#606470'
    },
    maintextcolor: {
        color: '#ffffff'
    },
    subTextColor: {
      color: '#93deff'
    },
    pd0:{
      padding: '0'
    },
    mt90:{
      marginTop: '90px'
    },
    width100: {
      width: '100%'
    },
    height100: {
      height: "100vh"
    }
  }),
);

const searchStyles = makeStyles((Theme) =>
  createStyles({
    searchBar: {
        marginTop: '90px',
        position: 'fixed',  
        left: '50%',
        top: '0',
        transform: 'translateX(-50%)',
        maxWidth: '90%',
        width: '90%',
        maxHeight: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
      width: '90%',
      padding: '0px',
      background: '#ffffff'
    },
    searchBtn: {
      marginLeft: '5px',
      width: '10%',
      height: '100%'
    }
  }),
);


const footerStyles = makeStyles((Theme) =>
  createStyles({
    btnNav: {
        position: "fixed",
        top: 'auto',
        bottom: '0',
        left: '0',
        right: '0',
        borderTop: '3px solid #93deff'
    },
    root: {
      background:'#323643'
    }
  }),
);

const CardStyles = makeStyles((Theme) =>
  createStyles({
    Card: {
      paddingTop:'150px',
    },
    deleteBtn: {
      marginLeft: 'auto'
    },
    large: {
      width: Theme.spacing(10),
      height: Theme.spacing(10),
    }
  }),
);

const FormatStyles = makeStyles((Theme) => 
  createStyles({
    fixBar: {
      position: "fixed",
      top: '70px',
      left: "0",
      right: "0"
    },
    mt100: {
      marginTop: "100px"
    }
  }))
export {commonStyles, searchStyles,footerStyles,CardStyles,FormatStyles};