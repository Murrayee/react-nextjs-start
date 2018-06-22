import React, {Component} from 'react'
import Head from 'next/head'
import {connect} from "react-redux";
import {enquireScreen} from 'enquire-js';
import Header from '../components/Header'
import Footer from '../components/Footer'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Help extends Component {
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
        我是帮助页
        <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>
      </div>
    )
  }
};

export default connect(state => state)(Help)
