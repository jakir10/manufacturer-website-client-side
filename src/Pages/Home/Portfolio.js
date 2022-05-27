import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div class="3card-body mt-12">
                    <div class="">
                        <pre><h2>Name     : Mohammad Jakir Hossain</h2></pre>
                        <pre><code>Email    : jakir.cse.bubt@gmail.com</code></pre>
                        <pre><code>Education: BUBT</code></pre>
                        <pre><code>skills<hr /></code></pre>

                        <div>
                            <div><span>HTML 5</span></div>
                            <progress class="3progress 3progress-primary w-56" value="70" max="100"></progress><br />
                            <div>CSS 3</div>
                            <progress class="3progress 3progress-primary w-56" value="75" max="100"></progress><br />
                            <div>Tailwind CSS</div>
                            <progress class="3progress 3progress-primary w-56" value="60" max="100"></progress><br />
                            <div>Bootstrap 3</div>
                            <progress class="3progress 3progress-primary w-56" value="56" max="100"></progress><br />
                            <div>React Bootstrap</div>
                            <progress class="3progress 3progress-primary w-56" value="65" max="100"></progress><br />
                            <div>JavaScript</div>
                            <progress class="3progress 3progress-primary w-56" value="76" max="100"></progress><br />
                            <div>React js</div>
                            <progress class="3progress 3progress-primary w-56" value="80" max="100"></progress><br />
                            <div>Express js</div>
                            <progress class="3progress 3progress-primary w-56" value="45" max="100"></progress>
                            <div>MongoDB</div>
                            <progress class="3progress 3progress-primary w-56" value="55" max="100"></progress>
                        </div>


                    </div>


                </div>
            </div>

        </div>
    );
};

export default Portfolio;