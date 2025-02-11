import express from 'express'
import { getReviewCon,postReviewCon,patchReviewCon,deleteReviewCon,submitPerformanceReview } from '../controller/reviewController.js'

const router = express.Router()

router.get('/', getReviewCon)

// router.get('/:id', async(req,res)=>{
//     res.json({review: await getReviewCon(req.params.id)})
// })

router.post('/' , postReviewCon) 

router.patch('/:id', patchReviewCon);

router.delete('/:id', deleteReviewCon );

router.post('/performance-review', submitPerformanceReview);


export default router