import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow: 'none',
      borderRadius: '0px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        padding: '10px 0',
    },
    infoContainer: {
        display: 'flex',
        paddingBottom: '10px'
    },
    foodName: {
        flex: 1,
        whiteSpace: 'nowrap',
        fontWeight: 600
    },
    foodPrice: {
        fontWeight: 600
    },
    foodDescription: {

    }
  });

  export default function FoodCard({food}) {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={food.image}
          title={food.name}
        />
        <CardContent className={classes.cardContent}>
            <div className={classes.infoContainer}>
                <div className={classes.foodName}>{food.name}</div>
                <div className={classes.foodPrice}>
                    <NumberFormat value={food.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </div>
            </div>
            <div className={classes.foodDescription}>
                {food.description}
            </div>
        </CardContent>
      </Card>
    );
  }

FoodCard.defaultProps = {
    food: {
        name: '',
        image: '',
        description: ''
    }
};