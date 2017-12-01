const worker = new Worker("02-Worker.js");
worker.addEventListener("message", function (e) {
    var message = e.data;
    alert(message);
});

worker.postMessage("hello, Worker");