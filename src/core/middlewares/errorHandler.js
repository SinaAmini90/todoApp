export default function notFoundHandler(req, res) {
  res.status(404).json({ message: "ERROE404, page Not Found" });
  console.log("ERROE404, page Not Found");
}
