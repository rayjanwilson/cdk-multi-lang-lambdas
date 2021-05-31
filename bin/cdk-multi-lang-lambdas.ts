#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkMultiLangLambdasStack } from '../lib/cdk-multi-lang-lambdas-stack';

const app = new cdk.App();
new CdkMultiLangLambdasStack(app, 'CdkMultiLangLambdasStack');
