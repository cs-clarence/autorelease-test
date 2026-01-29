import { readFileSync, writeFileSync } from "node:fs";

const version = process.argv[2];

const packageJson = JSON.parse(readFileSync("package.json"));
packageJson.version = version;
writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
