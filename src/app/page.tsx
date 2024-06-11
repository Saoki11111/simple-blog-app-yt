import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // console.log(hello.data);
  const allBlogs = api.example.getAllBlogs.useQuery();
  console.log(allBlogs.data);
  console.log("hello");

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] py-12 text-white">
      <div className="container px-4 mx-auto">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">T3</span> App Blog
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="https://create.t3.gg/en/usage/first-steps">
            <div className="rounded-xl bg-white/10 p-6">
              <h3 className="mb-4 text-2xl font-bold">Blog Title</h3>
              <div className="mb-4 text-lg">Blog Description</div>
              <span className="text-base text-gray-400">2023/09/28</span>
            </div>
          </Link>

          <Link href="https://create.t3.gg/en/usage/first-steps">
            <div className="rounded-xl bg-white/10 p-6">
              <h3 className="mb-4 text-2xl font-bold">Blog Title</h3>
              <div className="mb-4 text-lg">Blog Description</div>
              <span className="text-base text-gray-400">2023/09/28</span>
            </div>
          </Link>

          <Link href="https://create.t3.gg/en/usage/first-steps">
            <div className="rounded-xl bg-white/10 p-6">
              <h3 className="mb-4 text-2xl font-bold">Blog Title</h3>
              <div className="mb-4 text-lg">Blog Description</div>
              <span className="text-base text-gray-400">2023/09/28</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
