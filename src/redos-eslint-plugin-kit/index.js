import { ConfigCommentParser } from "@eslint/plugin-kit";

const str = `${" ".repeat(100000)}A`;

const parser = new ConfigCommentParser();
console.info("parseStringConfig");
console.time("parseStringConfig");
console.log(parser.parseStringConfig(str));
console.timeEnd("parseStringConfig");
console.log(parser.parseStringConfig("a:1,b:2,c:33333,d:{hello:world}"));
