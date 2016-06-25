System.register(['angular2/core', './clases'], function(exports_1, context_1) {
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
    var core_1, clases_1;
    var comentarioscomponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (clases_1_1) {
                clases_1 = clases_1_1;
            }],
        execute: function() {
            comentarioscomponent = (function () {
                function comentarioscomponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', clases_1.comentario)
                ], comentarioscomponent.prototype, "comentario", void 0);
                comentarioscomponent = __decorate([
                    core_1.Component({
                        selector: 'comentarios',
                        template: "\n  <article class=\"col-md-12 col-xs-12 comentarios\">\n    <header class=\"col-md-2 col-xs-2\">\n      <dl>\n        <dd><img src={{comentario.user_img}}></dd>\n        <dd><a>{{comentario.user}}</a></dd>\n      </dl>\n    </header>\n    <time class=\"col-md-10 col-xs-10 fecha\">{{comentario.fecha}}</time>\n    <p class=\"col-md-9 col-xs-8\">{{comentario.mensaje}}</p>\n    <div *ngIf=\"comentario.idjuego!=0\" class=\"col-md-1 col-xs-12 puntuacion\"><span>{{comentario.puntuacion}}</span></div>\n  </article>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], comentarioscomponent);
                return comentarioscomponent;
            }());
            exports_1("comentarioscomponent", comentarioscomponent);
        }
    }
});
//# sourceMappingURL=comentarios.component.js.map