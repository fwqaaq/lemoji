import * as fs from "node:fs"
import { Octokit } from '@octokit/core'

const octokit = new Octokit({
  auth: process.env["GITHUB_TOKEN"],
})

const { data: { files } } = await octokit.request('GET /gists/{gist_id}', {
  gist_id: 'da0f0b1216210c9a949bf55ff843299f'
})

fs.writeFile("./lemoji.json", files["lemoji.json"].content, (err) => {
  if (err) console.log(err)
})
