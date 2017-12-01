self.onmessage = function (e) {
    const startTime = new Date().toTimeString();

    sleep(2000);
    const output = e.data.message + " processed at " + startTime;
    self.postMessage({ message: output });
}

function sleep(milliseconds) {
    const startingTime = new Date().getTime();
    const stopTime = startingTime + milliseconds;

    while (stopTime >= new Date().getTime()) { }
}