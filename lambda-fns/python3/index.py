import json
from structlog import get_logger

log = get_logger()

def handler(event, context):
    log.info(event)
    return {
        'statusCode': 200,
        'body': json.dumps('hello from lambda')
    }