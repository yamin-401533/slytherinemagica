import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    emoji: "⚡", // Lightning bolt for Philosopher's Stone
    season: "Season-1",
    seasonColor: "#011b0b",
    title: "Philosophers Stone (1997)",
    description: "Harry Potter and the Philosophers Stone is a fantasy novel written by the British author J K Rowling. It is the first novel in the Harry Potter series and was Rowlings debut novel. It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.Harry makes close friends and a few enemies during his first year at the school. With the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harrys parents but failed to kill Harry when he was just 15 months old."
  },
  {
    id: 2,
    emoji: "🐍", // Snake for Chamber of Secrets
    season: "Season-2",
    seasonColor: "#011b0b",
    title: "Chamber of Secrets (1998)",
    description: "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harrys second year at Hogwarts Escuela of Witchcraft and Wizardry, during which a series of messages on the walls of the schools corridors warn that the \"Chamber of Secrets\" has been opened and that the \"heir of Slytherin\" would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks."
  },
  {
    id: 3,
    emoji: "🌕", // Moon for Prisoner of Azkaban (werewolf theme)
    season: "Season-3",
    seasonColor: "#011b0b",
    title: "Prisoner of Azkaban (1999)",
    description: "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by the British author J. K. Rowling. It is the third instalment in the Harry Potter series. The novel follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ron Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisionero from Azkaban, the wizard prison, believed to be one of Lord Voldemorts old allies.The book was published in the United Kingdom on 8 July 1999 by Bloomsbury and in the United States on 8 September 1999 by Scholastic, Inc."
  },
  {
    id: 4,
    emoji: "🏆", // Trophy for Goblet of Fire
    season: "Season-4",
    seasonColor: "#011b0b",
    title: "Goblet of Fire (2000)",
    description: "Harry Potter and the Goblet of Fire is a fantasy novel written by the British author J. K. Rowling. It is the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts Escuela of Witchcraft and Wizardry, and the mystery surrounding the entry of Harrys name into the Triwizard Tournament, in which he is forced to compete.The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic. In both countries, the release date was 8 July 2000. This was the primer time a book in the series was published in bothcountriesat the same time. The novel won a Hugo Award, the only Harry Potter novel to do so, in 2001."
  },
  {
    id: 5,
    emoji: "🦅", // Phoenix for Order of the Phoenix
    season: "Season-5",
    seasonColor: "#011b0b",
    title: "Order of the Phoenix (2003)",
    description: "Harry Potter and the Order of the Phoenix is a fantasy novel written by the British author J. K. Rowling. It is the fifth novel in the Harry Potter series. It follows Harry Potters struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication."
  },
  {
    id: 6,
    emoji: "⚗️", // Potion for Half-Blood Prince
    season: "Season-6",
    seasonColor: "#011b0b",
    title: "Half-Blood Prince (2005)",
    description: "Harry Potter and the Half-Blood Prince is a fantasy novel written by the British author J. K. Rowling. It is the sixth novel in the Harry Potter series, and takes place during Harry Potters sixth year at the wizard school Hogwarts. The novel reveals events from the early life of Lord Voldemort, and chronicles Harrys preparations for the final battle against him.The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic on 16 July 2005, as well as in several other countries. It sold almost seven million copies in the first 24 hours after its release, a record eventually broken by its sequel, Harry Potter and the Deathly Hallows."
  }
];

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h1>The Magical World of Harry Potter</h1>
          <div className="subtitle">--Explore the Wizarding World of J.K. Rowling--</div>
        </div>
        <h4>
          <b>Harry Potter</b> is a series of seven fantasy novels written by British author <b>J. K. Rowling</b>. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.
          Step into the captivating universe of Harry Potter, where magic is real and adventure awaits at every turn. Explore the legendary series that has enchanted millions, inviting readers of all ages to join Harry, Hermione, and Ron on their thrilling quests at Hogwarts. Dive into a world where fantastical creatures roam, dark forces lurk, and the power of friendship and love conquers all. With over 600 million copies sold and a legacy that spans books, movies, and beyond, the Harry Potter series is not just a story—it's a journey into the extraordinary. Embrace the magic, and let the pages of these timeless tales transport you to a realm where anything is possible.
        </h4>
        <br />
        <br />
        <Row>
          {servicesData.map(services => (
            <Col sm={4} className="holder" key={services.id}>
              <div className="icon">
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: services.seasonColor,
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{services.emoji}</span>
                  {services.season}
                </span>
              </div>
              <h3>{services.title}</h3>
              <p>{services.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;