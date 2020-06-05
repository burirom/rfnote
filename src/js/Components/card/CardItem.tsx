import * as React from 'react';
import { commonStyles, CardStyles } from '../../style'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareModal from '../modal/ShareModal';

const CardTitle = (props) => {
  return (
      <>
        <Typography variant="h5" component="h2">
           {props.title}
        </Typography>
      </>
  )
}

const CardShare = (props) => {
  const commonClasses = commonStyles()
  const [open, setOpen] = React.useState(false)
  

  const modalHandleOpen = () => {
    setOpen(true);
  }

  const modalHandleClose = () => {
    setOpen(false)
  }

  return (
      <>
        <IconButton onClick={modalHandleOpen}>
          <ShareIcon className={props.shareStatus ? commonClasses.subTextColor : commonClasses.thirdTextColor} />
        </IconButton>
        <ShareModal 
          open={open}
          modalHandleClose={modalHandleClose}
          shareUrl = {props.shareUrl}
          shareStatus = {props.shareStatus}
          switchOnChangeHandle ={props.switchOnChangeHandle}
        />
      </>
  )
}



const CardBookMark = (props) => {
  const commonClasses = commonStyles()
  return (
      <>
      <IconButton　onClick={props.onClick}>
        <BookmarkIcon　className={props.active ? commonClasses.subTextColor : commonClasses.thirdTextColor}/>
      </IconButton>
      </>
  )
}

const CardDelete = (props) => {
  const cardClass = CardStyles()
  const commonClasses = commonStyles()
  return (
      <>
      <IconButton onClick={props.onClick} className={cardClass.deleteBtn}>
        <DeleteIcon　className={commonClasses.thirdTextColor}/>
      </IconButton>
      </>
  )
}
 export { CardTitle,CardShare,CardBookMark,CardDelete};