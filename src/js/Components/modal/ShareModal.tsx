import * as React from 'react'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close'
import Switch from '@material-ui/core/Switch'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    fade: {
        background: '#ffffff'
    },
    pd20: {
        padding: '20px'
    },
    input: {
        width: '100%',
        minHeight: '40px'
    }
  }),
);


const ShareModal = (props) => {

    const classes = useStyles();
    const [switchState,setSwitchState] = React.useState({
        checked: false
    })

    const switchHandleOpen = (event) => {
        setSwitchState({ ...switchState, checked: event.target.checked})
    }


   return (
       <>
            <Modal
                className={classes.modal}
                open={props.open}
                onClose={() => {
                    props.modalHandleClose()
                }}
                closeAfterTransition
            >
                <Fade in={props.open}>
                    <Container fixed className={classes.fade}>
                       <div className={classes.pd20} >
                            <Box display="flex"  alignItems="center" justifyContent="space-between" >
                                <p>共有</p>
                                <CloseIcon onClick={() => {
                                    props.modalHandleClose()
                                }}/>
                            </Box>   
                            <div>
                                <Box display="flex" alignItems="center">
                                    <h2>共有リンクの作成</h2>
                                    <Switch 
                                    checked={switchState.checked}
                                        onChange={switchHandleOpen}
                                        color="primary"
                                    />
                                </Box>
                                <input 
                                   type="text"
                                   readOnly 
                                   value={props.noteId} 
                                   className={classes.input}
                                />
                            </div>
                        </div>
                    </Container>
                </Fade>
            </Modal> 
        </>
   ) 
}


export default ShareModal