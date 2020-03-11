module.exports = {
  debug: args => {
    console.log("debug output");
    console.log("-------------");
    Object.entries(args).map(([k, v]) =>
      console.log(`${k} => ${JSON.stringify(v)}`)
    );
    console.log("--------------");
  }
};
