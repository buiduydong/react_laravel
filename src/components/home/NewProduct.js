import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewProduct extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>SẢN PHẨM MỚI</h2>
                    </div>
                    <Row>
                        <Slider {...settings}>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://picsum.photos/200/300" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NewProduct