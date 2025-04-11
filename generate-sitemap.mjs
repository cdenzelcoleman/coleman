import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import projectsData from '../src/utils/data.js'; // projects data

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// project URLs
const projectRoutes = projectsData.map(project => ({
  url: `/project/${encodeURIComponent(project.name)}/`,
  changefreq: 'weekly',
  priority: 0.9
}));

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/tech', changefreq: 'monthly', priority: 0.8 },
  ...projectRoutes
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ 
    hostname: 'https://cdenzelcoleman.github.io/coleman',
    xmlns: {
      news: false,
      xhtml: true,
      image: false,
      video: false
    }
  });

  const writeStream = createWriteStream(join(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  routes.forEach(route => sitemap.write(route));

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();