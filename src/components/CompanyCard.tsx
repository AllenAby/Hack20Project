import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Company } from '../App'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 20
    },
    gutterTopAndBottom: {
        margin: 20
    },
    card: {
        maxWidth: 345
    },
    media: {
        height: 350
    }
}))

const CompanyCard = (props: { companyData: Company }): JSX.Element => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container direction='row' spacing={2}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531210888l/4631.jpg'}
                                title='React'
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='h2'>
                                    {props.companyData.companyName}
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    by {props.companyData.email}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardContent>
                                <Typography paragraph variant='body2'>
                                    {bookItem.description.length > 150
                                        ? bookItem.description.slice(0, 150) + `...`
                                        : bookItem.description}
                                </Typography>
                            </CardContent> */}
                        <CardActions>
                            <Button size='small' variant='outlined' color='inherit'>
                                {props.companyData.phone}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default CompanyCard