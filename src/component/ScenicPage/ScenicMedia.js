import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import LocalSeeIcon from '@material-ui/icons/LocalSee';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: 170,
        backgroundColor: '#3f51b5'
    },
    icon: {
        color: '#ffdb4d',
        width: '100%',
        height: '70%',
    }
}));

const ScenicMedia = ({ component, alt, height, image, title }) => {
    
    const classes = useStyles();

    if (image) {
        return <CardMedia
            component={component}
            alt={alt}
            height={height}
            title={title}
            data-src={image}
            className='lazy'
        />
    } else {
        //沒圖片的替代圖片
        return (
            <div className={classes.root}>
                <LocalSeeIcon fontSize="large" className={classes.icon}/>
            </div>
        )
    }
    
}

export default ScenicMedia;