import * as cdk from '@aws-cdk/core';
import { GenericPythonApp } from './python-app';
export class CdkMultiLangLambdasStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new GenericPythonApp(this, 'App', { apigw: 'wat' });
  }
}
