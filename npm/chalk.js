const  chalk = require('chalk');

console.log(chalk.bgYellow(chalk.red('Warning!...')))
const error = chalk.red.inverse.bold('Error!...')
console.log(error)
console.log(chalk.bgGreen('Success Message!...'))