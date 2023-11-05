onconnect = (e) => {
  const port = e.ports[0];
  port.start();
  port.postMessage("Hello World");
}