// composables/useSeo.ts
interface SeoProps {
  title: string;
  description: string;
  image?: string;
  path: string;
  type?: string;          // e.g., 'website', 'article'
  publishedTime?: string; // For articles/blog posts
  modifiedTime?: string;  // For articles/blog posts
  keywords?: string[];    // SEO keywords
}

export const useSeo = ({
  title,
  description,
  image,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords = []
}: SeoProps) => {
  // Access runtime config for environment variables
  const config = useRuntimeConfig();
  const baseUrl = `${config.public.siteUrl}`;
  const siteName = `${config.public.siteName}`;

  // Compute full URLs
  const fullUrl = `${baseUrl}${path}`;
  const imageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/default-share.jpg`;

  useHead({
    // Basic SEO
    title: title,
    titleTemplate: (title) => `${title} - ${siteName}`,

    meta: [
      // Standard metadata
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },

      // OpenGraph metadata
      { property: 'og:site_name', content: siteName },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },

      // Article specific metadata (if applicable)
      ...(publishedTime ? [{ property: 'article:published_time', content: publishedTime }] : []),
      ...(modifiedTime ? [{ property: 'article:modified_time', content: modifiedTime }] : []),

      // Twitter Card metadata
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl }
    ],

    // Canonical URL
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  })
}
