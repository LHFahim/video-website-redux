import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideoList = () => {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* single related video */}
      <RelatedVideoItem />
    </div>
  );
};

export default RelatedVideoList;
