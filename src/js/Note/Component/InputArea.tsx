import * as React from 'react'
import { commonStyles,FormatStyles } from '../../style'
import Box from '@material-ui/core/Box';
import { Editor } from 'react-draft-wysiwyg';
import { toolBar } from './ToolBar'
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import GridCenter from '../../Components/Grid/GridCenter'
import Fab from '@material-ui/core/Fab';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useReactRouter from 'use-react-router';

import { store } from '../../Redux/store'
import { insertNote,updateNote,getAllNoteData } from '../../../API/firebase/Store.js'


const  InputArea =  () => {
    const FormatClasses = FormatStyles()
    const userID = store.getState().user.userId
    const { history } = useReactRouter();
    
    const nullContentDefaultData = {"blocks":[{"key":"637gr","text":"空のノートです","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}};
    

    React.useEffect(() => {
      return () => {
        store.dispatch({ type: 'SET_NOTE_ACTIVE_DATA', payload: {}})
        store.dispatch({ type: 'SET_QUERY', payload: '' })
        store.dispatch({ type: 'SET_QUERY_DATA', payload: {} })
      } 
    },[])


    const getStoreNoteData = () => {
      if(Object.keys(store.getState().noteActiveData).length === 0) return nullContentDefaultData
      const noteLength = Object.keys(store.getState().noteActiveData.data.data).length
      return noteLength !== 0  ? store.getState().noteActiveData.data.data : nullContentDefaultData
    }


    const noteStoreData = getStoreNoteData()
    const [content,setContent] = React.useState(noteStoreData);



    const sendData = async () => {

      if(store.getState().noteActiveData.id) {
        await updateNote(userID,store.getState().noteActiveData.id,content)
        const noteData = await getAllNoteData(userID)
        store.dispatch({type:'SET_NOTE_DATA',payload: noteData})
        history.push('home')
        return
      }

      if(!content) {
        setContent(nullContentDefaultData)
        return
      }

      await insertNote(userID,content)
      const noteData = await getAllNoteData(userID)
      store.dispatch({type:'SET_NOTE_DATA',payload: noteData})
      history.push('home')



    }

    return (
        <Box className={FormatClasses.mt70}>
          <Editor 
            defaultContentState = {content}
            toolbar = {toolBar}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onChange={setContent}
          />
          <GridCenter>
              <Fab variant="extended" color="primary" aria-label="add" onClick={sendData} 
                 className={FormatClasses.fixedBtn}
              >
                <AddCircleOutlineIcon />
                {store.getState().query ? '自分のノートに保存' : '保存する'}
              </Fab>
          </GridCenter>
        
        </Box>
    )
}

export default InputArea