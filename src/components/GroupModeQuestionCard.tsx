import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button} from '@material-ui/core';
import {Player} from '../types/Player';
import {IQuestion} from '../types/Questions';
import {playerLevelToString} from '../types/PlayerLevel';
import GroupModeQuestion from './GroupModeQuestion';


type MyProps = {
  player: Player
  question: IQuestion
  onEvaluate: any
};

const useStyles = makeStyles((theme) => ({
  root: {
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function GroupModeQuestionCard(props:MyProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="player" className={classes.avatar}>{props.player.name.slice(0,2)}</Avatar>
        }

        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          ><ExpandMoreIcon /></IconButton>
        }
        title={props.player.name}
        subheader={`${playerLevelToString(props.player.level)}, ${props.player.points} points`}
      />
      <CardContent>
        <Typography variant="caption" color="primary" component="h1">
          {GroupModeQuestion.topicData.topicIdToTopicName(props.question.topic_id).name}
        </Typography>
        <Typography variant="h5" color="textPrimary" component="p">
          {props.question.question}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={() => props.onEvaluate(1)} title="+1 at least you tried">1</Button>
        <Button onClick={() => props.onEvaluate(2)} title="+2 you got the basic idea">2</Button>
        <Button onClick={() => props.onEvaluate(3)} title="+3 its an OK answer">3</Button>
        <Button onClick={() => props.onEvaluate(4)} title="+4 solid answer with good terminology">4</Button>
        <Button onClick={() => props.onEvaluate(5)} title="+5 Perfect answer you could imagine">5</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Help & Solution:</Typography>
          <Typography paragraph>
            No help available at this point.
          </Typography>
          <Typography paragraph>
            You can always contribute to questions.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}