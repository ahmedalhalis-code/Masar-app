// Minimal service worker — enables "Add to Home Screen" installability.
// No offline caching logic needed since this app requires a live connection
// to Supabase anyway.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // pass-through, no caching
});
