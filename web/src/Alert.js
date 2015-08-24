"use strict";

// module Alert

exports.alert = function(msg) {
    return function() {
        window.alert(msg);
        return {};
    };
};
