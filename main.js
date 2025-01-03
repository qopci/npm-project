import lodash from 'lodash';
import chalk from 'chalk';

// Lodash Package Usage
// INSTALL: npm i lodash
const array = [1, 4, 2, 3, 1, 4, 5, 2, 3, 2, 1];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);

// Chalk Package Usage (Terminal String Color Picker)
// INSTALL: npm i chalk
console.log(chalk.blueBright("Hello, with chalk!"));