import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchRelatedVideosAsync } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../UI/Loading";
import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideoList = ({ currentVideoId, tags }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { videos, isLoading, isError, error } = useSelector(
    (state: any) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideosAsync({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video: any) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
