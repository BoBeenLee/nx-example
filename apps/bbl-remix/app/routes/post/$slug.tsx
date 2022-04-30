import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost, PostItem } from "@bbl-remix/post";
import PostTemplate from "@bbl-remix/templates/post";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.slug ?? "");
};

export default function PostSlug() {
  const post = useLoaderData<PostItem>();
  const { slug, title, html } = post;
  return <PostTemplate slug={slug} html={html ?? ""} title={title} />;
}
