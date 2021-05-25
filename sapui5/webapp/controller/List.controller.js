sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.btp.sapui5.controller.List",{
        handleListItemPress: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
            //get router object
            var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
            //get the product's ID clicked on through the context from the event
            oRouter.navTo("detail", {
                productId: selectedProductId
            }); // navigate to new view
        }
    })
});