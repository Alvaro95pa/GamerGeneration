import { ADMIN } from './mock-admin';
import { Injectable } from 'angular2/core';

@Injectable()
export class AdminService {
  getAdmin() {
    return ADMIN;
  }
}
