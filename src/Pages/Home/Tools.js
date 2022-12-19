import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    // const [tools, setTools] = useTools([]);
    const [tools, setTools] = useTools([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     // fetch('http://localhost:5000/tool')

    //     const url = `http://localhost:5000/tool/${_id}`;
    //     fetch(url)



    //         .then(res => res.json())
    //         .then(data => setTools(data));
    // }, [])

    return (
        <div>
            <div className='my-24 text-primary text-center text-2xl font-bold uppercase'>
                <h2>All Tools</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool?._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;