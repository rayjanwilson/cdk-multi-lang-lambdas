import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { PythonFunction } from '@aws-cdk/aws-lambda-python';

export interface Props {
  apigw: string; // will have to be the apigw
}

export class GenericPythonApp extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: Props) {
    super(scope, id);
    new PythonFunction(this, 'MyFunction', {
      entry: 'lambda-fns/python3/', // required
      index: 'index.py', // optional, defaults to 'index.py'
      handler: 'handler', // optional, defaults to 'handler'
      runtime: lambda.Runtime.PYTHON_3_8, // optional, defaults to lambda.Runtime.PYTHON_3_7
    });
  }
}
