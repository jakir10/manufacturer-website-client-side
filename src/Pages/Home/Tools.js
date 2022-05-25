import React from 'react';
import spark from '../../assets/tools/Spark.jpg';
import mudguard from '../../assets/tools/Mudguard.jpg';
import helmet from '../../assets/tools/Helmet.jpg';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
            _id: 1,
            name: 'NGK LASER IRIDIUM SPARK PLUG',
            description: 'Fine wire iridium tipped center electrode and fine wire platinum tipped ground electrode ensures slow wear rate providing stable idle, superior anti fouling, improved fuel efficiency and lower emissions.',
            img: spark,
            "minOrderQuantity": 10,
            "avlQuantity": 50,
            "price": 250,
        },
        {
            _id: 2,
            name: 'Motorcycle Rear Fender Mudguard',
            description: 'Motorcycle Rear Fender Mudguard Wheel Extension Fender Splash Cover Accessories for KTM DUKE 250 390 M-SLAZ150 TFX150 NINJA250',
            img: mudguard,
            "minOrderQuantity": 10,
            "avlQuantity": 70,
            "price": 550,
        },
        {
            _id: 3,
            name: 'THUNDER D7 Helmet-Blue',
            description: 'Thunder D7 Decor is a higher impact full face helmet with mirror visor and product features like aerodynamic design with UV resistant paint,.',
            img: helmet,
            "minOrderQuantity": 10,
            "avlQuantity": 40,
            "price": 1250,
        },
    ]
    return (
        <div>
            <div className='my-24 text-primary text-center text-2xl font-bold uppercase'>
                <h2>All Tools</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;