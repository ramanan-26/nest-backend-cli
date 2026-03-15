#!/usr/bin/env node

import { validateCommand } from '../utils/validateCommand.js'
import { executeCommand } from '../utils/executeCommand.js'
import { helper } from '../utils/helper.js'

const args = process.argv.slice(2)

// show help
if (args.includes('--help') || args.includes('-h')) {
  console.log(helper())
  process.exit(0)
}

try {
  const { projectName, db, orm } = validateCommand(args)
  executeCommand(projectName, db, orm)
} catch (error) {
  console.error(`❌ ${error.message}`)
  process.exit(1)

}