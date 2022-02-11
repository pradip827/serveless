const responseHelper = require("../helper/responseHelper").responseHelper;
const sendRsp = require("../Services/productService");

//*********Insert  *************/
const insertControl = async (req, res) => {
  try {
    const data = {
      product_id: req.body.product_id,
      product_name: req.body.product_name,
      Product_discription: req.body.Product_discription,
      product_rating: req.body.product_rating,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      is_active: req.body.is_active,
    };
    console.log(data);
    var a = await sendRsp.insertSe(data, (result, err) => {
      if (err) {
        throw err;
      }
      return result;
    });

    responseHelper(res.status(200).send({ success: 1, response: a }));
  } catch (error) {
    res.status(500).send(error);
  }
};
//*********Delete  *************/

const deleteControl = async (req, res) => {
  try {
    const data = {
      id: req.query.id,
    };
    console.log("hello", data.name);

    console.log(data);
    const deletea = await sendRsp.deleteSe(
      {
        _id: data.id,
      },
      (err, result) => {
        if (err) {
          throw err;
        }
        return result;
      }
    );
    responseHelper(
      res.status(200).send({ response: deletea, message: "deleted" })
    );
  } catch (err) {
    console.log(err);
    responseHelper(res.status(500).send({ err: "error" }));
  }
};

//*********Update  *************/
const updateControl = async (req, res) => {
  try {
    const data = req.params.id;

    const info = {
      product_name: req.body.product_name,
      Product_discription: req.body.Product_discription,
      product_rating: req.body.product_rating,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      is_active: req.body.is_active,
    };
    console.log(info);
    // var info={$set:{req.body}}
    const product = await sendRsp.updateSe(data, info, (result, err) => {
      if (err) {
        throw err;
      }

      return result;
    });
    responseHelper(res.status(200).send({ product, message: "hello" }));
  } catch (err) {
    responseHelper(res.status(500).send({ err, message: "bye" }));
  }
};

//*********find All  *************/
const findAllControl = async (req, res) => {
  try {
    let resp = await sendRsp.findAllSe({}, (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    });
    responseHelper(res.status(200).send({ success: 1, data: resp }));
  } catch (err) {
    return responseHelper(res.status(500).send({ success: 0, err }));
  }
};

module.exports = {
  insertControl,
  deleteControl,
  updateControl,
  findAllControl,
};
