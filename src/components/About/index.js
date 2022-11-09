import React from "react";
import Photo from "../../assets/images/profile-pic.jpg";

function About() {
    return (
        <section className="my-5">
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img 
                	src={Photo}
                    alt="Alexa Hines"
                    className="main-pic"
                />
            </div>
            <div>
                <p>
                    I am a high school English teacher who is looking
                    to break into coding for a change of pace. I have
                    been in all types of classrooms around the world, 
                    but am ready for a new adventur. I am currently 
                    enrolled in Trilogy Coding Bootcamp through 
                    Butler University and will be a certified full-
                    stack developer before the end of the year.
                </p>
                <p>
                    I have begun and will continue to develop my skills 
                    in JavaScript, CSS, and React.js just to name a few. 
                    My experience in the classroom has given me the opportunity
                    to be a leader and problem-solver. I excell when working on 
                    teams or individually. My aim is to eventually work
                    in education technology, as I am still very passionate 
                    about helping young members of our society. 
                </p>
            </div>
        </section>
    );
}

export default About;