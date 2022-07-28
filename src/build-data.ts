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

const nameToEmoji: { [key: string]: string } = {}

/** @type {Record<string,string>}  */
const emojiToName: { [key: string]: string } = {}

let index = -1
while (++index < input.length) {
  const info = input[index]
  const emoji = info.emoji
  const name = info.names[0]

  emojis.push(info)
  emojiToName[emoji] = name
  let nameIndex = -1
  while (++nameIndex < info.names.length) {
    nameToEmoji[info.names[nameIndex]] = emoji
  }
}
fs.writeFileSync(
  'index.ts',
  `
export const lemoji = ${JSON.stringify(emojis, null, 2)}
export const nameToEmoji = ${JSON.stringify(nameToEmoji, null, 2)}
export const emojiToName = ${JSON.stringify(emojiToName, null, 2)}
   `,
)
