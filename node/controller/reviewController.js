import {getReview,insertReview,deleteReview,updateReview,savePerformanceReview} from '../model/reviewModel.js'

const getReviewCon = async(req,res)=>{
    res.json({review: await getReview()})
}

const postReviewCon = async(req,res)=>{
    let {id, name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at } = req.body
    console.log(req.body); 
    res.json({
     review: await insertReview(id, name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at )
    })
}

const deleteReviewCon = async (req, res) => {
    let { id } = req.params;
    res.json({
        review : await deleteReview(id)
    });
}
const patchReviewCon = async (req, res) => {
    let { name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at, id } = req.body;
    // let { id } = req.params;
    res.json({
        review: await updateReview(name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at, id)
    }); 
}

export const submitPerformanceReview = async (req, res) => {
    try {
        await savePerformanceReview(req.body);
        res.status(201).json({ message: 'Performance review submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving review', error: error.message });
    }
};

export{ getReviewCon,postReviewCon,patchReviewCon,deleteReviewCon }

