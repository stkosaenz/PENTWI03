function processMessage(message) {
    const deferred = $.Deferred();

    const worker = new Worker("./WorkerDeferred.js");
    worker.onmessage = function (e) {
        deferred.resolve(e.data.message);
    };

    worker.postMessage({ message: message });

    return deferred.promise();
}