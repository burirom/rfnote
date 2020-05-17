import * as React from 'react';
import { commonStyles, CardStyles } from '../../style'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { CardTitle, CardShare, CardBookMark, CardDelete } from '../../Components/card/CardItem'

const HomeCard = () => {
    const cardClass = CardStyles()
    return (
        <div className={cardClass.Card}>
            <Grid container spacing={3}>
                <Grid v-for={13} item xs={12} md={6} lg={3}>
                    <Card className={cardClass.cardBottom}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Title
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <CardTitle></CardTitle>
                        </CardContent>
                        <CardActions disableSpacing>
                            <CardBookMark />
                            <CardShare />
                            <CardDelete />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default HomeCard;