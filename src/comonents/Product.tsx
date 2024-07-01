import { getPostsData } from "../services/quries";

export default function Product() {
  const productQuery = getPostsData();

  if (productQuery.isLoading) {
    return <h2>loading ...</h2>;
  }

  if (productQuery.error) {
    return <h2>{productQuery.error.message}</h2>;
  }

  console.log(productQuery.data);
  console.log("hello world");
  return (
    <div className="container mx-auto flex flex-wrap justify-center mt-5 gap-4">
      {productQuery.data?.map((posts) => (
        <div key={posts.id} className="w-96 h-auto border border-black  p-5">
          <h2 className="text-lg font-bold mb-2">
            <span className="border border-black p-2">{posts.id}</span>{" "}
            {posts.body}
          </h2>
          <p className="text-gray-700">{posts.title}</p>
        </div>
      ))}
    </div>
  );
}
