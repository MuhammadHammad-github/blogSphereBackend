const express = require("express");
const {
  read,
  create,
  update,
  deleteItem,
  readOne,
  response,
} = require("../../../utils");
const { Blog } = require("../../../schema");
const deleteFile = require("../../../middelwares/deleteFile");
const upload = require("../../../middelwares/uploadFile");
const router = express.Router();

router.get("/", async (req, res) => {
  await read(res, {}, Blog);
});
router.get("/one", async (req, res) => {
  await readOne(res, { id: req.headers["id"] }, Blog);
});
router.post("/create", upload.single("image"), async (req, res) => {
  const fullUrl = req.protocol + "://" + req.get("host");
  if (!req.file) return response(res, 404, { message: "File Not Uploaded!" });
  const filePath = req.file.path.replace(/\\/g, "/");
  console.log(req.body);
  await create(
    res,
    {
      ...req.body,
      image: {
        filePath: `${fullUrl}/${filePath}`,
        fileName: req.file.filename,
      },
    },
    Blog
  );
});
const conditionalUpload = (req, res, next) => {
  console.log(req.file);
  if (req.headers["content-type"].startsWith("multipart/form-data")) {
    return upload.single("image")(req, res, next);
  }
  next();
};
const conditionalDelete = (req, res, next) => {
  if (req.headers["content-type"].startsWith("multipart/form-data"))
    return deleteFile(req, res, next);
  next();
};
router.put(
  "/update",
  conditionalUpload,
  conditionalDelete,
  async (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    const fullUrl = req.protocol + "://" + req.get("host");
    let query;
    if (req.file) {
      const filePath = req.file.path.replace(/\\/g, "/");

      query = {
        ...req.body,
        image: {
          filePath: `${fullUrl}/${filePath}`,
          fileName: req.file.filename,
        },
      };
    } else query = req.body;
    await update(res, query, Blog, req.headers["id"]);
  }
);
router.delete("/delete", deleteFile, async (req, res) => {
  await deleteItem(res, { id: req.headers["id"] }, Blog);
});
module.exports = router;
