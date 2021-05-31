import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { PythonFunction } from '@aws-cdk/aws-lambda-python';

export class CdkMultiLangLambdasStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const python_lambda = new PythonFunction(this, 'MyFunction', {
      entry: 'lambda-fns/python3/',       // required
      index: 'index.py',                  // optional, defaults to 'index.py'
      handler: 'handler',                 // optional, defaults to 'handler'
      runtime: lambda.Runtime.PYTHON_3_8, // optional, defaults to lambda.Runtime.PYTHON_3_7
    });                                   // more details at https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-python-readme.html
  }
}
