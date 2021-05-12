sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
    "sap/ui/core/mvc/XMLView"

], function (Button, MessageToast, XMLView) {
	"use strict";
    
    XMLView.create({viewName: "Quickstart.App"}).then(function (oView){
        oView.placeAt("content")
    });

    //  introduce a proper XML view to separate the presentation from the controller logic. 
    //  We prefix the view name Quickstart.App with our newly defined namespace. The view is loaded asynchronously.

	new Button({
		text: "Ready...",
		press: function () {
			MessageToast.show("Hello World!");
		}
	}).placeAt("content");

});


// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
// 	"use strict";

// 	XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
// 		oView.placeAt("content");
// 	});
// });