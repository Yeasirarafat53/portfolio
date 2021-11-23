import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './Projects.css';

const Projects = ({info}) => {

    
    return (
        <div>
            
            
            <div className=" product">
            
                    <Card>
                    <Card.Img  variant="top" src={info.img} />
                    <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>
                        {info.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a href={info.website} target="_blank" className="button btn btn-primary">Website</a>
                                            
                        <a href={info.github} target="_blank" className="button btn btn-primary">Github</a>
                    </Card.Footer>
                    </Card>
            </div>       
          
            
        </div>
    );
};

export default Projects;

