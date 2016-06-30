System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var SesionService;
    function utf8_to_b64(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            SesionService = (function () {
                //Constructor
                function SesionService(http) {
                    this.http = http;
                    //Variables
                    this.isLogged = false;
                    this.isAdmin = false;
                    this.reqIsLogged();
                }
                //Metodos
                SesionService.prototype.getSesion = function () {
                    return Promise.resolve(this.user);
                };
                SesionService.prototype.setSesion = function (actual) {
                    this.actual = actual;
                };
                SesionService.prototype.reqIsLogged = function () {
                    var _this = this;
                    var headers = new http_1.Headers({
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get('logIn', options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
                        if (error.status != 401) {
                            console.error("Error when asking if logged: " + JSON.stringify(error));
                        }
                    });
                };
                SesionService.prototype.getLogged = function () {
                    return this.isLogged;
                };
                SesionService.prototype.processLogInResponse = function (response) {
                    this.isLogged = true;
                    this.user = response.json();
                    this.isAdmin = this.user.roles.indexOf("ROLE_ADMIN") !== -1;
                };
                SesionService.prototype.logIn = function (user, pass) {
                    var _this = this;
                    var userPass = user + ":" + pass;
                    var headers = new http_1.Headers({
                        'Authorization': 'Basic ' + utf8_to_b64(userPass),
                        'X-Requested-With': 'XMLHttpRequest'
                    });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.get('logIn', options).map(function (response) {
                        _this.processLogInResponse(response);
                        return _this.user;
                    });
                };
                SesionService.prototype.logOut = function () {
                    var _this = this;
                    return this.http.get('logOut').map(function (response) {
                        _this.isLogged = false;
                        _this.isAdmin = false;
                        return response;
                    });
                };
                SesionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SesionService);
                return SesionService;
            }());
            exports_1("SesionService", SesionService);
        }
    }
});
//# sourceMappingURL=sesion.service.js.map