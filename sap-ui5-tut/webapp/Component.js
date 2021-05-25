sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("", {

      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
      }
   });
});

// Component.js file in the webapp folder that will hold our application setup.