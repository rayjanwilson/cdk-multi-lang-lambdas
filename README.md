# CDK Multilanguage Lambdas Demo

Just a simple demonstrator on having a cdk based microservice app that has lambdas from different languages.

## Prerequirement

- Docker installed
- VS Code or similar ide
- nodejs installed, preverably via [nvm](https://github.com/nvm-sh/nvm)

## Things added from base cdk init

- `npm run deploy` added this script to `package.json`
- typescript linter and formatter with eslint and prettier
- lambda types with `@types/aws-lambda`

## Lambdas

- demonstrates
  - using a pipfile for dependency installation at build time
    - [cdk python lambda docs](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-python-readme.html)
  - using a package.jsoon for dependency installation at build time
    - [cdk nodejs lambda docs](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html)
  - using [structured logging](https://www.structlog.org/en/stable/why.html)
    - [ecs format](https://www.elastic.co/blog/introducing-the-elastic-common-schema)

## Useful commands

 * `npm run deploy`  build and deploy this stack to your default AWS account/region
 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
