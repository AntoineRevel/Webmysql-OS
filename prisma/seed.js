const { PrismaClient } = require('@prisma/client')
const { price } = require('./data.js')
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.priceETH.deleteMany()
    //console.log('Deleted records in category table')

    //await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`
    //console.log('reset category auto increment to 1')

    


  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
