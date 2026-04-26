#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(
  path.join(__dirname, "data.txt"),
  "utf8"
);

fs.writeFileSync("data.txt", content);

console.log("✅ data.txt created");
