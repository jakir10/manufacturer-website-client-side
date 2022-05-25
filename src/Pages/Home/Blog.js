import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (
        <section>
            <div className='text-center text-secondary font-bold uppercase text-4xl mt-18 my-16'>
                <h2>This is Our Blog</h2>
            </div>
            <div className="collapse rounded-md my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Q1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>An easy solution to the performance issue would be to pass only the relevant value to Main instead of the style object. Main will no longer re-render because its only prop is always paddingTop={350} .</p>
                </div>
            </div>
            <div className="collapse rounded-md my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Q2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.</p>
                </div>
            </div>
            <div className="collapse rounded-md my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Q3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse or known as inheritance is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.</p>
                </div>
            </div>
            <div className="collapse rounded-md my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>We should not update the state directly because of the following reasons:

                        If we update it directly, calling the setState() afterward may just replace the update we made.
                        When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        We will lose control of the state across all components.
                    </p>
                </div>
            </div>
            <div className="collapse rounded-md my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Q5. What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>
                </div>
            </div>
            <div><Footer></Footer></div>
        </section >
    );
};

export default Blog;