import { Context, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import pino = require('pino');
const ecsFormat = require('@elastic/ecs-pino-format');

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const log = pino(ecsFormat());

export const handler = (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2> => {
  log.info(JSON.stringify(event));
  log.info(JSON.stringify(context));

  return new Promise((resolve, reject) => {
    if (event) {
      resolve({ statusCode: 200, body: 'hello from containerized node' });
    } else {
      reject({ statusCode: 500, body: 'something went wrong' });
    }
  });
};
