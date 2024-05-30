import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchTagsAsync } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tagsData = useSelector((state: any) => state.tags);

  const { tags, isLoading, isError, message } = tagsData;

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);

  return tags.length ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag: any) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
