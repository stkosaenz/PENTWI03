self.onmessage = function (e) {
    const messageObject = e.data;

    if (messageObject.status === "START") {
        self.postMessage("STARTED!!");
    } else {
        const message = messageObject.message;
        self.postMessage(message + " PROCESSED!!");
    }
};