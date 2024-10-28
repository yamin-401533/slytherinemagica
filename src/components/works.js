import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    image: require('../assets/images/img2.jpg'),
    title: "Harry Potter and the Philosopher's Stone",
    releaseDate: "1997",
    pages: "223",
    description: "Harry Potter discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry."
  },
  {
    id: 2,
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    image: require('../assets/images/img3.jpg'),
    title: "Harry Potter and the Chamber of Secrets",
    releaseDate: "1998",
    pages: "251",
    description: "Harry's second year at Hogwarts takes a sinister turn as a mysterious force terrorizes the school."
  },
  {
    id: 3,
    link: 'https://drive.google.com/file/d/1PegG-ejx61X082yQ4akE0AajqwE16FTP/view?usp=drive_link',
    image: require('../assets/images/img4.jpg'),
    title: "Harry Potter and the Prisoner of Azkaban",
    releaseDate: "1999",
    pages: "317",
    description: "Harry learns more about his past as escaped prisoner Sirius Black seems to be hunting him."
  },
  {
    id: 4,
    link: 'https://drive.google.com/file/d/16fP0lN6Czak4fEhZSCM7tU5aznL82MvP/view?usp=drive_link',
    image: require('../assets/images/img5.jpg'),
    title: "Harry Potter and the Goblet of Fire",
    releaseDate: "2000",
    pages: "636",
    description: "Harry mysteriously enters a dangerous tournament between three major schools of magic."
  },
  {
    id: 5,
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    image: require('../assets/images/img6.jpg'),
    title: "Harry Potter and the Order of the Phoenix",
    releaseDate: "2003",
    pages: "766",
    description: "Harry forms a secret group to teach defensive magic as dark forces gather strength."
  },
  {
    id: 6,
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    image: require('../assets/images/img7.jpg'),
    title: "Harry Potter and the Half-Blood Prince",
    releaseDate: "2005",
    pages: "607",
    description: "Dumbledore prepares Harry for his final battle as they investigate Voldemort's past."
  },
  {
    id: 7,
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    image: require('../assets/images/img8.jpg'),
    title: 'og Dodssregalience',
    subtitle: 'click on a Book to read!'
  },
  {
    id: 8,
    link: 'https://harrypotter.fandom.com/wiki/Category:Books_(real-world)',
    image: require('../assets/images/img9.jpg'),
    title: 'The Deathly Hallows',
    subtitle: 'click on a Book to read!'
  },
  {
    id: 9,
    link: 'https://drive.google.com/file/d/1JEtO2E4TjNkpLQVCN1PiT3zM5_BorUeY/view?usp=drive_link',
    image: require('../assets/images/img10.jpg'),
    title: 'The Sorcerer Stone',
    subtitle: 'Click on the book to read and explore the PDF!'
  }
];

const AppWorks = () => {
  const active = 2;
  const items = [];
  
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Our Library</h1>
          <div className="subtitle">our books collection - click on a Book to read & Explore!</div>
        </div>
        
        <Row className='portfoliolist'>
          {worksData.map(works => (
            <Col sm={4} key={works.id}>
              <div className='portfolio-wrapper'>
                <a href={works.link}>
                  <Image src={works.image} />
                  <div className='label text-center'>
                    <h3>{works.title}</h3>
                    <p>{works.subtitle}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        
        <Pagination>{items}</Pagination>
      </Container>
      
      
    </section>
  );
};

export default AppWorks;
