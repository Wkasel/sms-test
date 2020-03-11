const { renderPlaygroundPage } = require("graphql-playground-html");

const playground = options => {
  return (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const playground = renderPlaygroundPage(options);
    res.write(playground);
    res.end();
  };
};

module.exports = { playground };
