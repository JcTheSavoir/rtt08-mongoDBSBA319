import express from "express";
const router = express.Router();
import {getAllZyns, getZyn, createZyn, updateZyn, deleteZyn} from '../controllers/zynController.mjs'

router.route('/')
    .get(getAllZyns)
    .post(createZyn)

router.route('/:id')
    .get(getZyn)
    .put(updateZyn)
    .delete(deleteZyn)

export default router;