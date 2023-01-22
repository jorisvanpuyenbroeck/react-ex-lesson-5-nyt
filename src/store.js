import { atom, selector } from "recoil";
import NytApi from "./apis/nyt_api";

export const sectionState = atom({
  key: "sectionState",
  default: "politics",
});

export const nytTopStoriesQuery = selector({
  key: "nytTopStoriesQuery",
  get: async ({ get }) => {
    var result = await NytApi.getPosts(get(sectionState));

    var posts = result.data.results;

    console.log(posts);

    posts.forEach(function (post) {
      if (post.multimedia) {
        let imgObj = post.multimedia.find(
          (media) => media.format === "Super Jumbo"
        );
        post.image_url = imgObj ? imgObj.url : "no-image.jpg";
      } else {
        post.image_url = "no-image.jpg";
      }
    });

    console.log(posts);

    return posts;
  },
});

