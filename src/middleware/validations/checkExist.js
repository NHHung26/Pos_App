const { User } = require("../../models");

const checkExist = (Model) => {
  return async (req, res, next) => {
    const id = req.params.id;
    const check = await Model.findOne({
      where: { id: id },
    });
    if (check) {
      next();
    } else {
      if (Model == User) {
        res.status(500).send(`Not found id ${id}`);
      }
    }
  };
};

module.exports = {
  checkExist,
};
