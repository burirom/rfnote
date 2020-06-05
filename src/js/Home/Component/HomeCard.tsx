import * as React from 'react';
import { CardStyles } from '../../style'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { CardTitle, CardShare, CardBookMark, CardDelete } from '../../Components/card/CardItem'

import useReactRouter from 'use-react-router';

import { store } from '../../Redux/store'

import { deleteNote,updateBookMark,updateShare,getShareStatus } from '../../../API/firebase/Store.js'



const HomeCard = () => {
    const cardClass = CardStyles()
    const { history } = useReactRouter();
    const userId = store.getState().user.userId
    const [noteData,setNoteData] = React.useState( store.getState().noteData)

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
        store.dispatch({type: 'SET_NOTE_ACTIVE_DATA', payload: contentData[0].data.data})
        history.push('note')
    }

    const setShareUrl = (userId,noteId) => {
        // console.log(userId,noteId)
        return location.origin + '/note?user='+userId+'&id='+noteId
    }


    // //共有リンクステータスセット
    // const switchOnChangeHandle = async (id) => {
    //     await console.log('aaaaa',id)
    // }


    return (
        <div className={cardClass.Card}>
            <Grid container spacing={3}>

            {
                noteData.map((data,idx) => {

                const title = data.data.data.blocks[0].text
                const id = data.id
                const bookMark = data.data.bookMark
                const userId = store.getState().user.userId
                const shareStatus = (userId,id) => {
                    return getShareStatus(userId,id)
                }
                const switchOnChangeHandle = async (event) => {
                    console.log('ステータス',event.target.checked,'リアルタイム')
                    await updateShare(userId,id,event.target.checked)
                }
                return (
                    <Grid key={idx} item xs={12} md={6} lg={3}>
                        <Card className={cardClass.cardBottom}>
                            <button className={cardClass.mainContent} 
                                onClick={() => {
                                    sendData(id)
                                }}
                            >
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                    Title
                                    </Typography>
                                </CardContent>
                                
                                <CardContent>
                                    <CardTitle title={title}></CardTitle>
                                </CardContent>
                            </button>
                            <CardActions disableSpacing>
                                <CardBookMark onClick={() => {
                                    bookMarkEvent(id,bookMark)
                                }}
                                active={bookMark} 
                                />
                                <CardShare 
                                   shareUrl={setShareUrl(userId,id)}
                                   shareStatus = {shareStatus(userId,id)}
                                   switchOnChangeHandle={switchOnChangeHandle}
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