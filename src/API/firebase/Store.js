import { store } from './base'

const setStoreImg = (userID,url) => {
    const cityRef = store.collection('user').doc(userID);

    cityRef.set({
        imgurl: url
    },
    {merge: true});
}


const getUserImgUrl = async (userID) => {
    const docRef = store.collection('user').doc(userID);
    const userData = await docRef.get().then(function(doc) {
        if (doc.exists) {
            return doc.data()
        } else {
            return 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
        return
    });

    return userData
}


/*  Noteコレクション  */

//Noteにインサート
const insertNote = (userID,data) => {
    const docRefUser = store.collection('user').doc(userID);
    const docRefNote = docRefUser.collection('Note').doc();
    const todo = new Date()

    docRefNote.set({
        data,
        bookMark: false,
        share: false,
        insert: todo,
        update: todo
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    })
}

//Noteアップデート
const updateNote = (userID,noteID,data) => {
    const docRefUser = store.collection('user').doc(userID);
    const docRefNote = docRefUser.collection('Note').doc(noteID);
    const todo = new Date()

    docRefNote.set({
        data: data,
        update: todo
    },
    { merge: true });
}


//NoteのbookMarkアップデート
const updateBookMark = (userID,noteID,data) => {
    const docRefUser = store.collection('user').doc(userID);
    const docRefNote = docRefUser.collection('Note').doc(noteID);
    const todo = new Date()
    docRefNote.set({
        bookMark: data,
        update: todo
    },
    {merge: true});
}

//Noteのshareアップデート
const updateShare = async (userID,noteID,data) => {
    console.log('シェアをアップデートします',data)
    const docRefUser = store.collection('user').doc(userID);
    const docRefNote = docRefUser.collection('Note').doc(noteID);
    const todo = new Date()
    await docRefNote.set({
        share: data,
        update: todo
    },
    {merge: true});
}

//Noteの消去
const deleteNote =  (userID,noteID) => {
    const docRefUser = store.collection('user').doc(userID);
    const docRefNote = docRefUser.collection('Note').doc(noteID);

    docRefNote.delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });

}


//NoteData全件取得
const getAllNoteData = async (userID) => {
    const docRefUser = store.collection('user').doc(userID);
    const docRefNote = docRefUser.collection("Note").orderBy("update", "desc");
    let noteData = 
        await docRefNote.get().then((querySnapshot) => {
            let data = []    
            querySnapshot.forEach((doc) => {
                data.push({id: doc.id, data: doc.data()});
            })
            return data
        });
    
    return noteData  
}


//NoteData取得
const getNoteData = async (userID,NoteID) => {
    const docRefUser = store.collection('user').doc(userID);
    const docRefNote = docRefUser.collection("Note").doc(NoteID);
    const noteData = 
        await docRefNote.get().then((doc) => {
            if(doc) {
                console.log('データ',doc.data().data)
                return doc.data()
            }
        });
    
    return noteData 
}

/* Share */

  //shareステータス リアルタイム取得
  const getShareStatus = async (userId,noteId) => {
    const docRefUser = store.collection('user').doc(userId);
    const docRefNote = await docRefUser.collection("Note").doc(noteId);

    const shareStatusData = await docRefNote.get().then(
       (doc)  => {
            if(doc.data()) {
                return  doc.data().share
            } 
            return formatDiagnosticsWithColorAndContext
       }
    ).catch(
      (error) => {
        console.log('shareステータス取得でエラー',error)
        return false
      }
    )
    console.log('リアルタイム変更されました',shareStatusData)
    return shareStatusData     
  }

  //update
  const shareUpdate = (shareId) => {

  }

  //delete
  const shareDelete = (shareId) => {

  }

  //getShare

  const share = () => {
    
  } 






export {
    setStoreImg,
    getUserImgUrl,
    insertNote,
    updateNote,
    updateBookMark,
    deleteNote,
    getAllNoteData,
    getNoteData,
    updateShare,
    getShareStatus
}