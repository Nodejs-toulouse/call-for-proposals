/**
 * Module dependencies.
 */
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

/**
 * Server.
 */
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        fs.readFile("src/views/talks.html", "utf8", (error, content) => {
            fs.readFile("src/data/talks.json", "utf8", (error, data) => {
                const talks = JSON.parse(data);
                let talksTpl = "";
                talks.forEach(talk => {
                    talksTpl += `<p class='proposal-item'>
                        <span class='icon-item-type'><i class='fa fa-star'></i></span>
                        <a href='#'>${talk.author}</a> sent ${talk.subject}
                    </p>`;
                });
                content = content.replace("{talks}", talksTpl);
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(content, "utf-8");
            });
        });
    } else if (req.url === "/add-talk") {
        if (req.method === "GET") {
            fs.readFile("src/views/add-talk.html", "utf8", (error, content) => {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(content, "utf-8");
            });
        } else if (req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                const newTalk = querystring.parse(body);
                fs.readFile("src/data/talks.json", "utf8", (error, data) => {
                    const talks = JSON.parse(data);
                    talks.push(newTalk);
                    fs.writeFile("src/data/talks.json", JSON.stringify(talks), (error) => {
                        res.writeHead(301, { Location: "/" });
                        res.end();
                    });
                });
            });
        }
    } else if (req.url === "/favicon.ico") {
        fs.readFile("src/public/images/favicon.png", (error, content) => {
            res.writeHead(200, { "Content-Type": "image/png" });
            res.end(content, 'binary');
        });
    } else {
        fs.readFile("src/views/404.html", "utf8", (error, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
        });
    }
});

server.listen(process.env.PORT || 3000);
console.log("App is running at http://localhost:%d", server.address().port);
console.log("Press CTRL-C to stop");