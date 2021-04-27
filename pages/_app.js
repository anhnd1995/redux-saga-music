import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  //Anything returned here can be access by the client
  return { pageProps: pageProps };
};

export default MyApp;
// export default withRedux(makeStore)(MyApp);
