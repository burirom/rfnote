import * as React from 'react'
import Box from '@material-ui/core/Box';
import InputArea from '../Component/InputArea'
import { commonStyles } from '../../style'

function Note () {
    const CommonClasses = commonStyles()
    return (
        <>
        <Box>
        <InputArea></InputArea>
        </Box>
        </>   
    )
}

export default Note;