sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("Quickstart.App", {
		onPress : function () {
			MessageToast.show("Hello UI5!");
			this.byId("app").to(this.byId("intro"));
			// find the <App id=app> and find <Page id=intro>
		},

		// lifecycle hook that is called automatically when the controller is initialized.
		onInit : function () {

            // set data model on view
            var oData = {
                recipient : {
                name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
                // a simple JSON model with some texts located at the features key.
                // We display these texts on the second page using data binding
                this.getView().setModel(new JSONModel({
                        features: [
                            "Enterprise-Ready Web Toolkit",
                            "Powerful Development Concepts",
                            "Feature-Rich UI Controls",
                            "Consistent User Experience",
                            "Free and Open Source",
                            "Responsive Across Browsers and Devices"
                        ]
                    })
                );
        },

        onChange: function (oEvent) {
            var bState = oEvent.getParameter("state");
            this.byId("ready").setVisible(bState);
        },

        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        }

	});

});