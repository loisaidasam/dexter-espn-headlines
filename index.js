// Imports
var request = require('request');

module.exports = {
    /**
     * The main entry point for the Dexter module
     *
     * @param {AppStep} step Accessor for the configuration for the step using this module.  Use step.input('{key}') to retrieve input data.
     * @param {AppData} dexter Container for all data used in this workflow.
     */
    run: function(step, dexter) {
        var self = this;
        request('http://samsandberg.com/espn/headlines.json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                var headlines = data.headlines;
                var headlinesStr = "";
                for (var i in headlines) {
                    headlinesStr += headlines[i] + "\n";
                }
                self.complete({headlines: headlinesStr});
            }
        });
    }
};
