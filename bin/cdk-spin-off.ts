#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkSpinOffStack } from '../lib/cdk-spin-off-stack';

const app = new cdk.App();
new CdkSpinOffStack(app, 'CdkSpinOffStack');
