import * as React from 'react';
import { commonStyles, CardStyles } from '../../style'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';

const CardTitle = () => {
  return (
      <>
        <Typography variant="h5" component="h2">
            テストタイトル
        </Typography>
      </>
  )
}

const CardShare = () => {
  return (
      <>
      <IconButton>
        <ShareIcon/>
      </IconButton>
      </>
  )
}

const CardBookMark = () => {
  return (
      <>
      <IconButton>
        <BookmarkIcon　/>
      </IconButton>
      </>
  )
}

const CardDelete = () => {
  const cardClass = CardStyles()
  return (
      <>
      <IconButton className={cardClass.deleteBtn}>
        <DeleteIcon　/>
      </IconButton>
      </>
  )
}
 export { CardTitle,CardShare,CardBookMark,CardDelete};