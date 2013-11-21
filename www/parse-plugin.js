var parsePlugin = {
	getInstallationId: function(successCallback, errorCallback) {
		cordova.exec(
			successCallback,
			errorCallback,
			'org.apache.cordova.parseplugin.ParsePlugin',
			'getInstallationId',
			[]
		);
	}
}
