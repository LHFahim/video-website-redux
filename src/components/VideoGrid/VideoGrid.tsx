import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchVideosAsync } from "../../features/videos/videosSlice";
import Loading from "../UI/Loading";
import VideoGridItem from "./VideoGridItem";

const VideoGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { videos, isLoading, isError, error } = useSelector(
    (state: any) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideosAsync());
  }, [dispatch]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && videos.length === 0)
    content = <div className="col-span-12">No videos found</div>;
  if (!isError && !isLoading && videos.length)
    content = videos.map((video: any) => (
      <VideoGridItem key={video.id} video={video} />
    ));

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
