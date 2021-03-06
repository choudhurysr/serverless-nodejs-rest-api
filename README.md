# Serverless Nodejs Project for building Rest API
* Contains a set of Nodejs Lambda Functions
    * Helloworld Lambda
    * Product Lambdas that perform CRUD operations on a DynamoDB Table
* Lambdas will be triggered by http event
* serverless.yml contains specification for lambdas
* Serverless Framework (https://www.serverless.com/) is used for deploying lambdas as Rest API on AWS API Gateway


# What is Serverless?
* A method of providing backend services on an as-used basis
* Write and deploy code without worrying about the underlying infrastructure
* Physical servers are used but developers do not need to be aware of them
* Charges are based on usage
* Do not have to reserve and pay for a fixed amount of bandwidth or number of servers
* Services auto-scale based on load


# Prerequisites
* Ensure Node is installed and check version using: `node -v`
* Check npm version: `npm -v`
* Install serverless using: `npm install serverless -g` Check version: `serverless -v`
* Setup AWS Account
* Setup AWS IAM User with Admin privileges
* Install awscli and check version: `aws --version`
* Run `aws configure` to update AWS IAM User access_key, secret_key, region
* Check using: `aws configure list`
* Update AWS access_key, secret_key in OS PATH variables


# Clone and Deploy
* `git clone https://github.com/choudhurysr/serverless-nodejs-rest-api.git`
* `npm install`
* `serverless deploy`



# Run and Test
* Note endpoints from `serverless deploy` output. 
* Replace *** in below URI with correct value from above output.
* Run API from Postman
  Helloworld
  ```
    curl --location --request GET 'https://***.execute-api.us-east-1.amazonaws.com/dev/hello'
  ```

  Add Product:
  ```
    curl --location --request POST 'https://***.execute-api.us-east-1.amazonaws.com/dev/products' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "productName": "product3",
        "productDesc": "productDesc3"
    }'
  ```

  List Products:
  ```
    curl --location --request GET 'https://***.execute-api.us-east-1.amazonaws.com/dev/products'
  ```

  Get a Product:
  ```
    curl --location --request GET 'https://***.execute-api.us-east-1.amazonaws.com/dev/products/{id}'
  ```

  Update a Product:
  ```
    curl --location --request PUT 'https://***.execute-api.us-east-1.amazonaws.com/dev/products/{id}' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "productName": "product4",
        "productDesc": "productDesc4"
    }'
  ```
    
  Delete a Product:
  ```
    curl --location --request DELETE 'https://***.execute-api.us-east-1.amazonaws.com/dev/products/{id}'
  ```
  
* Check AWS CloudWatch Logs
* Make changes to lambda function
* Redeploy specific function: `serverless deploy --function <function-name>`
* Check AWS CloudWatch Logs
