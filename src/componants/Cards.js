import React, { useState } from "react"
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;


    const [likeCourses, setLikeCourses] = useState([]);

    //It return you a list of all courses recived from API response
    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        } else {
            //Specific category array pass
            return courses[category];
        }
    }


    return (
        <div className="flex flex-wrap justify-center gap-4">
            {
                getCourses().map((course) => {
                    return (
                        <Card key={course.id} course={course}
                            likeCourses={likeCourses}
                            setLikeCourses={setLikeCourses}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;