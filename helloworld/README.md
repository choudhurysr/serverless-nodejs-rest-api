# Overview
* A Serverless Nodejs Project 
* Create a Helloworld Lambda 
* Deploy as Rest API on AWS API Gateway


# Get Code and Deploy
* `git clone https://github.com/choudhurysr/serverless-nodejs.git`

* `cd helloworld`

* Run `serverless deploy`

* Note endpoints from output.Replace *** with correct value from output.
  `GET - https://***.execute-api.us-east-1.amazonaws.com/dev/hello`


# Run and Test
* Run API from Postman `https://***.execute-api.us-east-1.amazonaws.com/dev/hello`
* Check AWS CloudWatch Logs
* Make changes to handler function
* Redeploy specific function: `serverless deploy --function hello`
* Check AWS CloudWatch Logs
