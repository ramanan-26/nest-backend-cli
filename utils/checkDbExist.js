const databaseDrivers = {
  sqlite: "sqlite3",
  mysql: "mysql2",
  postgres: "pg",
  pg:"pg"
}

const availableOrm = {
  typeorm: "@nestjs/typeorm typeorm",
  prisma: "prisma @prisma/client",
  mongoose: "@nestjs/mongoose mongoose"
}

export function getInstallCommand(db, orm,) {

  const driver = databaseDrivers[db]

  if(!driver){
    throw new Error(`Database "${db}" not supported`)
  }
  const ormLib = availableOrm[orm]

  if (!ormLib) {
    throw new Error(`ORM "${orm}" not supported`)
  }

  if (orm === "prisma") {
    return `npm install prisma @prisma/client ${driver}`
  }

  return `npm install ${ormLib} ${driver}`
}