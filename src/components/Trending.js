import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import jokerImage from "../assets/images/trending/joker.jpg";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
            <h1 className='movies'>TRENDING <br/>MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper mt-4" id='trending'>
                    <Card className="text-center text-white movieImage">
                <Image src={jokerImage} alt="Joker Movies" className='images' />
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>JOKER</Card.Title>
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
                <Image src={duneImage} alt="Dune Movies" className='images'/>
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>DUDE</Card.Title>
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
                <Image src={everythingImage} alt="Joker Movies" className='images' />
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>EVERYTHING</Card.Title>
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
                <Image src={infiniteImage} alt="Joker Movies" className='images' />
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>INFINITE</Card.Title>
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
                <Image src={morbiusImage} alt="Joker Movies" className='images'/>
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>MORBIUS</Card.Title>
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
                <Image src={lightyearImage} alt="Joker Movies" className='images'/>
                <div className='bg-dark'>
                        <div className='p-2 m-3 text-white'>
                            <Card.Title text-center>LIGHT YEAR</Card.Title>
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

export default Trending;