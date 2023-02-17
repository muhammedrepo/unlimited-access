import { postEarn } from '../../utils/data';
import VideoPostList from './VideoPostList';

const VideoPostLists = () => {
  return (
    <ul>
      {postEarn.map((post) => {
        return <VideoPostList key={post.id} {...post} />;
      })}
    </ul>
  );
};

export default VideoPostLists;
