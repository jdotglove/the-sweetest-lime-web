export default defineEventHandler((event) => {
  if (event.path.startsWith('/api/')) {
    setResponseHeaders(event, {
      'Access-Control-Allow-Origin': process.env.NUXT_PUBLIC_SITE_URL || '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });

    if (getMethod(event) === 'OPTIONS') {
      event.node.res.statusCode = 204;
      event.node.res.end();
    }
  }
});
