import React from "react";
import { postandearn } from "../../../utils/data";
import VideoPostList from "./VideoPostList";

const VideoPostLists = () => {
  return (
    <ul>
      {postandearn.map((post) => {
        return <VideoPostList key={post.id} {...post} />;
      })}
    </ul>
  );
};

export default VideoPostLists;
