import fetch from 'node-fetch'
import * as fs from "node:fs"

// fetch(
//   "https://gist.githubusercontent.com/Jack-Zhang-1314/da0f0b1216210c9a949bf55ff843299f/raw/e5757ad9b2cecc5d6089628ceae244d73f0e848b/lemoji.json",
//   )
//   .then((res) => res.body.pipe(fs.createWriteStream('lemoji.json')))

fetch("https://gist.github.com/Jack-Zhang-1314/da0f0b1216210c9a949bf55ff843299f").then(
  (res) => res.text()
).then(res => console.log(res))
