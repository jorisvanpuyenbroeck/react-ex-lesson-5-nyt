import { useRecoilValue } from "recoil";
import { nytTopStoriesQuery } from "../store";
import NewsItem from "./news_item";

export default function NewsList() {
  const posts = useRecoilValue(nytTopStoriesQuery);

  // console.log(posts.data.num_results);
  // console.log(posts);

  var output = [];

  for (var i = 0; i < posts.length; i++) {
    output = [
      ...output,
      <div key={i} className="columns large-3 medium-6">
        <NewsItem post={posts[i]} />
      </div>,
    ];
  }

  return (
    <section>
      <div className="row">{output}</div>
    </section>
  );
}
