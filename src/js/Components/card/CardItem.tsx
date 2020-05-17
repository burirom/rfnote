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
  const commonClasses = commonStyles()
  return (
      <>
      <IconButton>
        <ShareIcon className={commonClasses.thirdTextColor} />
      </IconButton>
      </>
  )
}

const CardBookMark = () => {
  const commonClasses = commonStyles()
  return (
      <>
      <IconButton>
        <BookmarkIcon　className={commonClasses.thirdTextColor}/>
      </IconButton>
      </>
  )
}

const CardDelete = () => {
  const cardClass = CardStyles()
  const commonClasses = commonStyles()
  return (
      <>
      <IconButton className={cardClass.deleteBtn}>
        <DeleteIcon　className={commonClasses.thirdTextColor}/>
      </IconButton>
      </>
  )
}
 export { CardTitle,CardShare,CardBookMark,CardDelete};