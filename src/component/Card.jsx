import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card(props){
    let reviews=props.reviews;
    return(
        <div className="flex flex-col md:relative ">

            {/* Image */}

            <div className="absolute top-[-7rem] z-10 ">
                <img className="aspect-square rounded-full  w-[140px] h-[140px] z-[20]"
                src={reviews.image} alt="" />

                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-9] left-[6px]"></div>
            </div>

            {/* NAME */}
            
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{reviews.name}</p>
            </div>

            {/* JOBE */}

            <div className="text-center mt-2">
                <p className="text-violet-300 uppercase text-sm ">{reviews.job}</p>
            </div>

            {/* ICON */}

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft></FaQuoteLeft>
            </div>

            {/* DESCRIPTION */}

            <div className="text-center mt-4 text-slate-500">
                {reviews.text}
            </div>

            {/* ICON */}

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight></FaQuoteRight>
            </div>


        </div>
    )
}

export default Card