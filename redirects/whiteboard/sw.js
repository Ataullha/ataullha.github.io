/* Compatibility for visitors with the previous address installed or cached. */
// Wait for the existing application's saved-update action; never interrupt typing.
self.addEventListener("message", (event) => {
  if (event.data?.type === "ACTIVATE_UPDATE")
    event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);
self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (
    request.method !== "GET" ||
    new URL(request.url).origin !== self.location.origin
  )
    return;
  if (request.mode === "navigate") {
    const target = new URL("../FreeBoard/", self.registration.scope);
    event.respondWith(Promise.resolve(Response.redirect(target.href, 302)));
    return;
  }
  // An already-open older tab can still finish using its cached runtime assets.
  event.respondWith(
    caches
      .match(request, { ignoreSearch: true })
      .then((hit) => hit || fetch(request)),
  );
});
