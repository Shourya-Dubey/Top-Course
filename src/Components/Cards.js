import React from 'react'
import Card from './Card' 
import { useState } from 'react';

const Cards = (props)=>{
    let courses = props.courses;
   
    const [LikedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map ( (course) => (
                    <Card key={course.id} course={course} LikedCourses = {LikedCourses} setLikedCourses = {setLikedCourses}/>
                ))
            }
        </div>
    )
}

export default Cards;