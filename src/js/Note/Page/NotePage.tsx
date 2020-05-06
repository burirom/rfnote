import * as React from 'react'
import FormatBar from '../Component/FormatBar'
import Box from '@material-ui/core/Box';
import InputArea from '../Component/InputArea'
import { commonStyles } from '../../style'


function Note () {
    const CommonClasses = commonStyles()
    return (
        <>
        <Box>
        <FormatBar></FormatBar>
        <InputArea></InputArea>
        </Box>
        </>   
    )
}

export default Note;