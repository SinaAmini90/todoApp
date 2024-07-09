export default function logReqData(req, res, next) {
  const headers = req.headers;
  const body = req.body;
  const params = req.params;
  const path = req.path;
  const method = req.method;
  const ip = req.ip;

  console.log("Headers:", headers);
  console.log("Body:", body);
  console.log("Params:", params);
  console.log("Path:", path);
  console.log("Method:", method);
  console.log("IP:", ip);
}
