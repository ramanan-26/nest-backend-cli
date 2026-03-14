#!/usr/bin/env node
import {getInstallCommand} from '../utils/checkDbExist.js'
import { execSync } from "child_process"

const args = process.argv

// const args = process.argv.slice(2)

const projectName = args[2]

let db = null 
let orm = null

for(const arg of args){
    if(arg.startsWith('--db=')){
        db = arg.split('=')[1]
    }
    if (arg.startsWith("--orm=")) {
    orm = arg.split("=")[1]
    }
}

execSync(`npx @nestjs/cli new ${projectName} --package-manager npm`, {
  stdio: "inherit"
})

if(db && orm){
    const sqlCommand = getInstallCommand(db,orm)
    execSync(`cd ${projectName} && ${sqlCommand}`, {
    stdio: "inherit"
    })
}
