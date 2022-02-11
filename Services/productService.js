
const productModel = require("../Module/ProductModule");

// *********************************Insert *************************************************
(module.exports.insertSe = async (data, callback) => {
  try {
    let create = await productModel.create(data);

    return callback(create);
  } catch (err) {
    return "error";
  }
}),
// *********************************Find all *************************************************
  (module.exports.findAllSe = async () => {
    try {
      var a = await productModel.find({});

      return a;
    } catch (err) {
      return "err";
    }
  }),
// *********************************Delete *************************************************
  (module.exports.deleteSe = async (data) => {
    try {
      console.log(data);
      var delet = await productModel.deleteOne(data);
      console.log(delet);
      return delet;
    } catch (err) {
      return "error";
    }
  }),

  // *********************************Update*************************************************
  module.exports.updateSe=async(data,info) =>{
    try{
        console.log(data)
        var updt= await productModel.updateOne({_id:data},{$set:info});
        console.log(updt)
        return updt

    }
    catch(err){
      return err
    }
  }
