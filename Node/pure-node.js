const http = require("http");

const serve = http.createServer((request, response) => {
  let body = [];
  //   console.log(request.url,request.method)
  request.on("data", (chunk) => {
    body.push(chunk);
  });

  request.on("end", () => {
    body = Buffer.concat(body).toString();
    let userName = "not defined";
    if (body) {
      userName = body.split("=")[1];
    }
    response.setHeader("Content-Type", "text/html");
    response.write(
      `<h1>Hi ${userName}</h1><form method='POST' action='/'><input name='username' type='text'><button type='submit'>Submit</button></form>`
    );
    response.end();
  });
});

serve.listen(3000);
