const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { web3 } = require("@project-serum/anchor");
// const { programs } = require("@metaplex/js");
// const {
//   metaplex: { Store, AuctionManager },
//   metadata: { Metadata },
// } = programs;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // bootstrap next web server
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });

  const conn = new web3.Connection(process.env.NEXT_PUBLIC_RPC_NODE);

  conn.onLogs(new web3.PublicKey(process.env.CREATOR_ADDRESS), (logs) => {
    console.log(logs);
  });
});
