(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5kg2":function(t,e,n){"use strict";n.d(e,"b",function(){return E}),n.d(e,"e",function(){return x}),n.d(e,"c",function(){return w}),n.d(e,"a",function(){return S}),n.d(e,"d",function(){return k}),n.d(e,"f",function(){return A}),n.d(e,"h",function(){return P}),n.d(e,"g",function(){return j});var i=n("LoAr"),o=n("abkR"),s=n("fQLH"),r=n("LR82"),u=n("gQst"),a=n("pN2L"),c=n("c1xn"),h=(n("qpXW"),n("D57K")),p=n("0xYh"),l=n("LYzL"),m=n("HfXx"),_=n("rh80"),f=n("W/Ou"),b=n("AouM"),d=n("G2Mx"),y=n("z5yO"),g=n("mhnT"),v=n("pday"),M=n("eXL1"),O=n("WV+C"),P=new i.s("MAT_MENU_PANEL"),C=function(){return function(){}}(),k=function(t){function e(e,n,i,o){var r=t.call(this)||this;return r._elementRef=e,r._focusMonitor=i,r._parentMenu=o,r.role="menuitem",r._hovered=new s.a,r._highlighted=!1,r._triggersSubmenu=!1,i&&i.monitor(r._elementRef,!1),o&&o.addItem&&o.addItem(r),r._document=n,r}return Object(h.__extends)(e,t),e.prototype.focus=function(t){void 0===t&&(t="program"),this._focusMonitor?this._focusMonitor.focusVia(this._getHostElement(),t):this._getHostElement().focus()},e.prototype.ngOnDestroy=function(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete()},e.prototype._getTabIndex=function(){return this.disabled?"-1":"0"},e.prototype._getHostElement=function(){return this._elementRef.nativeElement},e.prototype._checkDisabled=function(t){this.disabled&&(t.preventDefault(),t.stopPropagation())},e.prototype._handleMouseEnter=function(){this._hovered.next(this)},e.prototype.getLabel=function(){var t=this._elementRef.nativeElement,e=this._document?this._document.TEXT_NODE:3,n="";if(t.childNodes)for(var i=t.childNodes.length,o=0;o<i;o++)t.childNodes[o].nodeType===e&&(n+=t.childNodes[o].textContent);return n.trim()},e}(Object(l.F)(Object(l.G)(C))),S=new i.s("mat-menu-default-options",{providedIn:"root",factory:function(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}}),w=function(){function t(t,e,n){this._elementRef=t,this._ngZone=e,this._defaultOptions=n,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._items=[],this._itemChanges=new s.a,this._tabSubscription=r.a.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new s.a,this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new i.o,this.close=this.closed}return Object.defineProperty(t.prototype,"xPosition",{get:function(){return this._xPosition},set:function(t){"before"!==t&&"after"!==t&&function(){throw Error('xPosition value must be either \'before\' or after\'.\n      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>')}(),this._xPosition=t,this.setPositionClasses()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"yPosition",{get:function(){return this._yPosition},set:function(t){"above"!==t&&"below"!==t&&function(){throw Error('yPosition value must be either \'above\' or below\'.\n      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>')}(),this._yPosition=t,this.setPositionClasses()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"overlapTrigger",{get:function(){return this._overlapTrigger},set:function(t){this._overlapTrigger=Object(m.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasBackdrop",{get:function(){return this._hasBackdrop},set:function(t){this._hasBackdrop=Object(m.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"panelClass",{set:function(t){var e=this,n=this._previousPanelClass;n&&n.length&&n.split(" ").forEach(function(t){e._classList[t]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(function(t){e._classList[t]=!0}),this._elementRef.nativeElement.className="")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classList",{get:function(){return this.panelClass},set:function(t){this.panelClass=t},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this.setPositionClasses()},t.prototype.ngAfterContentInit=function(){var t=this;this._keyManager=new p.g(this._items).withWrap().withTypeAhead(),this._tabSubscription=this._keyManager.tabOut.subscribe(function(){return t.closed.emit("tab")})},t.prototype.ngOnDestroy=function(){this._tabSubscription.unsubscribe(),this.closed.complete()},t.prototype._hovered=function(){return this._itemChanges.pipe(Object(f.a)(this._items),Object(b.a)(function(t){return u.a.apply(void 0,t.map(function(t){return t._hovered}))}))},t.prototype._handleKeydown=function(t){var e=t.keyCode,n=this._keyManager;switch(e){case _.g:this.closed.emit("keydown");break;case _.i:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case _.m:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;case _.h:case _.e:Object(_.s)(t)||(e===_.h?n.setFirstItemActive():n.setLastItemActive(),t.preventDefault());break;default:e!==_.p&&e!==_.d||n.setFocusOrigin("keyboard"),n.onKeydown(t)}},t.prototype.focusFirstItem=function(t){var e=this;void 0===t&&(t="program"),this.lazyContent?this._ngZone.onStable.asObservable().pipe(Object(d.a)(1)).subscribe(function(){return e._keyManager.setFocusOrigin(t).setFirstItemActive()}):this._keyManager.setFocusOrigin(t).setFirstItemActive()},t.prototype.resetActiveItem=function(){this._keyManager.setActiveItem(-1)},t.prototype.setElevation=function(t){var e="mat-elevation-z"+(4+t),n=Object.keys(this._classList).find(function(t){return t.startsWith("mat-elevation-z")});n&&n!==this._previousElevation||(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[e]=!0,this._previousElevation=e)},t.prototype.addItem=function(t){-1===this._items.indexOf(t)&&(this._items.push(t),this._itemChanges.next(this._items))},t.prototype.removeItem=function(t){var e=this._items.indexOf(t);this._items.indexOf(t)>-1&&(this._items.splice(e,1),this._itemChanges.next(this._items))},t.prototype.setPositionClasses=function(t,e){void 0===t&&(t=this.xPosition),void 0===e&&(e=this.yPosition);var n=this._classList;n["mat-menu-before"]="before"===t,n["mat-menu-after"]="after"===t,n["mat-menu-above"]="above"===e,n["mat-menu-below"]="below"===e},t.prototype._startAnimation=function(){this._panelAnimationState="enter"},t.prototype._resetAnimation=function(){this._panelAnimationState="void"},t.prototype._onAnimationDone=function(t){this._animationDone.next(t),this._isAnimating=!1},t.prototype._onAnimationStart=function(t){this._isAnimating=!0,"enter"===t.toState&&0===this._keyManager.activeItemIndex&&(t.element.scrollTop=0)},t}(),E=new i.s("mat-menu-scroll-strategy");function j(t){return function(){return t.scrollStrategies.reposition()}}var I=Object(O.f)({passive:!0}),A=function(){function t(t,e,n,o,s,u,a,c){var h=this;this._overlay=t,this._element=e,this._viewContainerRef=n,this._parentMenu=s,this._menuItemInstance=u,this._dir=a,this._focusMonitor=c,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=r.a.EMPTY,this._hoverSubscription=r.a.EMPTY,this._menuCloseSubscription=r.a.EMPTY,this._handleTouchStart=function(){return h._openedBy="touch"},this._openedBy=null,this.restoreFocus=!0,this.menuOpened=new i.o,this.onMenuOpen=this.menuOpened,this.menuClosed=new i.o,this.onMenuClose=this.menuClosed,e.nativeElement.addEventListener("touchstart",this._handleTouchStart,I),u&&(u._triggersSubmenu=this.triggersSubmenu()),this._scrollStrategy=o}return Object.defineProperty(t.prototype,"_deprecatedMatMenuTriggerFor",{get:function(){return this.menu},set:function(t){this.menu=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"menu",{get:function(){return this._menu},set:function(t){var e=this;t!==this._menu&&(this._menu=t,this._menuCloseSubscription.unsubscribe(),t&&(this._menuCloseSubscription=t.close.asObservable().subscribe(function(t){e._destroyMenu(),"click"!==t&&"tab"!==t||!e._parentMenu||e._parentMenu.closed.emit(t)})))},enumerable:!0,configurable:!0}),t.prototype.ngAfterContentInit=function(){this._checkMenu(),this._handleHover()},t.prototype.ngOnDestroy=function(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,I),this._cleanUpSubscriptions(),this._closingActionsSubscription.unsubscribe()},Object.defineProperty(t.prototype,"menuOpen",{get:function(){return this._menuOpen},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dir",{get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"},enumerable:!0,configurable:!0}),t.prototype.triggersSubmenu=function(){return!(!this._menuItemInstance||!this._parentMenu)},t.prototype.toggleMenu=function(){return this._menuOpen?this.closeMenu():this.openMenu()},t.prototype.openMenu=function(){var t=this;if(!this._menuOpen){this._checkMenu();var e=this._createOverlay(),n=e.getConfig();this._setPosition(n.positionStrategy),n.hasBackdrop=null==this.menu.hasBackdrop?!this.triggersSubmenu():this.menu.hasBackdrop,e.attach(this._getPortal()),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(function(){return t.closeMenu()}),this._initMenu(),this.menu instanceof w&&this.menu._startAnimation()}},t.prototype.closeMenu=function(){this.menu.close.emit()},t.prototype.focus=function(t){void 0===t&&(t="program"),this._focusMonitor?this._focusMonitor.focusVia(this._element,t):this._element.nativeElement.focus()},t.prototype._destroyMenu=function(){var t=this;if(this._overlayRef&&this.menuOpen){var e=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),e instanceof w?(e._resetAnimation(),e.lazyContent?e._animationDone.pipe(Object(y.a)(function(t){return"void"===t.toState}),Object(d.a)(1),Object(g.a)(e.lazyContent._attached)).subscribe(function(){return e.lazyContent.detach()},void 0,function(){t._resetMenu()}):this._resetMenu()):(this._resetMenu(),e.lazyContent&&e.lazyContent.detach())}},t.prototype._initMenu=function(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this._setIsMenuOpen(!0),this.menu.focusFirstItem(this._openedBy||"program")},t.prototype._setMenuElevation=function(){if(this.menu.setElevation){for(var t=0,e=this.menu.parentMenu;e;)t++,e=e.parentMenu;this.menu.setElevation(t)}},t.prototype._resetMenu=function(){this._setIsMenuOpen(!1),this.restoreFocus&&(this._openedBy?this.triggersSubmenu()||this.focus(this._openedBy):this.focus()),this._openedBy=null},t.prototype._setIsMenuOpen=function(t){this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&(this._menuItemInstance._highlighted=t)},t.prototype._checkMenu=function(){this.menu||function(){throw Error('matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu="matMenu"></mat-menu>\n      <button [matMenuTriggerFor]="menu"></button>')}()},t.prototype._createOverlay=function(){if(!this._overlayRef){var t=this._getOverlayConfig();this._subscribeToPositions(t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef},t.prototype._getOverlayConfig=function(){return new M.d({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn(".mat-menu-panel"),backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",scrollStrategy:this._scrollStrategy(),direction:this._dir})},t.prototype._subscribeToPositions=function(t){var e=this;this.menu.setPositionClasses&&t.positionChanges.subscribe(function(t){e.menu.setPositionClasses("start"===t.connectionPair.overlayX?"after":"before","top"===t.connectionPair.overlayY?"below":"above")})},t.prototype._setPosition=function(t){var e="before"===this.menu.xPosition?["end","start"]:["start","end"],n=e[0],i=e[1],o="above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],s=o[0],r=o[1],u=[s,r],a=u[0],c=u[1],h=[n,i],p=h[0],l=h[1],m=0;this.triggersSubmenu()?(l=n="before"===this.menu.xPosition?"start":"end",i=p="end"===n?"start":"end",m="bottom"===s?8:-8):this.menu.overlapTrigger||(a="top"===s?"bottom":"top",c="top"===r?"bottom":"top"),t.withPositions([{originX:n,originY:a,overlayX:p,overlayY:s,offsetY:m},{originX:i,originY:a,overlayX:l,overlayY:s,offsetY:m},{originX:n,originY:c,overlayX:p,overlayY:r,offsetY:-m},{originX:i,originY:c,overlayX:l,overlayY:r,offsetY:-m}])},t.prototype._cleanUpSubscriptions=function(){this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()},t.prototype._menuClosingActions=function(){var t=this,e=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMenu?this._parentMenu.closed:Object(a.a)(),o=this._parentMenu?this._parentMenu._hovered().pipe(Object(y.a)(function(e){return e!==t._menuItemInstance}),Object(y.a)(function(){return t._menuOpen})):Object(a.a)();return Object(u.a)(e,i,o,n)},t.prototype._handleMousedown=function(t){Object(p.k)(t)||(this._openedBy=0===t.button?"mouse":null,this.triggersSubmenu()&&t.preventDefault())},t.prototype._handleKeydown=function(t){var e=t.keyCode;this.triggersSubmenu()&&(e===_.m&&"ltr"===this.dir||e===_.i&&"rtl"===this.dir)&&this.openMenu()},t.prototype._handleClick=function(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()},t.prototype._handleHover=function(){var t=this;this.triggersSubmenu()&&(this._hoverSubscription=this._parentMenu._hovered().pipe(Object(y.a)(function(e){return e===t._menuItemInstance&&!e.disabled}),Object(v.a)(0,c.a)).subscribe(function(){t._openedBy="mouse",t.menu instanceof w&&t.menu._isAnimating?t.menu._animationDone.pipe(Object(d.a)(1),Object(v.a)(0,c.a),Object(g.a)(t._parentMenu._hovered())).subscribe(function(){return t.openMenu()}):t.openMenu()}))},t.prototype._getPortal=function(){return this._portal&&this._portal.templateRef===this.menu.templateRef||(this._portal=new o.h(this.menu.templateRef,this._viewContainerRef)),this._portal},t}(),x=function(){return function(){}}()}}]);