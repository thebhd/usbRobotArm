var armServerURL = 'http://localhost:14275';
var xhttp = new XMLHttpRequest();
function makeRequest(url, callbackF){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // this code will execute on completion of request cFunction(this);
          // - add later the ability to parse error repsonse 
          callbackF(this);
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();

};
(function (ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function () { };

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    // update this to check if usb is presant
    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' };
    };

    ext.lighton = function () {
        // Code that gets executed when the block is run
        var url = armServerURL + '/lighton'
        makeRequest(url);
        
    };
    ext.lightoff = function () {
        // Code that gets executed when the block is run
        var url = armServerURL + '/lightoff'
        makeRequest(url);
    };

    ext.gripopen = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/gripopen//' + tm
        makeRequest(url, callback);
        
    };
    ext.gripclose = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/gripclose//' + tm 
        makeRequest(url, callback);
    };

    ext.rotatecw = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/rotatecw//' + tm
        makeRequest(url, callback);
        
    };
    ext.rotateccw = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/rotateccw//' + tm 
        makeRequest(url, callback);
    };

    ext.shoulderup = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/shoulderup//' + tm
        makeRequest(url, callback);
        
    };
    ext.shoulderdown = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/shoulderdown//' + tm 
        makeRequest(url, callback);
    };
    
    ext.elbowup = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/elbowup//' + tm
        makeRequest(url, callback);
        
    };
    ext.elbowdown = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/elbowdown//' + tm 
        makeRequest(url, callback);
    };

    ext.wristup = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/wristup//' + tm
        makeRequest(url, callback);
        
    };
    ext.wristdown = function (tm, callback) {
        // Code that gets executed when the block is run
        var url = armServerURL + '/wristdown//' + tm 
        makeRequest(url, callback);
    };

    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
             ["w", "Rotate clock-wise for %n second(s)", "rotatecw", 1],
             ["w", "Rotate anti clock-wise for %n second(s)", "rotateccw", 1],

             ["w", "Shoulder up for %n second(s)", "shoulderup", 1],
             ["w", "Shoulder down for %n second(s)", "shoulderdown", 1],

             ["w", "Elbow up for %n second(s)", "elbowup", 1],
             ["w", "Elbow down for %n second(s)", "elbowdown", 1],

             ["w", "Wrist up for %n second(s)", "wristup", 1],
             ["w", "Wrist down for %n second(s)", "wristdown", 1],

             ["w", "Grip close for %n second(s)", "gripopen", 0.5],
             ["w", "Grip open for %n second(s)", "gripclose", 0.5],

            [" ", "Light ON", "lighton"],
            [" ", "Light OFF", "lightoff"]
        ],
        url:'file:///usr/lib/scratch2/scratch_extensions/usbArmHelp.html',
        displayName: 'USB Robot Arm'
    };

    // Register the extension
    ScratchExtensions.register('Robot Arm', descriptor, ext);
})({});