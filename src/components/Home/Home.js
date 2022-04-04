import React from 'react';
import useReview from '../../Hooks/useReview';

const Home = () => {
const [review, setReview]=useReview();
    return (
        <div>

            <div className='flex justify-center'>
            <div className='mt-6'>
                <h1>Choose your best phone <br />
                <h1>your best phone</h1>
                <button className="rounded bg-cyan-300">Live demo</button>
                
                </h1>
            </div>
            <div className='ml-80 mt-6'>
                <img className='w-80 h-80' src={'/iphone.jpg'} alt="" />
            </div>
            </div>

            <div>
              <h1>
                  Customer review ({review.length})
              </h1>
            </div>
            <div>
            <button>See all reviews</button>
            </div>
        </div>
    );
};

export default Home;