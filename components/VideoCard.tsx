import {NextPage} from 'next';
import React from 'react';
import {Video} from '../../tiktok_clone/types';

interface IProps {
    post: Video;

}

const VideoCard: NextPage <IProps> = ({post}) => {

  console.log(post.caption);
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard