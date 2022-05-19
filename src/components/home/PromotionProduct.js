import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

class PromotionProduct extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>SẢN PHẨM KHUYẾN MẠI</h2>
                    </div>

                    <Row>
                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Striped Men Round Neck Maroon, Grey</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Color Block Men Round Neck Grey</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default PromotionProduct