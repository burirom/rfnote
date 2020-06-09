import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const commonStyles = makeStyles((Theme) =>
  createStyles({
    mainBackColor: {
      background:'#f7f7f7'
    },
    subBackColor: {
      background:'#323643 !important'
    },
    thirdBackColor: {
      background:'#93deff !important'
    },
    fourthBackColor: {
      background:'#606470'
    },
    maintextcolor: {
        color: '#ffffff !important'
    },
    subTextColor: {
      color: '#93deff !important'
    },
    thirdTextColor: {
      color: '#323643 !important'
    },
    fourthTextColor: {
      color: '#f7f7f7 !important'
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
    },
    txtDecration: {
      textDecoration: 'none'
    },
    borderSubColor:{
      borderColor: '#323643 !important'
    },
    errorTextColor: {
      color: '#fe1235'
    },
    deleteColor: {
      color: '#dc143c'
    }
  })
);

const searchStyles = makeStyles((Theme) =>
  createStyles({
    searchBar: {
        paddingTop: '100px',
        paddingBottom: '30px',
        maxWidth: '100%',
        width: '100%',
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
        borderTop: '2px solid #93deff',
        zIndex: '9999'
    },
    root: {
      background:'#323643'
    }
  }),
);

const CardStyles = makeStyles((Theme) =>
  createStyles({
    Card: {
      paddingTop:'100px',
      marginBottom: '70px'
    },
    cardBottom: {
      borderBottom: '2px solid #323643',
      boxShadow: '0 8px 10px 1px rgba(0, 0, 0, .5)'
    },
    deleteBtn: {
      marginLeft: 'auto'
    },
    large: {
      width: Theme.spacing(10),
      height: Theme.spacing(10),
    },
    mainContent: {
      width: '100%',
      textAlign: 'start',
      background: '#f7f7f7',
      borderLeft: '3px solid #323643',
      borderRight: '3px solid #323643',
      borderTop: '1px solid #323643'
    },
    noteContent: {
      maxHeight: '100px',
      minHeight: '100px',
      paddingTop: '5px',
      paddingBottom: '5px',
      overflow: 'hidden',
    },
    noteContentLetter: {
      paddingBottom: '10px',
      maxHeight: '80px',
      overflow: 'hidden',
      fontSize: '0.8rem !important',
      color: '#696969 !important',
      
    },
    noteContentTitle: {
      fontSize: '0.8rem !important'
    },
    noteTitle: {
      paddingBottom: '0px !important',
    },
    noteTitleFont: {
      
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
    mt70: {
      marginTop: "70px"
    },
    fixedBtn: {
      position: 'fixed',
      top: 'auto',
      bottom: '70px',
      left: 'auto',
      right: '20px'
    }
  }))

  const ChangeImgStyles = makeStyles((Theme) => 
  createStyles({
    inputFile: {
      opacity:'0',
      appearance: 'none',
      position: 'absolute'
    }
  }))
export {commonStyles, searchStyles,footerStyles,CardStyles,FormatStyles,ChangeImgStyles};