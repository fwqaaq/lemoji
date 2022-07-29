#!/usr/bin/env node

import { nameToEmoji } from "../dist/index.ts.mjs";

const names = Object.keys(nameToEmoji)

if (process.argv[2] === "--name" || process.argv[2] === "-n") {
  const repeatName = names.find(item => item === process.argv[3])
  if (repeatName) {
    process.stdout.write(`The name is already there (\x1B[31m${repeatName}\x1B[0m), and its emoji is(\x1B[31m${nameToEmoji[repeatName]}\x1B[0m) please rename it\n`, (err) => {
      if (err) console.log(`Errors that are not know ${err}`)
    })
  } else {
    process.stdout.write(`No duplicate names,you can use it\n`)
  }
  process.exit(0)
}

if (process.argv[2] === "--help" || process.argv[2] === "-h") {
  console.log(`\nUsage: lemoji [--name|-n] [name]    you can use this command to check if the name is already there`)
  console.log(`Usage: lemoji [--help|-h]    you can use this command to search all commands\n`)
  process.exit(0)
}
