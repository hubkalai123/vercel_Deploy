'use client';
import Image from "next/image";
import PostData from "./components/TodosPost/post";
import IndexDisplayingCC from "./components/displayling";
import { Provider } from "react-redux";
import { store } from "./components/Actions/store/store";
import UpdatePost from "./components/TodosPost/updatePost";
export default function Home() {
  return (
    <div>
      <Provider store={store}>
        {/* <PostData /> */}
        <UpdatePost  />
        <IndexDisplayingCC />
      </Provider>
    </div>
  );
}
