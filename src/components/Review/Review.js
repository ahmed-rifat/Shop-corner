import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useReview from '../../Hooks/useReview';

const Review = () => {
    const [review,setReview] =useReview();
    return (
        <div>
            {
                review.map(comment=> 
                    <div className='p-4'>
                        <div className='flex justify-center items-center mb-8'>
                        <img className='h-14 w-14 rounded-full mr-8' src={comment.img} alt="" />
                        <h1 className='font-bold'>{comment.name}</h1>
                        </div>

                        <div>
                        <p> <FontAwesomeIcon icon={faStar} /> {comment.rate}</p>
                        <p className='ml-8 font-medium'>{comment.comment}</p> 
                        </div>

                    </div>
                    )
            }
        </div>
    );
};

export default Review;