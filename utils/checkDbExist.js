const databaseDrivers = {
  sqlite: "sqlite3",
  mysql: "mysql2",
  postgres: "pg",
  pg: "pg"
}

const availableOrm = {
  typeorm: "@nestjs/typeorm typeorm",
  prisma: "prisma @prisma/client",
  mongoose: "@nestjs/mongoose mongoose"
}

export function getInstallCommand(db, orm) {

  db = db?.toLowerCase().trim()
  orm = orm?.toLowerCase().trim()

  const driver = databaseDrivers[db]

  if (db && !driver) {
    console.error(`❌ Unsupported database: ${db}`)
    process.exit(1)
  }

  const ormLib = availableOrm[orm]

  if (orm && !ormLib) {
    console.error(`❌ Unsupported ORM: ${orm}`)
    process.exit(1)
  }

  // Prisma special case
  if (orm === "prisma") {
    return `npm install prisma @prisma/client ${driver}`
  }

  // ORM + DB
  if (orm && db) {
    return `npm install ${ormLib} ${driver}`
  }

  // Only DB
  if (db) {
    return `npm install ${driver}`
  }

  // Only ORM
  if (orm) {
    return `npm install ${ormLib}`
  }

  return null
}