const pizzas = require("../data/pizzas.json");

const handler= async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(pizzas),
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
  };
};

exports.handler = handler;
