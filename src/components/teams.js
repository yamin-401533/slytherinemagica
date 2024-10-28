import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/team1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Harry James Potter',
    designation: 'Head of British Auror Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: require('../assets/images/team2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Hermione Granger',
    designation: 'Deputy Head of the Department of Magical Law Enforcement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: require('../assets/images/team3.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ron Weasley',
    designation: 'Auror (formerly)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: require('../assets/images/team4.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ginny Weasley',
    designation: 'Professional Quidditch Player',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 5,
    image: require('../assets/images/team5.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Neville Longbottom',
    designation: 'Herbology Professor at Hogwarts School of Witchcraft and Wizardry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 6,
    image: require('../assets/images/team6.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Luna Lovegood',
    designation: 'Magizoologist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 7,
    image: require('../assets/images/team7.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Lord Voldemort',
    designation: 'Dark Wizard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 8,
    image: require('../assets/images/team8.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Draco Malfoy',
    designation: 'Unspeakable',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  }
]

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Characters</h1>
          <div className="subtitle"> Harry Potter</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;