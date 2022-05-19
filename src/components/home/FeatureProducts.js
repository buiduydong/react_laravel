import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export class FeatureProducts extends Component {
  render() {
    return (
      <>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>SẢN PHẨM NỔI BẬT</h2>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Blue, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>


            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>


            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </>
    )
  }
}

export default FeatureProducts
