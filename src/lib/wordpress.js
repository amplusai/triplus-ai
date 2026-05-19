const API_URL = "https://cms.amplusai.com/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(
    `${API_URL}/posts?_embed&per_page=100`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export async function getRelatedPosts(categoryId, excludeSlug) {
  const res = await fetch(
    `${API_URL}/posts?_embed&per_page=3&categories=${categoryId}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  const posts = await res.json();
  return posts.filter((p) => p.slug !== excludeSlug);
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${API_URL}/posts?slug=${slug}&_embed`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return null;
  }

  const posts = await res.json();

  return posts[0] || null;
}
