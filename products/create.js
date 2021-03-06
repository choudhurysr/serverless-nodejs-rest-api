'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

// DocumentClient allows the use of native JavaScript types instead of AttributeValues 
// for easier JavaScript development with Amazon DynamoDB.
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.productName !== 'string' || typeof data.productDesc !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create the product item.'));
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      productName: data.productName,
      productDesc: data.productDesc,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the product to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create the product item.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};