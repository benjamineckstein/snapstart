import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Button, ButtonGroup} from '@material-ui/core';
import {Player} from '../types/Player';
import {Questions} from '../types/Questions';
import {playerLevelToString} from '../types/PlayerLevel';
import GroupModeQuestion from './GroupModeQuestion';


type MyProps = {
  player: Player
  questions: Questions
  onChooseTopic: any
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

export default function GroupModeTopicCard(props:MyProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="player" className={classes.avatar}>{props.player.name.slice(0,2)}</Avatar>
        }

        title={props.player.name}
        subheader={`${playerLevelToString(props.player.level)}, ${props.player.points} points`}
      />
      <CardContent>
        <Typography variant="caption" color="primary" component="h1">
          <span>{props.questions.getRemainingQuestions()} questions remaining.</span>
        </Typography>
        <Typography variant="h6" color="textPrimary" component="p">
          Please choose a topic
        </Typography>
        <ButtonGroup orientation="vertical" size="small" color="primary" aria-label="outlined primary button group">
          {props.questions.getAvailableTopics(props.player.level).map(topic_id => {
            return (<Button key={topic_id} onClick={(): void => props.onChooseTopic(topic_id)}>{GroupModeQuestion.topicData.topicIdToTopicName(topic_id).name}</Button>);
          })}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}