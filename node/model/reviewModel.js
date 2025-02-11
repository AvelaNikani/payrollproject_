import {pool} from '../config/config.js'

const getReview = async ()=>{
    let [data] = await pool.query('SELECT * FROM performance_reviews')
    return data
}

// const getSingleReview = async (id)=>{
//     let [data] = await pool.query('SELECT * FROM performance_reviews WHERE id = ?',[id])
//     return data
// } 

const insertReview = async (id, name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at) => {
    console.log(id, name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at);
    
    // Insert into the performance_reviews table
    await pool.query(
        'INSERT INTO `moderntech_db`.`performance_reviews` (`id`, `name`, `employeeId`, `position`, `review_period`, `overall_performance`, `strengths`, `areas_for_improvement`, `goals_and_objectives`, `recommendations`, `submitted_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [id, name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at]
    );
    
    // Return the reviews after insertion
    return await getReview();
};

const deleteReview = async(id) => {
    await pool.query( 'DELETE FROM `moderntech_db`.`performance_reviews`  WHERE (`id` = ?)',[id]
    );
    return await getReview()
}

const updateReview = async (name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at, id) => {
    await pool.query(
        'UPDATE products SET name = ?, employeeId = ? , position = ? , review_period = ? , overall_performance = ? , strengths = ? , areas_for_improvement = ? , goals_and_objectives = ? , recommendations = ? , submitted_at = ? WHERE id = ?',
        [id, name, employeeId, position, review_period, overall_performance, strengths, areas_for_improvement, goals_and_objectives, recommendations, submitted_at]
    );
    return
};
export const savePerformanceReview = async (reviewData) => {
    const { name,employeeId ,jobTitle, reviewPeriod, overallPerformance, strengths, areasForImprovement, goals, recommendations } = reviewData;
    const query = `
        INSERT INTO performance_reviews (name ,employee_id,job_title, review_period, overall_performance, strengths, areas_for_improvement, goals, recommendations) 
        VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [name, employeeId, jobTitle, reviewPeriod, overallPerformance, strengths, areasForImprovement, goals, recommendations];
    await pool.query(query, values);
};

export{getReview,insertReview,deleteReview,updateReview}


