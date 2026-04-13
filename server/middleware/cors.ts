export default defineEventHandler((event: any) => {
  if (event.path.includes('/api/')) {
    setResponseHeaders(event, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });

    if (getMethod(event) === 'OPTIONS') {
      return sendNoContent(event);
    }
  }
});
