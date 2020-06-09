import * as React from 'react';
import { commonStyles, CardStyles } from '../../style'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { CardTitle, CardShare, CardBookMark, CardDelete } from '../../Components/card/CardItem'
import { store } from '../../Redux/store'
import clsx from 'clsx';

import useReactRouter from 'use-react-router';

import { deleteNote,updateBookMark,updateShare,getShareStatus } from '../../../API/firebase/Store.js'

const BooKMarkCard = () => {
    const cardClass = CardStyles()
    const commonClasses = commonStyles();
    const  { history } = useReactRouter()

    const userId = store.getState().user.userId
    const [noteData,setNoteData] = React.useState( store.getState().noteData)
    

    //デリート機能
    const deleteEvent = (id) => {
        store.dispatch({ type: 'UPDATA_NOTE_DATA_BOOKMARK',payload: id})
        setNoteData(store.getState().noteData)
        updateBookMark(userId,id,false) 
    }

    const sendData = (id) => {
        store.dispatch({ type: 'SET_ACTIVE_DATA', payload: id})
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
            if(i !== 0) content += data[i].text
        }
        return content
    }

    return (
        <div className={cardClass.Card}>
                <Grid container spacing={3}>
                {
                noteData.map((data,idx) => {

                const title = data.data.data.blocks[0].text
                const id = data.id
                const userId = store.getState().user.userId

                const noteContent = createNoteContents(data.data.data.blocks)

                const switchOnChangeHandle = async (event) => {
                    switchOnChangeHandleEvent(userId,id,!data.data.share)
                }

                if(data.data.bookMark) {
                    return (
                        <Grid key={idx} item xs={12} md={6} lg={3}>
                            <Card className={cardClass.cardBottom}>
                                <div className={cardClass.mainContent} 
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
                                <CardActions disableSpacing　className={clsx(commonClasses.subBackColor)}>
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
                }
                })
            }
                </Grid>
        </div>
    )
}
export default BooKMarkCard;