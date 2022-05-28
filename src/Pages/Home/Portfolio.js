import React from 'react';
import { Link, Route } from 'react-router-dom';

const Portfolio = () => {
    return (

        <> <div class="avatar online mt-20">
            <div class="w-24 rounded-full ring ring-primary">
                <img src="https://i.ibb.co/jyCFXVz/2021-09-29-21-31-02-Window-2.jpg" alt="" border="0" />
            </div>
        </div>
            <h2 className=' text-center text-primary text-5xl mt-0 my-5'>My Portfolio</h2><hr />
            <section className="bg-base-100 shadow-xl flex justify-center items-center">
                {/* Personal info */}
                <div className="card-body">
                    <h2 className="card-title text-2xl">Personal Information</h2><hr />
                    <h2>Name     : Mohammad Jakir Hossain</h2>
                    <h2>Email    : jakir.cse.bubt@gmail.com</h2>
                    <h2>Education: BUBT</h2>
                </div>
                {/* My Skills */}
                <div className="card-body">
                    <h2 className="card-title text-2xl">My Skills</h2><hr />
                    <div>
                        <div><span>HTML 5</span></div>
                        <progress className="3progress 3progress-primary w-56" value="70" max="100"></progress><br />
                        <div>CSS 3</div>
                        <progress className="3progress 3progress-primary w-56" value="75" max="100"></progress><br />
                        <div>Tailwind CSS</div>
                        <progress className="3progress 3progress-primary w-56" value="60" max="100"></progress><br />
                        <div>Bootstrap 3</div>
                        <progress className="3progress 3progress-primary w-56" value="56" max="100"></progress><br />
                        <div>React Bootstrap</div>
                        <progress className="3progress 3progress-primary w-56" value="65" max="100"></progress><br />
                    </div>
                    <div>
                        <div>JavaScript</div>
                        <progress className="3progress 3progress-primary w-56" value="76" max="100"></progress><br />
                        <div>React js</div>
                        <progress className="3progress 3progress-primary w-56" value="80" max="100"></progress><br />
                        <div>Express js</div>
                        <progress className="3progress 3progress-primary w-56" value="45" max="100"></progress>
                        <div>MongoDB</div>
                        <progress className="3progress 3progress-primary w-56" value="55" max="100"></progress>
                    </div>
                </div>
            </section>
            <div className="card-body">
                <h2 className="card-title text-2xl">My Previous Projects Link</h2><hr />

                <div className="link link-primary no-underline"
                >
                    <Link to="/https://independent-service-prov-522f0.web.app/">1. Jakir's Photography</Link><br />
                    <Link to="/https://movies-world-jakir.netlify.app/Home">2. Movies World</Link> <br />
                    <Link to="/https://phone-hunter-jakir.netlify.app/">3. Phone Hunter</Link>
                </div>
            </div>
        </>
    );
};

export default Portfolio;