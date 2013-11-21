getInstallationId = function (successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        'org.apache.cordova.core.ParsePlugin',
        'getInstallationId',
        []
    );
}
