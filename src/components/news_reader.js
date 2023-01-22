import { Suspense } from "react";
import NewsFilter from "./news_filter";
import NewsList from "./news_list";

export default function NewsReader() {
  return (
    <div>
      <h3 className="text-center">React News Reader</h3>
      <div>
        <NewsFilter />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsList />
      </Suspense>
    </div>
  );
}
