const Replace = require("./replaceFile");
const fs = require("fs");
const paths = require("path");

let current = [];

class Clone {
  async create(ctx) {
    current = [];
    const { urls } = ctx.request.body;
    console.log("urls", urls);

    for (const url of urls) {
      let result = await Replace.create(url);
      current.push({ url, status: result });
    }

    console.log("全部完成了");
    ctx.body = {
      code: 0,
      data: "全部完成了",
    };
  }

  async getWebsite(ctx) {
    console.log("progress", ctx.query);
    const { path } = ctx.query;

    let components = [];
    let dir = paths.join(path);
    console.log('dir: ', dir);
    const files = fs.readdirSync(dir);
    console.log('files: ', files);
    files.forEach(function (item, index) {
      let stat = fs.lstatSync("./" + item);
      if (stat.isDirectory() === true) {
        components.push({
          name:item,
          path:paths.join(dir,item)
        });
      }
    });

    console.log(components);

    ctx.body = {
      code: 0,
      data: components,
    };
  }
}

module.exports = new Clone();
