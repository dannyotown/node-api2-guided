module.exports = () => (req, res, next) => {
  console.log(
    `${req.protocol} - ${req.method} - ${req.url} - ${req.get("User-Agent")} `
  );
  next();
};
