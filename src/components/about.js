import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

import img1 from '../assets/images/img1.jpg';
import img16 from '../assets/images/img16.jpg';

function AppAbout() {
  const houses = [
    { name: "Ravenclaw", progress: 28, emoji: "🦅", variant: "info" },
    { name: "Gryffindor", progress: 26, emoji: "🦁", variant: "danger" },
    { name: "Slytherin", progress: 26, emoji: "🐍", variant: "success" },
    { name: "Hufflepuff", progress: 19, emoji: "🦡", variant: "warning" }
  ];

  return (
    <section id="about" className="block about-block py-5">
      <Container>
        <div className="title-holder">
          <h1>HARRY POTTER BOOK DAY 2024 - 17th October 2024</h1>
          <div className="subtitle">Celebrate the magic of Harry Potter with Bloomsbury</div>
        </div>
        
        <Row className="g-4 align-items-stretch">
          {/* Left Column */}
          <Col lg={6}>
            <Card className="ar h-100">
              <Card.Body className="p-4">
                <div className='img'>
                  <Card.Img 
                    variant="top" 
                    src={img1}
                    className="img-fluid"
                    style={{ objectFit: 'cover', height: '500px'}}
                  />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h3><b>Harry Potter Book Day</b></h3>
                <h5>
                  Harry Potter Book Day is a chance for fans around the globe to celebrate J.K. Rowling's iconic series. 
                  Bloomsbury creates a special free, downloadable event kit, packed with decoration, costume, activity, 
                  and game ideas for magical celebrations!
                  <br></br>
                  <br></br>
                  Harry Potter Book Day is a global celebration of J.K. Rowling's beloved series. Bloomsbury offers a free, downloadable event kit filled with decorations, costumes, activities, and games to make your celebration magical.

                  <br></br>
                  <br></br>
                  <br></br>
                </h5>

                <h3><b>Who can take part?</b></h3>
                <h5>
                  Everyone! Whether you're a teacher, librarian, bookseller, parent, carer, or simply a fan, 
                  Harry Potter Book Day is for you! Celebrate at home, in your school, library, bookshop, or anywhere magical.
                </h5>
                <br></br>
                <h3><b>Magical Activities and Crafts</b></h3>
                <h5>
                  Unleash your creativity with Harry Potter-themed crafts and activities. From making your own wand and potion bottles to creating house banners and spell books, there's something for every fan. These activities are perfect for adding a touch of magic to your Harry Potter Book Day celebrations.
                </h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column */}
          <Col lg={6}>
            <Card className="ar h-100">
              <Card.Body className="p-4">
                <div className="subtitle">---2024 Theme : Care of Magical Creatures---</div>
                <h5>
                  The wizarding world is full of magical creatures from majestic Hippogriffs, unicorns, and dragons 
                  to the light-fingered Niffler and venomous Doxy. Our event kit features exciting activities with 
                  a magical menagerie of fantastic beasts in all their shapes and sizes.
                </h5>
                <br></br>
                <div className="leaderboard-container">
                  <div className="sparkles" />
                  <h3 className="text-center mb-4"><b>House Points Leaderboard 🏆</b></h3>
                  {houses.map((house, index) => (
                    <div key={index} className="mb-4 position-relative house-progress">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-bold">{house.emoji} {house.name}</span>
                        <span>{house.progress}%</span>
                      </div>
                      <ProgressBar 
                        variant={house.variant}
                        now={house.progress}
                        className="progress-bar"
                        animated
                      />
                    </div>
                  ))}
                </div>
                <br></br>
                <div className='img'>
                  <Image 
                    src={img16}
                    className="img-fluid rounded-3 shadow"
                    style={{ objectFit: 'cover', height: '460px', width: '100%' }}
                  />
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;