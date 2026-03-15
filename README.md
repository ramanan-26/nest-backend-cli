# backend-cli
# Create Nest App CLI

Create Nest App CLI

Usage:
  create-nest-app <project-name> [options]

Options:
  --db=<database>     Database to install
                      Supported: mysql, postgres, sqlite

  --orm=<orm>         ORM to install
                      Supported: typeorm, prisma, mongoose

  -h, --help          Show help message

Examples:
  create-nest-app blog-api
  create-nest-app blog-api --db=mysql
  create-nest-app blog-api --db=postgres --orm=typeorm
  create-nest-app blog-api --db=postgres --orm=prisma
  
## Tech Stack
* Node.js

## Future Improvements
* Interactive CLI prompts
* Authentication module generation
* Swagger setup
* Environment file generation
