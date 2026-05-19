import { getPosts } from "@/lib/wordpress";

export default async function sitemap() {
  const baseUrl = "https://amplusai.com";

  const posts = await getPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modified),
  }));

  const staticUrls = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/travel`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/recommend`,
      lastModified: new Date(),
    },
  ];

  return [...staticUrls, ...blogUrls];
}
