/*
 * all this does is it just populates the cache, useful when you want to refresh the cache,
 * but cannot wait for the
 * scheduled job to run on the hour
 */

var statFetcher = require('../lib/statfetcher');

statFetcher.fetchStatsForAll(function(err, data) {
    if (err) {
        console.log("error " + err);
    }
    else {
        // due to fetchStatsFor() being a non-async function, we are not
        // necessarily done even when we see this output, as there could still
        // be I/O going on with the function call - see src/lib/statfetcher.js for
        // the proper explanation
        console.log("all good");
    }
});


