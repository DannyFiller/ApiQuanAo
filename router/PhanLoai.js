const router = require("express").Router();
const PhanLoaiController = require("../controller/PhanLoaiController");
// Định nghĩa route POST cho thêm phân loại
router.post("/", PhanLoaiController.addPhanLoai);
router.get("/", PhanLoaiController.getAllPhanLoai);
router.put("/:id", PhanLoaiController.updatePhanLoai);
router.delete("/:id", PhanLoaiController.deletePhanLoai);

module.exports = router;
