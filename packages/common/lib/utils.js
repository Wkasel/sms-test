/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable-next-line function-paren-newline */
module.exports = {
  debug: (args) => {
    console.log('debug output');
    console.log('-------------');

    Object.entries(args).map(([k, v]) =>
      console.log(`${k} => ${JSON.stringify(v)}`)
    );

    console.log('--------------');
  },
};
