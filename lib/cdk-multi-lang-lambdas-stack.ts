import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as logs from '@aws-cdk/aws-logs';
import { PythonFunction } from '@aws-cdk/aws-lambda-python';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';

export class CdkMultiLangLambdasStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const python_lambda = new PythonFunction(this, 'PyLambda', {
      entry: 'lambda-fns/python3/', // required
      index: 'index.py', // optional, defaults to 'index.py'
      handler: 'handler', // optional, defaults to 'handler'
      runtime: lambda.Runtime.PYTHON_3_8, // optional, defaults to lambda.Runtime.PYTHON_3_7
      timeout: cdk.Duration.seconds(120),
      tracing: lambda.Tracing.ACTIVE,
      logRetention: logs.RetentionDays.ONE_MONTH,
    }); // more details at https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-python-readme.html

    const pyFuncIntegration = new LambdaProxyIntegration({
      handler: python_lambda,
    });

    const node_lambda = new NodejsFunction(this, 'NodeLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      entry: 'lambda-fns/nodejs/index.js', //note the function is written in typescript but the lambda must call the compiled javascript
      handler: 'handler',
      timeout: cdk.Duration.seconds(120),
      tracing: lambda.Tracing.ACTIVE,
      logRetention: logs.RetentionDays.ONE_MONTH,
      bundling: {
        minify: true,
      },
    }); // more details at https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html

    const nodeFuncIntegration = new LambdaProxyIntegration({
      handler: node_lambda,
    });

    const container_lambda = new lambda.DockerImageFunction(this, 'ContainerLambda', {
      code: lambda.DockerImageCode.fromImageAsset('lambda-fns/container'),
    }); // more details at https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html#docker-images

    const containerFuncIntegration = new LambdaProxyIntegration({
      handler: container_lambda,
    });

    const httpApi = new HttpApi(this, 'HttpApi');
    // more details at https://docs.aws.amazon.com/cdk/api/latest/docs/aws-apigatewayv2-readme.html
    httpApi.addRoutes({
      path: '/python',
      methods: [HttpMethod.GET],
      integration: pyFuncIntegration,
    });
    httpApi.addRoutes({
      path: '/nodejs',
      methods: [HttpMethod.GET],
      integration: nodeFuncIntegration,
    });
    httpApi.addRoutes({
      path: '/container',
      methods: [HttpMethod.GET],
      integration: containerFuncIntegration,
    });

    new cdk.CfnOutput(this, 'HTTP API Url', {
      value: httpApi.url ?? 'Something went wrong with the deploy',
    });
  }
}
