import * as fs from 'node:fs'

interface Ilemoji {
  emoji: string
  names: string[]
  tages: string[]
  description: string
  category: string
}

const input: Ilemoji[] = JSON.parse(String(fs.readFileSync('lemoji.json')))

/** @type {Ilemoji} */
const emojis: Ilemoji[] = []

/** @type {Record<string,string>}  */

const nameToEmoji: { [key: string]: Ilemoji } = {}

/** @type {Record<string,string>}  */
const emojiToName: { [key: string]: Ilemoji } = {}

let index = 0
while (index++ < input.length - 1) {
  const info = input[index]
  emojis.push(info)
}
fs.writeFileSync(
  'index.ts',
  `
   export const lemoji = ${JSON.stringify(emojis, null, 2)}
  `,
)
