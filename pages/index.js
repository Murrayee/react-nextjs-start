import React, {Component} from 'react'
import Head from 'next/head'
import {connect} from "react-redux";
import {enquireScreen} from 'enquire-js';
import Header from '../components/Header'
import Content1 from '../components/Content1'
import Content2 from '../components/Content2'
import Content3 from '../components/Content3'
import Footer from '../components/Footer'
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: true
        };
    }
    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({
                isMobile: !!b
            });
        });
    }
    render() {
        return (
            <div className="templates-wrapper">
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css"/>
                </Head>
                <Header id="nav_1_0" key="nav_1_0" isMobile={this.state.isMobile}/>
                <Content1 id="content_0_0" key="content_0_0" isMobile={this.state.isMobile}/>
                <Content2 id="content_6_0" key="content_6_0" isMobile={this.state.isMobile}/>
                <Content3 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile}/>
                <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>
            </div>
        )
    }
};

export default connect(state => state)(Home)
