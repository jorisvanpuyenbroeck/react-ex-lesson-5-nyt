import { RecoilRoot } from "recoil";
import "./App.css";

import NewsReader from "./components/news_reader";

function App() {
  return (
    <RecoilRoot>
      <NewsReader />
    </RecoilRoot>
  );
}

export default App;
