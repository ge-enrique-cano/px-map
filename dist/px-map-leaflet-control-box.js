'use strict';L.Control.ControlBox=L.Control.extend({options:{position:'topright',content:'',className:'',autoOpen:true},initialize:function initialize(options){L.setOptions(this,options);this.controlContainer=L.DomUtil.create('div');this.controlContainer.className=this.options.className;this.controlContainer.innerHTML=this.options.content;this._isVisible=true;if(this.options.autoOpen){this.openBox()}else{this.closeBox()}L.DomEvent.disableScrollPropagation(this.controlContainer)},onAdd:function onAdd(map){return this.controlContainer},onRemove:function onRemove(map){},setContent:function setContent(stringifiedHTML){if(this.controlContainer){this._content=stringifiedHTML;this._updateContent()}},_updateContent:function _updateContent(){if(!this._content||!this.controlContainer)return;this.controlContainer.innerHTML=this._content},getContainerElement:function getContainerElement(){if(!this.controlContainer)return null;return this.controlContainer},openBox:function openBox(){if(!this._isVisible&&this.controlContainer&&this._containerElIsHidden()===true){L.DomUtil.removeClass(this.controlContainer,'visuallyhidden')}this._isVisible=true},closeBox:function closeBox(){if(this._isVisible&&this.controlContainer&&this._containerElIsHidden()===false){L.DomUtil.addClass(this.controlContainer,'visuallyhidden')}this._isVisible=false},isOpen:function isOpen(){if(!this.controlContainer)return null;return this._isVisible},_containerElIsHidden:function _containerElIsHidden(){if(!this.controlContainer)return null;return L.DomUtil.hasClass(this.controlContainer,'visuallyhidden')}});L.Control.controlBox=function(options){return new L.Control.ControlBox(options)};
//# sourceMappingURL=px-map-leaflet-control-box.js.map
