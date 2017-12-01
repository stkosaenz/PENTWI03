self.addEventListener("message", function (e) {
    const message = e.data;
    self.postMessage(e.data + " - Processed!");
});