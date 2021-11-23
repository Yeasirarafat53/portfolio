import React, { useEffect, useState } from 'react';
import './Dataload.css';
import fakedata from '../Data/Data.json';
import Projects from '../Projects/Projects';

const Dataload = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{

        setData(fakedata)

    },[])

    console.log(data);

    return (
        <div className="container project">

            <h2 className="titles">Projects</h2>
            
                <div className="raw">
                    { 
                        fakedata.map(newData => <Projects info={newData}></Projects>)
                    }
                </div>

                <br />
                <br />
            
            
        </div>
    );
};

export default Dataload;