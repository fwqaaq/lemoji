import fetch from 'node-fetch'
import * as fs from "fs"

fetch(
  'https://gist.githubusercontent.com/Jack-Zhang-1314/da0f0b1216210c9a949bf55ff843299f/raw/7fb2cbeef4c049b95ae7d72073a9e0ccff247def/lemoji.json',
)
  .then((res) => res.body.pipe(fs.createWriteStream('lemoji.json')))
