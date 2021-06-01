import { Context, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import * as pino from 'pino';
const ecsFormat = require('@elastic/ecs-pino-format');

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const log = pino(ecsFormat());

const handler = (event: APIGatewayProxyEventV2, context: Context): APIGatewayProxyResultV2 => {
  log.info(JSON.stringify(event));
  log.info(JSON.stringify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({
      event,
    }),
  };
};

export { handler };
