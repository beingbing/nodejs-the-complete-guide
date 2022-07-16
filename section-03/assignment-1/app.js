const http = require("http");
// const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title><head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    // res.write("<body><h1>Welcome to my page!!</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users list</title><head>");
    res.write("<body><ul><li>user 1</li><li>user 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log("username: ", message);
      //   fs.writeFile("message.txt", message, (err) => {
      //     return res.end();
      //   });
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Assignment 1</title><head>");
//   res.write("<body><h1>Welcome to my page!!</h1></body>");
//   res.write("</html>");
//   res.end();
});

server.listen(3000);
