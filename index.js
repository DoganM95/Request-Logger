const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("combined", { immediate: true }));

app.all("/{*splat}", (req, res) => {
    console.log(colorize("\n=== Incoming Request ===", "#cc0000"));

    console.log(colorize("Method:", "#00ffff"), req.method);
    console.log(colorize("URL:", "#00ffff"), req.originalUrl);

    console.log(colorize("\nHeaders:", "#00ff00"));
    for (const [key, value] of Object.entries(req.headers)) {
        console.log("  ", colorize(key, "#4e9a06"), ":", value);
    }

    console.log(colorize("\nBody:", "#ffff00"));
    if (req.body && Object.keys(req.body).length) {
        console.log(JSON.stringify(req.body, null, 2));
    } else {
        console.log("<empty>");
    }

    console.log(colorize("=======================\n", "#cc0000"));

    res.json({ status: "ok" });
});

app.listen(3000, () => console.log("Listening on 3000"));

const colorize = (text, hex) => {
    const [r, g, b] = hex
        .replace(/^#/, "")
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));
    return `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
};
