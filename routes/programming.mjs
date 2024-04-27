import express from 'express';
const router = express.Router()
import {getAllProgrammings, getProgramming, createProgramming, updateProgramming, deleteProgramming} from '../controllers/programmingController.mjs'

router.route('/')
    .get(getAllProgrammings)
    .post(createProgramming)
router.route('/:id')
    .get(getProgramming)
    .put(updateProgramming)
    .delete(deleteProgramming)

export default router;