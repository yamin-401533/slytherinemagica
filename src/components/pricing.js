import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'IIUC student',
    price: '149BDT',
    features: ['Explore the book', 'Upcoming Movie & TV Show', 'Wizarding World Games', 'Anime', 'Support & Assistance'],
    link: 'https://www.bkash.com/en/products-services/payment'
  },
  {
    id: 2,
    plan: 'For EM Boys',
    price: 'FREE',
    features: ['Explore the book', 'Upcoming Movie & TV Show', 'Wizarding World Games', 'Anime', 'Support & Assistance'],
    link: 'https://www.bkash.com/en/products-services/payment'
  },
  {
    id: 3,
    plan: 'OTHERS',
    price: '300BDT',
    features: ['Explore the book', 'Upcoming Movie & TV Show', 'Wizarding World Games', 'Anime', 'Support & Assistance'],
    link: 'https://www.bkash.com/en/products-services/payment'
  }
]

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Secure Your Tickets for the Upcoming Movie & TV Show!</h1>
          <div className="subtitle">Explore Our Pricing & Plans</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>Order Now</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;