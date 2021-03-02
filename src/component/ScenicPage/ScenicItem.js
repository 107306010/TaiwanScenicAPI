import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ScenicMedia from './ScenicMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '20px auto'
    },
}));
const descriptionTrim = (des) => {
    if (des) {
        return des.length > 200 ? des.substring(0,200).concat('...') : des;
    } else {
        return '尚無資料'
    }
}

const ScenicItem = ({ scenic }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <ScenicMedia
                    component="img"
                    alt=""
                    height="170"
                    image={scenic.Picture.PictureUrl1}
                    title={scenic.Name}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {scenic.Name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        { scenic.Description ? descriptionTrim(scenic.Description) : descriptionTrim(scenic.DescriptionDetail)}
                    </Typography>
                </CardContent>
                </Card>
        </React.Fragment>
                
    )
}

export default ScenicItem