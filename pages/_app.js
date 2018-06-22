import "babel-polyfill"
import React from 'react'
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import {makeStore} from "../model/store";
import BasicLayout from "../components/BasicLayout";
class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }
  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <BasicLayout>
            <Component {...pageProps}/>
          </BasicLayout>
        </Provider>
      </Container>
    );
  }
};
export default withRedux(makeStore, null)(MyApp)