import { storage } from './base.js'
import { setStoreImg } from './Store.js'

const setUserImg = (imgUrl,userID) => {
    const storageRef = storage.ref('/UserImg/'+ userID);

     storageRef.child(imgUrl.name)
      .put(imgUrl)
      .catch(function(error) {
        console.log(error)
       }
    );
}

const getUserImgUrl = async (userID,imgName) => {
    const storageRef = await storage.ref('/UserImg/'+ userID)
    .child(imgName).getDownloadURL().then(
        (url) => {
        // Insert url into an <img> tag to "download"
        // setStoreImg(userID,url)
        return url
        }
      ).catch(function(error) {
         console.log(error)
         return null

    });

    return storageRef


}


export { setUserImg,getUserImgUrl }