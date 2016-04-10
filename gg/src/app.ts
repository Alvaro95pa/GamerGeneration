import {bootstrap} from 'angular2/platform/browser';
import {GgApp} from './app/gg';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(GgApp, [
  ROUTER_PROVIDERS
]);
