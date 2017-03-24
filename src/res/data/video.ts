import { normalize, schema } from 'normalizr';


var videosRaw = require('./videos.json');

var videosRaw2 = videosRaw.map(item => { //run images through webpack
  item.img = require('../images/videos/' + item.img);
  return item;
});

const videoSchema = new schema.Entity('video');
const videoListSchema = new schema.Array(videoSchema);

export interface VideoInterface{
  id: number;
  img: any;
  src: string;
  title: string;
  url: string;
  featured: boolean;
}

export interface VideoTreeInterface{
    [propName: string]: VideoInterface;
}



/*
* normalize function will flatten hierarchical/nested data which is 
* the recommended way to handle data with redux
* see https://github.com/paularmstrong/normalizr
* see http://stackoverflow.com/questions/32135779/updating-nested-data-in-redux-store    (scroll to dan abramov's answer)
*/
const normalData = normalize(videosRaw,videoListSchema);

export const videos: VideoTreeInterface = normalData.entities.video;

export const videoIds = normalData.result;