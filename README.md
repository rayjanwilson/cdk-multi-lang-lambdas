# CDK Multilanguage Lambdas Demo

Just a simple demonstrator on having a cdk based microservice app that has lambdas from different languages.

## Prerequirement

- Docker installed
- VS Code or similar ide
- nodejs installed, preverably via [nvm](https://github.com/nvm-sh/nvm)

## Things added from base cdk init

- `npm run deploy` added this script to `package.json`
- typescript linter with eslint
- lambda types with `@types/aws-lambda`

## Lambdas

- demonstrates using a pipfile for dependency installation at build time
  - [cdk python lambda docs](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-python-readme.html)


## Useful commands

 * `npm run deploy`  build and deploy this stack to your default AWS account/region
 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
