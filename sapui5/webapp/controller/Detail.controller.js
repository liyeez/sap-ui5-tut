sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict";

    return Controller.extend("sap.btp.sapui5.controller.Detail", {
        onInit: function (){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachMatched(this._onRouteMatch, this);
        },

        _onRouteMatch: function (oEvent) {
            var oArgs, oView;
            //product id passed by list controller
            oArgs = oEvent.getParameter("arguments");
            //get the view from this context (detail.xml)
            oView = this.getView();
        
            oView.bindElement({
                path: "/Products(" + oArgs.productId + ")",
                events: {
                    dataRequested: function ( ){
                        oView.setBusy(true);
                    },
                    dataReceived: function () {
                        oView.setBusy(false);
                    } 
                }
            });
        },

        handleNavButtonPress: function (event) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home");
        }

    });
});