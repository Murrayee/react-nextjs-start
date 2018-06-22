import React from 'react';
import Head from 'next/head';
import "../styles/index.less";

export default class BasicLayout extends React.Component {
  render() {
    const {
      children,
      title = 'This is the default title'
    } = this.props;
    return (
      <div>
        <Head>
          <title>利剑速递</title>
          <meta
            name="App-Config"
            content="fullscreen=yes,useHistoryState=yes,transition=yes"/>
          <meta content="yes" name="apple-mobile-web-app-capable"/>
          <meta charSet='utf-8'/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="description" content=""/>
          <meta name="keywords" content=""/>
          <meta name="author" content="name, email@gmail.com"/>
          <meta name="robots" content="index,follow"/>
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no,viewport-fit=cover"/>
          <meta name="apple-mobile-web-app-title" content="spu-detail"/>
          <meta name="format-detection" content="telphone=no, email=no"/>
          <meta name="renderer" content="webkit"/>
          <meta httpEquiv="Cache-Control" content="no-siteapp"/>
          <meta name="HandheldFriendly" content="true"/>
          <meta name="x5-page-mode" content="app"/>
          <meta property="og:url" content="http://www.mercku.tech"/>
          <meta property="og:title" content="Mercku"/>
          <meta
            property="og:description"
            content="wireless communication solution provider"/>
          <meta
            property="og:image"
            content="http://www.mercku.tech/Campaign-Card-Image_3.png"/>
          <meta name="msapplication-tap-highlight" content="no"/>
        </Head>
        {children}
      </div>
    );
  }
}
