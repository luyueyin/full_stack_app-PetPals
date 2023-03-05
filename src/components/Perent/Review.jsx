import { useReducer, useState } from "react"
// import reviewReducer from "./reducers/reviewReducer"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { margin } from "@mui/system";

const initialReviews = [
    {
        id: 1,
        point: 5,
        description: "bad to use, do not recommend",
    },
    {
        id: 2,
        point: 4,
        description: "good to use, definitely recommend",
    },
]

function Review() {
    const [reviews, setReviews] = useState(initialReviews)
    const [review, setReview] = useState("")
    const [showEdit, setShowEdit] = useState(false)
    const [editReviewId, setEditReviewId] = useState(null)
    const [editReviewDesc, setEditReviewDesc] = useState("")

    // const [] = useReducer(reducer, initialReviews)


    
    const handleOnChange = (e) => {
        // dispatch({
        //     // type: 'setReview',
        //     data: e.target.value
        // })
        setReview(e.target.value)
    }

    const addReview = (e) => {
        e.preventDefault()
        // dispatch({
        //     type: 'addReview'
        // })
        setReviews((prevReviews) => {
            return [
                ...prevReviews, { id: prevReviews.length + 1, description: review },
            ]
        })
        setReview("")
    }

    const deleteReview = (id) => {
        const newReviews = reviews.filter((review) => review.id !== id)
        setReviews(newReviews)
    }

    const editReview = (id) => {
        // dispatch({
        //     type: 'editReview',
        //     data: id
        // })
        setShowEdit(true)
        setEditReviewId(id)
        setEditReviewDesc(
            reviews.find((review) => review.id === id).description
        )
    }

    const handleEditReview = (e) => {
        setEditReviewDesc(e.target.value)
    }

    const handleEdit = (e) => {
        const newReviews = [...reviews]
        const reviewIndexToEdit = reviews.findIndex(
            (review) => review.id === editReviewId
        )
        newReviews[reviewIndexToEdit].description = editReviewDesc
        setReviews(newReviews)
        setEditReviewDesc("")
        setShowEdit(false)


    }





    return (
        <div style={{ padding: 20, marginTop: 80 }}>
            <h6>Review</h6>
            {reviews.map((review) => {
                return (
                    <div key={review.id}>
                        <div>{review.point}</div>
                        <div>{review.description}</div>

                        <button onClick={() => editReview(review.id)} >Edit</button>
                        <button onClick={() => deleteReview(review.id)} >Delete</button>
                    </div>
                )
            })}
            {showEdit && (
                <div>
                    <textarea
                        value={editReviewDesc}
                        onChange={handleEditReview}
                    />
                    <div>
                        <button onClick={handleEdit}>Save Edit</button>
                    </div>
                </div>
            )}

            <form>
                <div>Add a Review</div>
                <textarea value={review} onChange={handleOnChange} />
                <Rating
                    name="Reviews"
                    value={review}
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <div>
                    <button onClick={addReview}>Add</button>
                </div>
            </form>
        </div>






        // onClick={() => editReview(review.id)}
    )
}

export default Review