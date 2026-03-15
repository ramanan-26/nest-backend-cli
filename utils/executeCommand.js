import { execSync } from "child_process"
import { getInstallCommand } from "./checkDbExist.js"
import { rollback } from "./rollback.js"

export function executeCommand(projectName, db, orm) {

  try {

    console.log("🚀 Creating NestJS project...")
    execSync(`npx @nestjs/cli new ${projectName} --package-manager npm`, {
      stdio: "inherit"
    })

    if (db || orm) {

      console.log("📦 Installing dependencies...")

      const installCommand = getInstallCommand(db, orm)
      if (installCommand) {
        execSync(`cd ${projectName} && ${installCommand}`, {
          stdio: "inherit"
        })
      }

    }

    if (orm === "prisma") {

      console.log("⚡ Initializing Prisma...")
      execSync(`cd ${projectName} && npx prisma init`, {
        stdio: "inherit"
      })

    }

    console.log("✅ Project setup completed!\n\n")
    console.log(`cd ${projectName}`)
  } catch (error) {

    console.error("❌ Setup failed:", error.message)
    rollback(projectName)
    process.exit(1)

  }

}