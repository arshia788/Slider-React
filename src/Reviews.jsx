import React, { useState } from 'react'

import { Icon } from 'react-icons-kit'
import {arrowLeft} from 'react-icons-kit/fa/arrowLeft';
import {arrowRight} from 'react-icons-kit/fa/arrowRight';

import data from './data';


function Reviews() {

     const [index, setIndex] = useState(0);
     const {name,job,image,text} = data[index];





     const checkNumber=(num)=>{
          if(num > data.length -1){
               return 0
          }

          if(num < 0){
               return data.length -1
          }

          return num
     }


     const nextSlide = () => {
          setIndex((index) => {
               let newIndex = index + 1;
               return checkNumber(newIndex)
          }) 
      }

      const prevSlide = () => {
          setIndex((index) => {
               let newIndex = index - 1;
               return checkNumber(newIndex)
          }) 
      }


     return (
          <div className="reviews">

               <div className='holder-img'>
                    <img src={image}  />
               </div>               

               <h4 className='author'>
                    {name}
               </h4>

               <div className='holder-info'>
                    <p className='job'>{job}</p>
                    <p className='job-info'>{text}</p>
               </div>

               <div className='holder-buttons'>

                    <button onClick={prevSlide} >
                         <Icon icon={arrowLeft} size={20}/>
                    </button>

                    <button onClick={nextSlide}>
                         <Icon icon={arrowRight} size={20}/>
                    </button>

               </div>
          </div>
     )
}

export default Reviews
