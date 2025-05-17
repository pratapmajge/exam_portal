const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  try {
    const result = await db
      .get({
        TableName: "message", // name of your DynamoDB table
        Key: { id: "company" }, // primary key
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: result.Item?.text || "No message found",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch message",
        details: error.message,
      }),
    };
  }
};
