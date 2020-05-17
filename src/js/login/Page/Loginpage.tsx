import * as React from 'react';
import LoginCard from '../Component/LoginCard'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { commonStyles } from '../../style'

const LoginPage = () => {
  const commonClasses = commonStyles();
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
              <LoginCard />
          </Grid>
          </Container>
      </div>
  )
}
 export default LoginPage;