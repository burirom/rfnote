import * as React from 'react';

import { store } from '../../Redux/store'

import SignCard from '../Component/SiginCard'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { commonStyles } from '../../style'
import { signUp } from '../../../API/firebase/Auth.js';

//バリデーション
const Validation = (email,password,comparePassword) => {
  　//全て入力されてない時
  　if(!email && !password && !comparePassword) return '全て入力されていません。'
  　//メールアドレスとパスワードが入力されてない時
    if(!email && !password) return 'メールアドレスとパスワードが入力されていません。'
    //メールアドレスと確認用のパスワードが入力されてない時
    if(!email && !comparePassword) return 'メールアドレスと確認用のパスワードが入力されていません。'
    //パスワードと確認用のパスワードが入力されてない時
    if(!password && !comparePassword) return 'パスワードと確認用のパスワードが入力されていません。'
    //メールアドレスが入力されてない時
    if(!email) return 'メールアドレスが入力されていません。'
    //パスワードが入力されてない時
    if(!password) return 'パスワードを入力されていません。'
    //確認用のパスワードが入力されてない時
    if(!comparePassword) return '確認用のパスワードが入力されていません。'
    //パスワードと確認用のパスワードが一致してない時
    if(comparePassword !== password) return 'パスワードと確認用のパスワードが一致していません。'
  return null
} 

const SginUpPage = () => {

  const [email, setEmail ] = React.useState("");
  const [password,setPassword ] = React.useState("");
  const [comparePassword,setComparePassword] = React.useState("");
  const [errorMessage,setErrorMessage] = React.useState("");
  const [Done,setDone] = React.useState(false);
  const [loading,setLoading] = React.useState(false)

  const commonClasses = commonStyles();

  const handleEvent = async () => {
    //初期化
    setErrorMessage('')
    
    //ローディング開始
    setLoading(true)

    //バリデーションチェック
    if( Validation(email,password,comparePassword) !== null ) {
      const Message = Validation(email,password,comparePassword)
      setErrorMessage(Message)
      return 
    }

    //ログイン処理
    const signUpStatus = await signUp(email,password)
    　//ログイン失敗時
     if ( !signUpStatus ) {
      setErrorMessage('エラーが発生しました。')
      setLoading(false)
      return
     }

     //ログイン成功時
     setLoading(false)
     setDone(true)
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
                    comparePassword,
                    setComparePassword,
                    errorMessage,
                    Done,
                    handleEvent,
                    loading
                  }
                }>
                    <SignCard />
                </ContextContainer.Provider>
            </Grid>
          </Container>
      </div>
  )
}
 export const ContextContainer = React.createContext(null)
 export default SginUpPage;