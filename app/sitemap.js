import { siteConfig } from './lib/site';

export default function sitemap() {
  const routes = ['', '/portfolio', '/experience', '/biography', '/contact'];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
