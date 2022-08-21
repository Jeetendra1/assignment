const Db = require("../models");

const fetchAllProducts = async (req, res) => {
  try {
    const allProducts = await Db.product.findAll({
      where: {
        deletedDate: {
          [Db.Sequelize.Op.is]: null,
        },
      },
    });
    if (allProducts && allProducts.length !== 0) {
      return res.status(200).send(allProducts);
    }
    return res.status(404).send("Prodcts are not available");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.msg);
  }
};

const fetchSingleProduct = async (req, res) => {
  try {
    const getSingleProductDetails = await Db.product.findOne({
      where: {
        id: req.params.productId,
      },
      attributes: { exclude: ["isDeleted", "updatedAt", "deletedDate"] },
    });
    if (getSingleProductDetails) {
      return res.status(200).send(getSingleProductDetails);
    }
    return res.status(404).send("Prodcts are not available");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.msg);
  }
};

const UpdateProductViewed = async (req, res) => {
  try {
    const getProductViewed = await Db.product.findOne({
      where: {
        id: req.params.productId,
      },
      attributes: ["productViewed"],
    });
    if (getProductViewed) {
      const totalProductViewed = getProductViewed.productViewed + 1;
      const updateProductViewed = await Db.product.update(
        {
          productViewed: totalProductViewed,
        },
        {
          where: {
            id: req.params.productId,
          },
        }
      );
      if (updateProductViewed) {
        return res.status(200).send(true);
      }
    }
    return res.status(404).send(false);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.msg);
  }
};

const fetchMostViewProductsList = async (req, res) => {
  try {
    const allProducts = await Db.product.findAll({
      order: [["productViewed", "DESC"]],
      where: {
        productViewed: {
          [Db.Sequelize.Op.gte]: 3,
        },
        deletedDate: {
          [Db.Sequelize.Op.is]: null,
        },
      },
    });
    if (allProducts && allProducts.length !== 0) {
      return res.status(200).send(allProducts);
    }
    return res.status(404).send("Prodcts are not available");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.msg);
  }
};

module.exports = {
  fetchAllProducts,
  fetchSingleProduct,
  UpdateProductViewed,
  fetchMostViewProductsList,
};
