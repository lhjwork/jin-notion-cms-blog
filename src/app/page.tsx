import { fetchPages } from "@/lib/notion";

export default async function Home() {
  const posts = await fetchPages();

  return (
    <main className="">
      {posts.results.map((post: any) => (
        <article key={post.id}>
          <h2>{post.properties.Title.title[0].plain_text}</h2>
        </article>
      ))}
    </main>
  );
}
