import * as React from 'react';

import { store } from '../../Redux/store'

import LoginCard from '../Component/LoginCard'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { commonStyles } from '../../style'
import { signIn } from '../../../API/firebase/Auth.js';
import { alreadyLoginCheck } from '../../Auth'

//ログインステータスをセット
const setLoginStatus = (isLogin) => {
    store.dispatch({ type:'LOGIN', payload: isLogin})
}

//バリデーション
const Validation = (email,password) => {
  　//メールアドレスとパスワードが入力されてない時
    if(!email && !password) return 'メールアドレスとパスワードが入力されていません。'
    //メールアドレスが入力されてない時
    if(!email) return 'メールアドレスが入力されていません。'
    //パスワードが入力されてない時
    if(!password) return 'パスワードを入力されていません。'
  return null
} 

const LoginPage = () => {

  const [email, setEmail ] = React.useState("");
  const [password,setPassword ] = React.useState("");
  const [errorMessage,setErrorMessage] = React.useState("");
  const [loading,setLoading] = React.useState(false);
  const commonClasses = commonStyles();

  React.useEffect(() => {
    alreadyLoginCheck()
    return function cleanup () {alreadyLoginCheck()}
  })

  const handleEvent = async () => {
    //初期化
    setErrorMessage('')
    //ローディング開始
    setLoading(true)
    //バリデーションチェック
    if( Validation(email,password) !== null ) {
      const Message = Validation(email,password)
      //ローディング終了
      setLoading(false)
      setErrorMessage(Message)
      return 
    }

    //ログイン処理
    const loginStatus = await signIn(email,password)
    　//ログイン失敗時
     if ( !loginStatus ) {
      setErrorMessage('メールアドレスまたはパスワードが違います。')
      //ローディング終了
      setLoading(false)
      setLoginStatus(false)
      return
     }

     //ログイン成功時
     setLoginStatus(true)
     
     return
  }
  return (
      <div className={commonClasses.mainBackColor}>
          <Container fixed>
            <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ height: '100vh' }}
              >
                <ContextContainer.Provider value={
                  {
                    email,
                    setEmail,
                    password,
                    setPassword,
                    errorMessage,
                    loading
                  }
                }>
                  <LoginCard onClick={handleEvent} />
                </ContextContainer.Provider>
            </Grid>
          </Container>
      </div>
  )
}
 export const ContextContainer = React.createContext(null)
 export default LoginPage;