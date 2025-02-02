/**
* @module SDK Index
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MTI 2016 Jonathan Casarrubias
* @description
* The SDK Index is automatically built by the LoopBack SDK Builder.
*
* The SDK Index will temporally keep providing access to everything in the SDK
* including services. This is because will maintain backwards compatibility for those
* Applications below Angular 2 RC 5 version that does not support NgModule just yet.
*
* IMPORTANT NOTE:
*
* If your application is equal or above RC 5 It is recommended to import the SDK
* Module located in ./sdk.module.ts and follow the instructions.
*
* Also, It is recommended for you to start upgrading your application in order to 
* support NgModules before backwards support is also dropped by Angular.
*
* READ: https://angular.io/docs/ts/latest/cookbook/rc4-to-rc5.html#!#5-cleanup
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { AccountApi } from './services/custom/Account';
import { TargetApi } from './services/custom/Target';
/**
* IMPORTANT: API_PROVIDERS WILL BE DEPRECATED WHEN ANGULAR 2 IS STABLE
* PLEASE MIGRATE YOUR PROJECT AS SOON AS POSSIBLE.
* ONCE ANGULAR 2 IS STABLE I WON'T KEEP SUPPORTING API PROVIDERS.
* USER NGMODULE INSTEAD LOCATED IN ./sdk.module.ts
**/
export const API_PROVIDERS: any[] = [
  LoopBackAuth,
  ErrorHandler,
  LoggerService,
  JSONSearchParams,
  AccountApi,
  TargetApi
];
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './sdk.module';
export * from './sockets/index';
