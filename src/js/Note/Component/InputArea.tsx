import * as React from 'react'
import { commonStyles,FormatStyles } from '../../style'
import Box from '@material-ui/core/Box';
import { Editor } from 'react-draft-wysiwyg';
import { toolBar } from './ToolBar'
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import GridCenter from '../../Components/Grid/GridCenter'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

import useReactRouter from 'use-react-router';

import { store } from '../../Redux/store'
import { insertNote,updateNote,getAllNoteData } from '../../../API/firebase/Store.js'



const getParam = (url) => {
  
  const pair = url.slice(1).split('&');
  // const pair = url.split('&');
  let data = [];

  for(let i=0; pair[i]; i++) {
    const keyValue = pair[i].split('=');
    data[keyValue[0]]=keyValue[1];
  }
  console.log(data)
  return data

}

const  InputArea = () => {
    const FormatClasses = FormatStyles()
    const userID = store.getState().user.userId
    const { history } = useReactRouter();
    
    const nullContentDefaultData = {"blocks":[{"key":"637gr","text":"空のノートです","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}};
    

    React.useEffect(() => {
      const url = store.getState().query
      console.log(getParam(url))
      return () => {
        store.dispatch({ type: 'SET_ACTIVE_ID', payload: null})
        store.dispatch({ type: 'SET_NOTE_ACTIVE_DATA', payload: {}})
      } 
    },[])


    const getStoreNoteData = () => {
      const noteLength = Object.keys(store.getState().noteActiveData).length
      return noteLength !== 0  ? store.getState().noteActiveData : nullContentDefaultData
    }


    const noteStoreData = getStoreNoteData()
    const [content,setContent] = React.useState(noteStoreData);



    const sendData = async () => {

      if(store.getState().noteActiveID) {
        await updateNote(userID,store.getState().noteActiveID,content)
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
            // contentState = {content}
            defaultContentState = {content}
            toolbar = {toolBar}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onChange={setContent}
          />
          <GridCenter>
              <Fab variant="extended" color="primary" aria-label="add" onClick={sendData} >
                <NavigationIcon />
                保存
              </Fab>
          </GridCenter>
        
        </Box>
    )
}

export default InputArea