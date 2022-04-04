import React from 'react';

const Blogs = () => {
    return (
        <div className='p-8'>
            <h1 className='font-bold'>Q1: What is Semantic tag?</h1>
            <p>semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.</p>
            
            <h1 className='font-bold  mt-8'>Q2: difference between inline inline-block and block elements?</h1>
            <p>Inline: Displays an element as an inline element. Any height and width properties will have no effect. <br />
            Inline block: Displays an element as an inline-level block container. You can set height and width values. <br />
            Block: Check the length of the string
            </p>
        </div>
    );
};

export default Blogs;