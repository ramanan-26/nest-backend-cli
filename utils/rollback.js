import fs from "fs"

export function rollback(projectName) {

  console.log("🧹 Rolling back setup...")
  if (fs.existsSync(projectName)) {
    fs.rmSync(projectName, {
      recursive: true,
      force: true
    })
    console.log("✅ Cleanup completed")
  }

}