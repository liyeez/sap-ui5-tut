sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Button",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.btp.sapui5.controller.View1", {
			onInit: function () {
            },
            
            // onBeforeRendering: function(){
            //     window.message = "a random log mesg";
            //     Log.info(window.message);
            // },

            // onAfterRendering: function (){
            //     debugger;
            // },

            onPressList: function (event) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("list");
            },

            onPressPeople: function (event) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("people");
            }
		});
	});
