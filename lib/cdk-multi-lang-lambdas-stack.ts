import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { PythonFunction } from '@aws-cdk/aws-lambda-python';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';

export class CdkMultiLangLambdasStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const python_lambda = new PythonFunction(this, 'Lambda', {
      entry: 'lambda-fns/python3/', // required
      index: 'index.py', // optional, defaults to 'index.py'
      handler: 'handler', // optional, defaults to 'handler'
      runtime: lambda.Runtime.PYTHON_3_8, // optional, defaults to lambda.Runtime.PYTHON_3_7
    }); // more details at https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-python-readme.html

    const node_lambda = new NodejsFunction(this, 'Lambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      entry: 'lambda-fns/nodejs/index.ts',
      handler: 'handler',
    }); // more details at https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html
  }
}
