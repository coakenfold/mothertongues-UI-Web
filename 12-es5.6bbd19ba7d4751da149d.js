function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yPrK:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",(function(){return x}));var c=n("2kYt"),a=n("PCNd"),i=n("sEIs"),o=n("sN6X"),l=n("pKmL"),s=n("BnVf"),r=n("EMFo"),b=n("EM62"),g=n("bFHC"),m=n("Pq5H"),d=n("29Wa"),f=n("k8N0"),u=n("R7+U"),h=n("nIj0"),p=n("mFH5"),v=n("Y2X+"),T=n("s2Ay");function S(e,t){if(1&e&&(b.Tb(0,"mat-option",22),b.Cc(1),b.Sb()),2&e){var n=t.$implicit,c=b.fc().$implicit;b.lc("value",c.value)("title",n!==c.label?n:""),b.Bb(1),b.Ec(" ",c.label," ")}}var C=function(e){return[e]};function k(e,t){if(1&e&&(b.Rb(0),b.Bc(1,S,2,3,"mat-option",21),b.gc(2,"translate"),b.Qb()),2&e){var n=t.$implicit;b.Bb(1),b.lc("ngForOf",b.oc(3,C,b.hc(2,1,"mtd.settings.general.language."+n.value)))}}function B(e,t){if(1&e){var n=b.Ub();b.Tb(0,"div",6),b.Tb(1,"mat-icon",7),b.Pb(2,"fa-icon",18),b.Sb(),b.Tb(3,"mat-form-field"),b.Tb(4,"mat-select",19),b.bc("selectionChange",(function(e){return b.uc(n),b.fc(2).onLanguageSelect(e)})),b.gc(5,"translate"),b.Bc(6,k,3,5,"ng-container",20),b.Sb(),b.Sb(),b.Sb()}if(2&e){var c=b.fc().ngIf,a=b.fc();b.Bb(4),b.lc("placeholder",b.hc(5,3,"mtd.settings.general.placeholder"))("ngModel",c.language),b.Bb(2),b.lc("ngForOf",a.languages)}}function E(e,t){if(1&e&&(b.Tb(0,"mat-option",23),b.Cc(1),b.gc(2,"translate"),b.Sb()),2&e){var n=t.$implicit;b.lc("value",n.value),b.Bb(1),b.Ec(" ",b.hc(2,2,"mtd.settings.themes."+n.label)," ")}}function P(e,t){1&e&&b.Pb(0,"mat-slide-toggle",24)}function y(e,t){if(1&e){var n=b.Ub();b.Tb(0,"mat-slide-toggle",9),b.bc("change",(function(e){return b.uc(n),b.fc(2).onPageAnimationsToggle(e)})),b.Sb()}if(2&e){var c=b.fc().ngIf;b.lc("checked",c.pageAnimations)}}function M(e,t){if(1&e){var n=b.Ub();b.Rb(0),b.Tb(1,"div",1),b.Tb(2,"div",4),b.Tb(3,"h2"),b.Cc(4),b.gc(5,"translate"),b.Sb(),b.Bc(6,B,7,5,"div",5),b.Tb(7,"div",6),b.Tb(8,"mat-icon",7),b.Pb(9,"fa-icon",8),b.Sb(),b.Tb(10,"mat-placeholder"),b.Cc(11),b.gc(12,"translate"),b.Sb(),b.Tb(13,"mat-slide-toggle",9),b.bc("change",(function(e){return b.uc(n),b.fc().onStickyHeaderToggle(e)})),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(14,"div",1),b.Tb(15,"div",4),b.Tb(16,"h2"),b.Cc(17),b.gc(18,"translate"),b.Sb(),b.Tb(19,"div",6),b.Tb(20,"mat-icon",7),b.Pb(21,"fa-icon",10),b.Sb(),b.Tb(22,"mat-form-field"),b.Tb(23,"mat-select",11),b.bc("selectionChange",(function(e){return b.uc(n),b.fc().onThemeSelect(e)})),b.gc(24,"translate"),b.Bc(25,E,3,4,"mat-option",12),b.Sb(),b.Sb(),b.Sb(),b.Tb(26,"div",6),b.Tb(27,"mat-icon",7),b.Pb(28,"fa-icon",13),b.Sb(),b.Tb(29,"mat-placeholder"),b.Cc(30),b.gc(31,"translate"),b.Sb(),b.Tb(32,"mat-slide-toggle",9),b.bc("change",(function(e){return b.uc(n),b.fc().onAutoNightModeToggle(e)})),b.Sb(),b.Sb(),b.Sb(),b.Tb(33,"div",4),b.Tb(34,"h2"),b.Cc(35),b.gc(36,"translate"),b.Sb(),b.Tb(37,"div",6),b.Tb(38,"mat-icon",7),b.Tb(39,"mat-icon",7),b.Pb(40,"fa-icon",14),b.Sb(),b.Sb(),b.Tb(41,"mat-placeholder"),b.Cc(42),b.gc(43,"translate"),b.Sb(),b.Bc(44,P,1,0,"mat-slide-toggle",15),b.Bc(45,y,1,1,"mat-slide-toggle",16),b.Sb(),b.Tb(46,"div",6),b.Tb(47,"mat-icon",7),b.Pb(48,"fa-icon",17),b.Sb(),b.Tb(49,"mat-placeholder"),b.Cc(50),b.gc(51,"translate"),b.Sb(),b.Tb(52,"mat-slide-toggle",9),b.bc("change",(function(e){return b.uc(n),b.fc().onElementsAnimationsToggle(e)})),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Qb()}if(2&e){var c=t.ngIf,a=b.fc();b.Bb(2),b.lc("ngClass",a.routeAnimationsElements),b.Bb(2),b.Dc(b.hc(5,19,"mtd.settings.general.title")),b.Bb(2),b.lc("ngIf",a.languages.length>1),b.Bb(5),b.Ec("",b.hc(12,21,"mtd.settings.themes.sticky-header")," "),b.Bb(2),b.lc("checked",c.stickyHeader),b.Bb(2),b.lc("ngClass",a.routeAnimationsElements),b.Bb(2),b.Dc(b.hc(18,23,"mtd.settings.themes.title")),b.Bb(6),b.lc("placeholder",b.hc(24,25,"mtd.settings.themes.placeholder"))("ngModel",c.theme),b.Bb(2),b.lc("ngForOf",a.themes),b.Bb(5),b.Ec("",b.hc(31,27,"mtd.settings.themes.night-mode")," "),b.Bb(2),b.lc("checked",c.autoNightMode),b.Bb(1),b.lc("ngClass",a.routeAnimationsElements),b.Bb(2),b.Dc(b.hc(36,29,"mtd.settings.animations.title")),b.Bb(7),b.Ec("",b.hc(43,31,"mtd.settings.animations.page")," "),b.Bb(2),b.lc("ngIf",c.pageAnimationsDisabled),b.Bb(1),b.lc("ngIf",!c.pageAnimationsDisabled),b.Bb(5),b.Ec("",b.hc(51,33,"mtd.settings.animations.elements")," "),b.Bb(2),b.lc("checked",c.elementsAnimations)}}var O,A,_,I=[{path:"",component:(O=function(){function e(t){_classCallCheck(this,e),this.store=t,this.routeAnimationsElements=l.e,this.themes=[{value:"DEFAULT-THEME",label:"blue"},{value:"LIGHT-THEME",label:"light"},{value:"NATURE-THEME",label:"nature"},{value:"BLACK-THEME",label:"dark"}],this.languages=[{value:"en",label:"English"}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.settings$=this.store.pipe(Object(o.t)(r.d))}},{key:"onLanguageSelect",value:function(e){var t=e.value;this.store.dispatch(Object(s.f)({language:t}))}},{key:"onThemeSelect",value:function(e){var t=e.value;this.store.dispatch(Object(s.h)({theme:t}))}},{key:"onAutoNightModeToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(s.d)({autoNightMode:t}))}},{key:"onStickyHeaderToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(s.g)({stickyHeader:t}))}},{key:"onPageAnimationsToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(s.b)({pageAnimations:t}))}},{key:"onElementsAnimationsToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(s.a)({elementsAnimations:t}))}}]),e}(),O.\u0275fac=function(e){return new(e||O)(b.Ob(o.h))},O.\u0275cmp=b.Ib({type:O,selectors:[["mtd-settings"]],decls:9,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"col-md-6","group",3,"ngClass"],["class","icon-form-field",4,"ngIf"],[1,"icon-form-field"],["color","accent"],["icon","bars","color","accent"],[3,"checked","change"],["icon","paint-brush","color","accent"],["name","themes",3,"placeholder","ngModel","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["icon","lightbulb","color","accent"],["icon","window-maximize"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled","",4,"ngIf"],[3,"checked","change",4,"ngIf"],["icon","stream","color","accent"],["icon","language","color","accent"],["name","language",3,"placeholder","ngModel","selectionChange"],[4,"ngFor","ngForOf"],[3,"value","title",4,"ngFor","ngForOf"],[3,"value","title"],[3,"value"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled",""]],template:function(e,t){1&e&&(b.Tb(0,"div",0),b.Tb(1,"div",1),b.Tb(2,"div",2),b.Tb(3,"h1"),b.Cc(4),b.gc(5,"translate"),b.Sb(),b.Sb(),b.Sb(),b.Pb(6,"br"),b.Bc(7,M,53,35,"ng-container",3),b.gc(8,"async"),b.Sb()),2&e&&(b.Bb(4),b.Dc(b.hc(5,2,"mtd.settings.title")),b.Bb(3),b.lc("ngIf",b.hc(8,4,t.settings$)))},directives:[c.k,c.i,g.a,m.a,d.e,f.a,d.a,u.a,h.i,h.k,c.j,p.l,v.a],pipes:[T.c,c.b],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}"],changeDetection:0}),O),data:{title:"mtd.menu.settings"}}],w=((_=function e(){_classCallCheck(this,e)}).\u0275mod=b.Mb({type:_}),_.\u0275inj=b.Lb({factory:function(e){return new(e||_)},imports:[[i.k.forChild(I)],i.k]}),_),x=((A=function e(){_classCallCheck(this,e)}).\u0275mod=b.Mb({type:A}),A.\u0275inj=b.Lb({factory:function(e){return new(e||A)},imports:[[c.c,a.a,w]]}),A)}}]);