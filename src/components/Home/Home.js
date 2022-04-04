import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';

const Home = () => {
const [review, setReview]=useReview();
const updateReview = review.slice(0,3);
console.log(updateReview);
const navigation =useNavigate();
    return (
        <div>

            <div className='flex justify-center mt-4'>
            <div className='mt-24 mr-20 '>
                <h1 className='text-4xl font-bold'>Uiisii Hm 12 Super Bass Stereo In Ear-Phone</h1>
                <p>Superior Sound Performance Compatible with all 3.5mm audio cable jackIn-ear earbud with ergonomic design make you feel comfortable.</p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-8">Live demo</button>
                
                
            </div>
            <div className='mr-4 mt-6 '>
                <img src={'/Headphone.jpg'} alt="" />
            </div>
            </div>

            <div className='mt-44'>
            <h1 className='font-bold text-2xl'>
                        Customer review ({updateReview.length})
                    </h1>
                    <div className='grid grid-cols-3 mt-20'>
                     {updateReview.map(review=> 
                     <div>
                         <div className='flex justify-center items-center mb-8'>
                        <img className='h-14 w-14 rounded-full mr-8' src={review.img} alt="" />
                        <h1 className='font-bold'>{review.name}</h1>
                        </div>

                        <div>
                        <p> <FontAwesomeIcon icon={faStar} /> {review.rate}</p>
                        <p className='ml-8 font-medium'>{review.comment}</p> 
                        </div>
                     </div>
                     )}
                    </div>
                   

            </div>
            <div>
            <button onClick={()=> navigation('/reviews')}  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-28 mb-80">See all Reviews</button>
            
            </div>
        </div>
    );
};

export default Home;