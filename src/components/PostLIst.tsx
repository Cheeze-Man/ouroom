"use client";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/hooks/posts";
import GuidePost from "./ui/GuidePost";

const PostLIst = () => {
  const { posts, isLoading } = usePosts();

  return (
    <section>
      {isLoading && (
        <div className="text-center mt-32">
          <GridSpinner color="#8B5CF6" />
        </div>
      )}
      {posts && posts.length === 0 && !isLoading && (
        <ul>
          <li>
            <GuidePost />
          </li>
        </ul>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post, index) => (
              <li key={post.id} className="mb-4">
                <PostListCard post={post} priority={index < 2} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default PostLIst;
