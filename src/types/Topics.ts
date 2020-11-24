import {data_topics} from '../data/data_topics';
import {data_topic_levels} from '../data/data_topiclevel';

export interface IHashTopic {
  [key: string]: { id: string, name: string };
}

export interface IHashTopicLevel {
  [key: string]: { description: string };
}

class Topics {

  topics: IHashTopic;
  levels: IHashTopicLevel;

  constructor(topics: string[][], topic_levels: string[][]) {

    let thisTopics: IHashTopic = {};
    topics.slice().forEach((topic: string[]) => thisTopics[topic[0]] = {id: topic[0], name: topic[1]});
    this.topics = thisTopics;

    let thisLevels: IHashTopicLevel = {};
    topic_levels.slice().forEach((level: string[]) => thisLevels[level[0] + '_' + level[1]] = {description: level[2]});
    this.levels = thisLevels;

  }

  topicIdToTopicName = (t_id:number): {id:string,name:string} => this.topics[t_id];

  public static createInstance(): Topics {
    return new Topics(
      data_topics.map(entry => entry.map(data => String(data))),
      data_topic_levels.map(entry => entry.map(data => String(data))),
    );
  }
}


export default Topics;