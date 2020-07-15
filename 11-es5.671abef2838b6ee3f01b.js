function _createForOfIteratorHelper(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=_unsupportedIterableToArray(n))){var t=0,e=function(){};return{s:e,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,a=!0,i=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return a=n.done,n},e:function(n){i=!0,r=n},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw r}}}}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,t):void 0}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{vuQK:function(n,t,e){"use strict";e.r(t),e.d(t,"SearchModule",(function(){return T}));var o=e("2kYt"),r=e("PCNd"),a=e("sEIs"),i=e("nIj0"),c=e("pKmL"),s=e("lFFm"),g=e("EM62"),d=e("29Wa"),l=e("bFHC"),p=e("Cd2c"),h=e("wzew"),_=e("s2Ay");function u(n,t){if(1&n){var e=g.Ub();g.Tb(0,"input",8),g.bc("keyup",(function(n){return g.uc(e),g.fc().onSearchKeyUp(n)}))("ngModelChange",(function(n){return g.uc(e),g.fc().searchQuery=n})),g.gc(1,"async"),g.Sb()}if(2&n){var o=t.ngIf,r=g.fc();g.mc("placeholder","Type a word here to search ",o.length," ",g.hc(1,3,r.language$)," words."),g.lc("ngModel",r.searchQuery)}}function M(n,t){if(1&n&&(g.Tb(0,"div",14),g.Tb(1,"div",15),g.Tb(2,"h4",16),g.Cc(3),g.gc(4,"translate"),g.Sb(),g.Pb(5,"mtd-entry-list",17),g.Sb(),g.Sb()),2&n){var e=g.fc(2);g.Bb(3),g.Dc(g.hc(4,5,"mtd.pages.search.matches")),g.Bb(2),g.lc("entries",e.matches)("searchTerm",e.searchQuery)("threshold",e.matchThreshold)("shouldHighlight",!0)}}function f(n,t){if(1&n&&(g.Tb(0,"div",18),g.Tb(1,"div",15),g.Tb(2,"h4",16),g.Cc(3),g.gc(4,"translate"),g.Sb(),g.Pb(5,"mtd-entry-list",17),g.Sb(),g.Sb()),2&n){var e=g.fc(2);g.Bb(3),g.Dc(g.hc(4,5,"mtd.pages.search.partial-matches")),g.Bb(2),g.lc("entries",e.partMatches)("searchTerm",e.searchQuery)("threshold",e.partialThreshold)("shouldHighlight",!0)}}function C(n,t){if(1&n&&(g.Tb(0,"div",19),g.Tb(1,"div",15),g.Tb(2,"h4",16),g.Cc(3),g.gc(4,"translate"),g.Sb(),g.Pb(5,"mtd-entry-list",17),g.Sb(),g.Sb()),2&n){var e=g.fc(2);g.Bb(3),g.Dc(g.hc(4,5,"mtd.pages.search.maybe-matches")),g.Bb(2),g.lc("entries",e.maybeMatches)("searchTerm",e.searchQuery)("threshold",e.maybeThreshold)("shouldHighlight",!0)}}var O=function(n){return{value:n}};function P(n,t){if(1&n&&(g.Tb(0,"h5"),g.Cc(1),g.gc(2,"translate"),g.Sb()),2&n){var e=g.fc(3);g.Bb(1),g.Ec(" ",g.ic(2,1,"mtd.pages.search.no-results",g.oc(4,O,e.searchQuery)),"")}}function m(n,t){if(1&n&&(g.Tb(0,"div",20),g.Bc(1,P,3,6,"h5",7),g.Sb()),2&n){var e=g.fc(2);g.Bb(1),g.lc("ngIf",e.searchQuery)}}function b(n,t){if(1&n&&(g.Tb(0,"div"),g.Tb(1,"div",9),g.Bc(2,M,6,7,"div",10),g.Bc(3,f,6,7,"div",11),g.Bc(4,C,6,7,"div",12),g.Bc(5,m,2,1,"div",13),g.Sb(),g.Sb()),2&n){var e=g.fc();g.Bb(2),g.lc("ngIf",e.matches.length>0),g.Bb(1),g.lc("ngIf",e.partMatches.length>0),g.Bb(1),g.lc("ngIf",e.maybeMatches.length>0),g.Bb(1),g.lc("ngIf",0===e.matches.length&&0===e.partMatches.length&&0===e.maybeMatches.length&&e.searchQuery)}}var x,v,w,y=[{path:"",component:(x=function(){function n(t){_classCallCheck(this,n),this.mtdService=t,this.matches=[],this.partMatches=[],this.maybeMatches=[],this.matchThreshold=0,this.partialThreshold=1,this.maybeThreshold=2,this.approxWeight=1,this.searchQuery="",this.placeholder="Type a word here",this.routeAnimationsElements=c.e,this.entries$=this.mtdService.dataDict$,this.searchControl=new i.c,this.language$=this.mtdService.name$}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.entries$.subscribe((function(t){return n.entries=t}))}},{key:"getRegex",value:function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"definition",o=[],r=_createForOfIteratorHelper(this.entries);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.test(a[e])&&o.push(a)}}catch(i){r.e(i)}finally{r.f()}return o.sort((function(n,t){return n[e].length-t[e].length})).slice(0,9)}},{key:"getRegexFromSlug",value:function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"word",o=[],r=_createForOfIteratorHelper(this.entries);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.test(Object(s.slugify)(a[e]))&&o.push(a)}}catch(i){r.e(i)}finally{r.f()}return o.sort((function(n,t){return n[e].length-t[e].length})).slice(0,9)}},{key:"onSearchKeyUp",value:function(n){this.getResults(n.target.value)}},{key:"filterMatches",value:function(n){var t=this;return n.filter((function(n){return n.distance<=t.matchThreshold}))}},{key:"filterPartMatches",value:function(n){var t=this;return n.filter((function(n){return n.distance<=t.partialThreshold&&n.distance>t.matchThreshold}))}},{key:"filterMaybeMatches",value:function(n){var t=this;return n.filter((function(n){return t.maybeThreshold&&n.distance>t.partialThreshold}))}},{key:"getL2",value:function(n,t){var e,o=[],r=new RegExp(n,"i"),a=_createForOfIteratorHelper(t);try{for(a.s();!(e=a.n()).done;){var i=e.value;r.test(i.definition)&&o.push(i)}}catch(c){a.e(c)}finally{a.f()}return o.sort((function(n,t){return n.definition.length-t.definition.length})).slice(0,9)}},{key:"getResults",value:function(n){var t=this;if(n.length>1){var e=window.mtd.convertQuery(n),o=new RegExp("(\\s|^){1}".concat(n,"(?=([;.?!\\s]|$))"),"i"),r=this.getRegex(o,"word"),a=this.getRegex(o),i=new RegExp("(\\s|^){1}(".concat(n,")\\S|\\S(").concat(n,")(\\s|^){1}|\\S(").concat(n,")\\S"),"i"),c=this.getRegex(i,"word"),s=this.getRegex(i),g=this.getRegexFromSlug(new RegExp(i.source+"|"+o.source,"i")),d=window.searchL1(e),l=[],p=[],h=[],_=[];(function(){var n,e=_createForOfIteratorHelper(r);try{for(e.s();!(n=e.n()).done;){var o=n.value;o.type="L1",o.distance=t.matchThreshold,l.push(o)}}catch(a){e.e(a)}finally{e.f()}})(),function(){var n,e=_createForOfIteratorHelper(a);try{for(e.s();!(n=e.n()).done;){var o=n.value;o.type="L2",o.distance=t.matchThreshold,l.push(o)}}catch(r){e.e(r)}finally{e.f()}}(),function(){var n,e=_createForOfIteratorHelper(c.concat(g));try{for(e.s();!(n=e.n()).done;){var o=n.value;o.type="L1",o.distance=t.partialThreshold,l.push(o)}}catch(r){e.e(r)}finally{e.f()}}(),function(){var n,e=_createForOfIteratorHelper(s);try{for(e.s();!(n=e.n()).done;){var o=n.value;o.type="L2",o.distance=t.partialThreshold,l.push(o)}}catch(r){e.e(r)}finally{e.f()}}(),function(){var n,e=_createForOfIteratorHelper(d);try{var o=function(){var e=n.value,o=e[1];o.type="L1";var r=l.findIndex((function(n){return n.word===o.word&&n.definition==n.definition}));-1===r?l.push(o):"distance"in l[r]&&l[r].distance>e[0]&&(l[r].distance=e[0]+t.approxWeight)};for(e.s();!(n=e.n()).done;)o()}catch(r){e.e(r)}finally{e.f()}}(),l=l.filter((function(n,t,e){return e.findIndex((function(t){return t.word===n.word&&t.definition===n.definition}))===t})),function(){var n,e=_createForOfIteratorHelper(l);try{for(e.s();!(n=e.n()).done;){var o=n.value;"distance"in o?o.distance===t.matchThreshold?p.push(o):"distance"in o&&o.distance<=t.partialThreshold&&o.distance>t.matchThreshold?h.push(o):o.distance<=t.maybeThreshold&&o.distance>t.partialThreshold&&_.push(o):p.push(o)}}catch(r){e.e(r)}finally{e.f()}}(),this.matches=p,this.partMatches=h,this.maybeMatches=_}}}]),n}(),x.\u0275fac=function(n){return new(n||x)(g.Ob(c.d))},x.\u0275cmp=g.Ib({type:x,selectors:[["mtd-search"]],decls:10,vars:6,consts:[[1,"background"],[1,"gradient"],[1,"page__content","page__content--center","container"],[1,"search__bar__container",3,"ngClass"],[1,"search__bar"],["matPrefix","",1,"search__icon",3,"inline"],["autocomplete","off","type","text","aria-label","Number","matInput","",3,"placeholder","ngModel","keyup","ngModelChange",4,"ngIf"],[4,"ngIf"],["autocomplete","off","type","text","aria-label","Number","matInput","",3,"placeholder","ngModel","keyup","ngModelChange"],[1,"search__results"],["class","search__results--matches",4,"ngIf"],["class","search__results--partMatches",4,"ngIf"],["class","search__results--maybeMatches",4,"ngIf"],["class","search__results--none search__results__container",4,"ngIf"],[1,"search__results--matches"],[1,"search__results__container"],[1,"search__results__title"],[3,"entries","searchTerm","threshold","shouldHighlight"],[1,"search__results--partMatches"],[1,"search__results--maybeMatches"],[1,"search__results--none","search__results__container"]],template:function(n,t){1&n&&(g.Tb(0,"div",0),g.Tb(1,"div",1),g.Tb(2,"div",2),g.Tb(3,"div",3),g.Tb(4,"mat-form-field",4),g.Tb(5,"mat-icon",5),g.Cc(6,"search"),g.Sb(),g.Bc(7,u,2,5,"input",6),g.gc(8,"async"),g.Sb(),g.Sb(),g.Bc(9,b,6,4,"div",7),g.Sb(),g.Sb(),g.Sb()),2&n&&(g.Bb(3),g.lc("ngClass",t.routeAnimationsElements),g.Bb(2),g.lc("inline",!0),g.Bb(2),g.lc("ngIf",g.hc(8,4,t.entries$)),g.Bb(2),g.lc("ngIf",t.searchQuery&&t.entries))},directives:[o.i,d.a,l.a,d.f,o.k,p.b,i.b,i.i,i.k,h.a],pipes:[o.b,_.c],styles:[".search__icon[_ngcontent-%COMP%]{font-size:small;top:5px;right:0;margin-right:5px}.search__bar[_ngcontent-%COMP%]{margin:0 auto;width:500px}.search__bar__container[_ngcontent-%COMP%]{text-align:center;padding:0 20px;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.search__results[_ngcontent-%COMP%]{margin:40px auto}.search__results__title[_ngcontent-%COMP%]{padding:20px;text-align:center}.search__results--none[_ngcontent-%COMP%]{text-align:center;padding:10px}",".page__content[_ngcontent-%COMP%]{min-height:calc(100vh - 208px)}.theme-wrapper[_ngcontent-%COMP%]{height:100%;width:100%}.centered[_ngcontent-%COMP%]{text-align:center;margin:0 auto}.entry-list-container[_ngcontent-%COMP%], .results[_ngcontent-%COMP%], .search__results[_ngcontent-%COMP%]{max-height:45vh;overflow-y:auto;width:70%;max-width:53.125em;margin:5vh auto 9.375em;border-radius:.3125em}mat-sidenav-container[_ngcontent-%COMP%]{height:100%;width:100%}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;width:100%;display:flex;z-index:10}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]{margin:0 10px 0 0}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:24px}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]{cursor:pointer;overflow:hidden;padding-top:4px;text-overflow:ellipsis}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding.center[_ngcontent-%COMP%]{text-align:center}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;top:-2px;width:48px;height:48px}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]{margin-right:10px}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{margin:0 0 0 20px;width:40px;font-size:14px}@media (max-width:992px){mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%]{min-width:0;padding:0 10px}}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:1 0 auto;margin-top:64px;overflow:hidden}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{flex:0 0 auto;padding:0 15px;text-align:center}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{padding:10px 0}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:padding .5s;display:inline-block;padding:20px 5px}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:30px;width:35px}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:75px;padding:0 0 0 3px;overflow:hidden;text-align:left;white-space:nowrap;transition:width .5s}@media (min-width:992px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 10px}}@media (max-width:768px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:0;padding:0}}@media (max-width:576px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 5px}}@media (min-width:576px){mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]{position:relative}mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;right:15px}}@media (max-width:600px){mat-sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:56px!important}}mat-sidenav[_ngcontent-%COMP%]{width:250px}mat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]{height:64px;padding:8px 10px;font-size:20px;font-weight:500}mat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:48px;margin:2px 10px 0 0}mat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:3px}mat-sidenav[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]{padding-top:0}.copyright-link[_ngcontent-%COMP%]{position:relative!important;margin-left:15px}",'h1[_ngcontent-%COMP%]{text-align:center;font-size:3em}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{font-size:1.5em}.background[_ngcontent-%COMP%]{padding:80px 0 0;position:relative}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{text-align:center;margin:50px;z-index:1}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-weight:700;padding:20px 10px 30px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 5px 10px 0}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.actions-main[_ngcontent-%COMP%]{text-transform:uppercase;padding:3px 24px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:1px}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{max-width:700px;margin:50px auto;letter-spacing:.01px;overflow-wrap:break-word;z-index:1;overflow:hidden}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:.9em;display:inline-block;word-wrap:break-word;white-space:normal;margin:0 0 10px}.background[_ngcontent-%COMP%]:before{top:0;background:url(intro.e80aa3482ddc7cead285.jpg) no-repeat top;background-size:cover}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before, .background[_ngcontent-%COMP%]:before{position:absolute;left:0;bottom:0;right:0;content:"";z-index:0}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{top:51%}.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative}.follow-releases[_ngcontent-%COMP%]{max-width:700px;margin:0 auto 60px}.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:40px}.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-bottom:3px solid}.follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:80%;margin:20px auto 0;border-radius:5px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.contributors[_ngcontent-%COMP%]{max-width:700px;margin:0 auto 60px}.contributors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-bottom:3px solid}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:8px;width:100px;display:inline-block;text-align:center}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:10px 0 0;line-height:16px}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;width:100px;border:5px solid;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@media (max-width:768px){.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin:50px 0}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%], .follow-releases[_ngcontent-%COMP%]{width:auto}.follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}}@media (max-width:576px){.background[_ngcontent-%COMP%]{padding:40px 0 0}.background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1em}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin:40px 0 0}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:10px 0 20px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{width:auto;margin:40px auto}.follow-releases[_ngcontent-%COMP%]{margin:0 auto 40px}}.contributor[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:medium}div.row.contributor[_ngcontent-%COMP%]{margin:25px}img.bio[_ngcontent-%COMP%]{width:100%;max-width:250px;height:auto;-o-object-fit:cover;object-fit:cover}img[_ngcontent-%COMP%]{border-radius:50%;border:3px solid;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.img__container[_ngcontent-%COMP%]{width:250px;min-width:250px;margin-left:auto;margin-right:auto}@media only screen and (max-width:500px){#about__page[_ngcontent-%COMP%]{width:100%!important;margin:0!important}}@media only screen and (max-width:1300px){#about__page[_ngcontent-%COMP%]{margin-left:10vw;margin-right:10vw}}@media only screen and (max-width:1900px){#about__page[_ngcontent-%COMP%]{margin-left:15vw;margin-right:15vw}}hr[_ngcontent-%COMP%]{width:100%;margin-top:50px}.content__container[_ngcontent-%COMP%]{padding:35px 20px;border-radius:15px}'],changeDetection:0}),x),data:{title:"mtd.menu.search"}}],k=((w=function n(){_classCallCheck(this,n)}).\u0275mod=g.Mb({type:w}),w.\u0275inj=g.Lb({factory:function(n){return new(n||w)},imports:[[a.k.forChild(y)],a.k]}),w),T=((v=function n(){_classCallCheck(this,n)}).\u0275mod=g.Mb({type:v}),v.\u0275inj=g.Lb({factory:function(n){return new(n||v)},imports:[[o.c,r.a,k]]}),v)}}]);