// _worker.js
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "coindaynow.com") {
      url.hostname = "www.coindaynow.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=bundledWorker-0.5083168210175489.mjs.map
