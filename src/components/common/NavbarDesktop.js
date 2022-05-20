import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons';

export class NavbarDesktop extends Component {
  render() {
    return (
        <div className="con_navbar_desktop">
            <Container>
                <Row>
                    <div className="navbar_desktop">
                        <div className="nav_logo">
                            <img src="https://picsum.photos/200/300" alt="" />
                        </div>
                        <div className="nav_items">
                            <div className="nav_item">
                                <span>Trang chủ</span>
                                <span className="navbar_icon"><ChevronRight /></span>
                                <ul className="sub_navbar">
                                    <li>
                                        <a href="asdsa">asdas</a>
                                        <ul className="sub_navbar">
                                            <li>
                                                <a href="asdsa">asdas</a>
                                                <ul className="sub_navbar">
                                                    <li><a href="asdsa">asdas</a></li>
                                                    <li>abc</li>
                                                    <li>abc</li>
                                                </ul>
                                            </li>
                                            <li>abc</li>
                                            <li>abc</li>
                                        </ul>
                                    </li>
                                    <li>abc</li>
                                    <li>abc</li>
                                </ul>
                            </div>
                        </div>

                        <div className="nav_items">
                            <div className="nav_item">
                                <span>Trang chủ</span>
                                <span className="navbar_icon"><ChevronRight /></span>
                                <ul className="sub_navbar">
                                    <li>
                                        <a href="asdsa">asdas</a>
                                        <ul className="sub_navbar">
                                            <li>
                                                <a href="asdsa">asdas</a>
                                                <ul className="sub_navbar">
                                                    <li><a href="asdsa">asdas</a></li>
                                                    <li>abc</li>
                                                    <li>abc</li>
                                                </ul>
                                            </li>
                                            <li>abc</li>
                                            <li>abc</li>
                                        </ul>
                                    </li>
                                    <li>abc</li>
                                    <li>abc</li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav_items">
                            <div className="nav_item">
                                <span>Trang chủ</span>
                                <span className="navbar_icon"><ChevronRight /></span>
                                <ul className="sub_navbar">
                                    <li>
                                        <a href="asdsa">asdas</a>
                                        <ul className="sub_navbar">
                                            <li>
                                                <a href="asdsa">asdas</a>
                                                <ul className="sub_navbar">
                                                    <li><a href="asdsa">asdas</a></li>
                                                    <li>abc</li>
                                                    <li>abc</li>
                                                </ul>
                                            </li>
                                            <li>abc</li>
                                            <li>abc</li>
                                        </ul>
                                    </li>
                                    <li>abc</li>
                                    <li>abc</li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav_items">
                            <div className="nav_item">
                                <span>Trang chủ</span>
                                <span className="navbar_icon"><ChevronRight /></span>
                                <ul className="sub_navbar">
                                    <li>
                                        <a href="asdsa">asdas</a>
                                        <ul className="sub_navbar">
                                            <li>
                                                <a href="asdsa">asdas</a>
                                                <ul className="sub_navbar">
                                                    <li><a href="asdsa">asdas</a></li>
                                                    <li>abc</li>
                                                    <li>abc</li>
                                                </ul>
                                            </li>
                                            <li>abc</li>
                                            <li>abc</li>
                                        </ul>
                                    </li>
                                    <li>abc</li>
                                    <li>abc</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
  }
}

export default NavbarDesktop
