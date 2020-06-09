import * as React from 'react';
import { CardStyles,commonStyles } from '../../style'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { CardTitle, CardShare, CardBookMark, CardDelete } from '../../Components/card/CardItem'

import useReactRouter from 'use-react-router';

import { store } from '../../Redux/store'

import { deleteNote,updateBookMark,updateShare,getShareStatus } from '../../../API/firebase/Store.js'



const HomeCard = () => {
    const cardClass = CardStyles()
    const commonClasses = commonStyles();
    const { history } = useReactRouter();
    const userId = store.getState().user.userId
    const [noteData,setNoteData] = React.useState(store.getState().noteData)

    const bookMarkEvent = (id,bookMark) => {
        store.dispatch({ type: 'UPDATA_NOTE_DATA_BOOKMARK',payload: id})
        setNoteData(store.getState().noteData)
        updateBookMark(userId,id,!bookMark) 
    }

    const deleteEvent = (id) => {
        store.dispatch({ type: 'DELETE_NOTE_DATA',payload: id})
        setNoteData(store.getState().noteData)
        deleteNote(userId,id)
    }

    const sendData = (id) => {
        const noteData = store.getState().noteData
        const contentData = noteData.filter(data => data.id === id)
        store.dispatch({type: 'SET_NOTE_ACTIVE_DATA', payload: contentData[0]})
        history.push('note')
    }

    const setShareUrl = (userId,noteId) => {
        return location.origin + '/note?user='+userId+'&id='+noteId
    }


    //共有リンクステータスセット
    const switchOnChangeHandleEvent = async (userId,noteId,shareStatus) => {
        await updateShare(userId,noteId,shareStatus)
        const status = await getShareStatus(userId,noteId,shareStatus)
        store.dispatch({ type: 'UPDATA_NOTE_DATA_SHARE',payload: {
            id: noteId,
            status: status
        }})
        setNoteData(store.getState().noteData)
    }

    //ノートの内容を作成
    const createNoteContents = (data) => {
        let content = '';
        const length = data.length;
        for(let i = 0; i < length; i++) {
            if(i !== 0) content += data[i].text;
        }
        return content
    }

    //ノートのタイトル判断
    const createNoteTitle =  (title) => {
        const lengthCount = title.length

        if(lengthCount <= 15) return title

        return title.slice(0,15) + '...'

    }


    return (
        <div className={clsx(cardClass.Card)}>
            <Grid container spacing={3}>

            {
                noteData.map((data,idx) => {

                const title = createNoteTitle(data.data.data.blocks[0].text)
                console.log(title, 'タイトル')
                
                const noteContent = createNoteContents(data.data.data.blocks)
            
                const id = data.id
                const bookMark = data.data.bookMark
                const userId = store.getState().user.userId
                
                const switchOnChangeHandle = async (event) => {
                    switchOnChangeHandleEvent(userId,id,!data.data.share)
                }
                return (
                    <Grid key={idx} item xs={12} md={6} lg={3}>
                        <Card className={cardClass.cardBottom}>
                            <div className={clsx(cardClass.mainContent)} 
                                onClick={() => {
                                    sendData(id)
                                }}
                            >
                                <CardContent className={cardClass.noteTitle}>
                                    <Typography 
                                       className={cardClass.noteTitle}
                                       gutterBottom 
                                       variant="h5"
                                       component="h3"
                                    >
                                        {
                                            title !== '' ? title : '無題'
                                        }
                                    </Typography>
                                </CardContent>
                                
                                <CardContent className={cardClass.noteContent} >
                                    <div className={cardClass.noteContentLetter}>
                                        {
                                           noteContent !== '' ? noteContent : '空です'
                                        }

                                    </div>
                                </CardContent>

                                
                            </div>
                            <CardActions disableSpacing className={clsx(commonClasses.subBackColor)}>
                                <CardBookMark onClick={() => {
                                    bookMarkEvent(id,bookMark)
                                }}
                                active={bookMark} 
                                />
                                <CardShare 
                                   shareUrl={setShareUrl(userId,id)}
                                   shareStatus = {data.data.share}
                                   switchOnChangeHandle = {switchOnChangeHandle}
                                />
                                <CardDelete onClick={() => {
                                    deleteEvent(id)
                                }}/>
                            </CardActions>
                        </Card>
                    </Grid>

                    )
                })
            }
            </Grid>
        </div>
    )
}
export default HomeCard;