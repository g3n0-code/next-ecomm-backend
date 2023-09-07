import prisma from "./utils/prisma.js"

async function main() {
  prisma.user.create({
    data: {
      name: 'John',
      email: 'john@example.com',
      password: 'insecure',
    },
  }).then(user => {
    console.log(user)
  }).catch(e => {
    console.log(e.message)
  })
}

main()