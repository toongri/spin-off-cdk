#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkSpinOffStack } from '../lib/cdk-spin-off-stack';
import {IamRoleStack} from "../lib/iam-role-stack";

const app = new cdk.App();
new IamRoleStack(app, 'IamRoleStack');
