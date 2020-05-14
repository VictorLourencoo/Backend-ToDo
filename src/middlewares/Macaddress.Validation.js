const MacaddressValidation = (req, res, next) => {
  if (!req.body.macaddress) {
    return res.status(400).json({ error: 'campo de mac vazio' });
  } else {
    next();
  }
};
module.exports = MacaddressValidation;
