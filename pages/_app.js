import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      100: "teal",
      200: "teal",
      300: "teal",
      400: "teal",
      500: "teal",
      600: "teal",
      700: "teal",
      800: "teal",
      900: "teal",
    },
  },
  shadows: {
    outline: "0 0 0 3px teal",
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
