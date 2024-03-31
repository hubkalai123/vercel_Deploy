'use client';
import IndexDisplayingCC from "./components/displayling";
import UpdatePost from "./components/TodosPost/updatePost";
export default function Home() {
  return (
    <div>
      {/* <Provider store={store}> */}
        {/* <PostData /> */}
        <UpdatePost  />
        <IndexDisplayingCC />
      {/* </Provider> */}
    </div>
  );
}
