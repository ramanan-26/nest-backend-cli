export function validateCommand(args) {

    const projectName = args[0]

    if (!projectName) {
        console.error("❌ Project name required")
        process.exit(1)
    }

    let db = null
    let orm = null

    for (const arg of args) {
        if (arg.startsWith("--db=")) {
        db = arg.split("=")[1].replace(/['"]/g, "")
        }

        if (arg.startsWith("--orm=")) {
        orm = arg.split("=")[1].replace(/['"]/g, "")
        }
    }

    db = db?.toLowerCase()
    orm = orm?.toLowerCase()

    return {projectName, db, orm}
}