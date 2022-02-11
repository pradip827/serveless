module.exports.responseHelper = async (res, statusCode, msg, output) => {
  console.log("response");
  var api = {
      status_code: 200,
      message: "Success",
    },
    response = {
      data: [],
    };
  res.status(statusCode).json({ api, response });
};

/* api: {
    status_code:200,
    message: 'Success'
    },
    response:{
    data: []
    }
    } */
