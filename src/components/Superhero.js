import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
            <h1 className='movies'>SUPERHERO <br/>MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper mt-4" id='superhero'>
                    <Card className="text-center text-white movieImage">
                <Image src={antmanImage} alt="Joker Movies" className='images' />
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>ANTMAN</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-into additional content.
                                </Card.Text>
                                <Card.Text className='text-center'>Last updated 3 mins ago</Card.Text>                    
                        </div>
                    </div>                    
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-4">
                    <Card className="text-center text-white movieImage">
                <Image src={avengerImage} alt="Joker Movies" className='images'/>
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>AVENGERS</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-into additional content.
                                </Card.Text>
                                <Card.Text className='text-center'>Last updated 3 mins ago</Card.Text>                    
                        </div>
                    </div>                    
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-4">
                    <Card className="text-center text-white movieImage">
                <Image src={batmanImage} alt="Joker Movies" className='images' />
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>BATMAN</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-into additional content.
                                </Card.Text>
                                <Card.Text className='text-center'>Last updated 3 mins ago</Card.Text>                    
                        </div>
                    </div>                    
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-4">
                    <Card className="text-center text-white movieImage">
                <Image src={robinhoodImage} alt="Joker Movies" className='images' />
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>ROBINHOOD</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-into additional content.
                                </Card.Text>
                                <Card.Text className='text-center'>Last updated 3 mins ago</Card.Text>                    
                        </div>
                    </div>                    
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-4">
                    <Card className="text-center text-white movieImage">
                <Image src={spidermanImage} alt="Joker Movies" className='images'/>
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>SPIDERMAN</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-into additional content.
                                </Card.Text>
                                <Card.Text className='text-center'>Last updated 3 mins ago</Card.Text>                    
                        </div>
                    </div>                    
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-4">
                    <Card className="text-center text-white movieImage">
                <Image src={supermanImage} alt="Joker Movies" className='images'/>
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>SUPERMAN</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-into additional content.
                                </Card.Text>
                                <Card.Text className='text-center'>Last updated 3 mins ago</Card.Text>                    
                        </div>
                    </div>                    
                    </Card>
                    </Col>
                </Row>
            </Container>            
            );
        </div>
    );
}

export default Superhero;