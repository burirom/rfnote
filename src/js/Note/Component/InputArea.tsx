import * as React from 'react'
import { commonStyles,FormatStyles } from '../../style'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function InputArea () {
    const FormatClasses = FormatStyles()
    const  commonClasses = commonStyles()
    return (
        <Box className={FormatClasses.mt100}>
        <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="タイトル" variant="outlined" className={commonClasses.width100} />
        <TextField
          id="outlined-multiline-static"
          label="内容"
          multiline
          variant="outlined"
          className={commonClasses.width100 + " " + commonClasses.height100}
        />
        </form>
        </Box>
    )
}

export default InputArea