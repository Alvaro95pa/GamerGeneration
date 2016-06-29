System.register(['angular2/core', 'ng2-bootstrap/ng2-bootstrap', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1, common_1;
    var Calendario;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Calendario = (function () {
                function Calendario() {
                    this.dt = new Date();
                    this.minDate = void 0;
                    this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
                    this.format = this.formats[0];
                    this.dateOptions = {
                        formatYear: 'YY',
                        startingDay: 1
                    };
                    this.opened = false;
                    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
                    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
                    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
                    this.events = [
                        { date: this.tomorrow, status: 'full' },
                        { date: this.afterTomorrow, status: 'partially' }
                    ];
                }
                Calendario.prototype.getDate = function () {
                    return this.dt && this.dt.getTime() || new Date().getTime();
                };
                Calendario.prototype.today = function () {
                    this.dt = new Date();
                };
                // todo: implement custom class cases
                Calendario.prototype.getDayClass = function (date, mode) {
                    if (mode === 'day') {
                        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
                        for (var i = 0; i < this.events.length; i++) {
                            var currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
                            if (dayToCheck === currentDay) {
                                return this.events[i].status;
                            }
                        }
                    }
                    return '';
                };
                Calendario.prototype.disabled = function (date, mode) {
                    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
                };
                Calendario.prototype.open = function () {
                    this.opened = !this.opened;
                };
                Calendario.prototype.clear = function () {
                    this.dt = void 0;
                };
                Calendario.prototype.toggleMin = function () {
                    this.dt = new Date(this.minDate.valueOf());
                };
                Calendario = __decorate([
                    core_1.Component({
                        selector: 'calendario',
                        templateUrl: 'app/calendario.component.html',
                        directives: [ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Calendario);
                return Calendario;
            }());
            exports_1("Calendario", Calendario);
        }
    }
});
//# sourceMappingURL=calendario.component.js.map