import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likeCourses = props.likeCourses;
    let setLikeCourses = props.setLikeCourses;

    function clickHandler() {
        //Logic
        if (likeCourses.includes(course.id)) {
            //If it already like
            setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        } else {
            //If already not like
            //Insert into like courses
            if (likeCourses.length === 0) {
                setLikeCourses([course.id])
            } else {
                //Non-EMpty
                setLikeCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully!");
        }
    }
    return (
        <div className="rounded-md overflow-hidden text-white bg-opacity-90 w-[300px] bg-bgDark">
            <div className="relative">
                <img src={course.image.url} alt={course.alt}></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-1rem] grid place-content-center">
                    <button onClick={clickHandler}>
                        {
                            likeCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" />) :
                                (<FcLikePlaceholder fontSize="1.75rem" />)
                        }

                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-4">{course.description.length > 100 ? (course.description.substr(0, 100)) + "..." : (course.description)}</p>
            </div>
        </div>

    )
}

export default Card;
