const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "127.0.0.1";
const port = 8093;
const root = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

function safeResolve(urlPath) {
  const rawPath = urlPath === "/" ? "/index.html" : urlPath;
  const decoded = decodeURIComponent(rawPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[\\/])+/, "");
  const fullPath = path.join(root, normalized);

  if (!fullPath.startsWith(root)) {
    return null;
  }

  return fullPath;
}

const server = http.createServer((request, response) => {
  const filePath = safeResolve(request.url || "/");

  if (!filePath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = contentTypes[ext] || "application/octet-stream";

    fs.readFile(filePath, (readError, buffer) => {
      if (readError) {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Server Error");
        return;
      }

      response.writeHead(200, { "Content-Type": contentType });
      response.end(buffer);
    });
  });
});

server.listen(port, host, () => {
  console.log(`FOMO Guard local server running at http://${host}:${port}/`);
});
