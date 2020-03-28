import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
  CardMedia: {
    height: "100%",
  },
  card: {
    background: '#ddd',
  },
  media: {
    height: 0,
    paddingTop: '40%',
    paddingBottom: '40%' // 16:9
  },
  add: {
    color: '#0275d8',
  }
}


const useStyles = makeStyles(styles);
// const useStyles = makeStyles(theme => ({
// //   root: {
// //     maxWidth: 345,
// //   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

const ProductCard = ( { product } ) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { id, title } = product;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AddCircleIcon className={classes.add} fontSize="large"/>
          </IconButton>
        }
        align="left"
        title={title}
        subheader="$5.00"
      />
      <CardMedia
        className={classes.media}
        image={require(`../../assets/${id}.jpg`)}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          {/* {description} */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;