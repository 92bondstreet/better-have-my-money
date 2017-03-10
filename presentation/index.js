// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#021C1E"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress={"none"} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Time to make money
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Build online business
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Better have my money
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How?
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              Sell something
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              Sell service(s)
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              Monetize traffic
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              From day to day automation
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              ...
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={2} textColor="white">
              Front (css framework, lib...)
            </Heading>
            <Heading size={2} fit caps lineHeight={2} textColor="white">
              Api (with at least GET and POST)
            </Heading>
            <Heading size={2} fit caps lineHeight={2} textColor="white">
              Nosql database (mongodb, redis...)
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <List ordered textColor="white">
              <ListItem>Create repositorie(s) on Github</ListItem>
              <ListItem>Think and do</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Focus on Javascript Ecosystem
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
							Focus on User engagement
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
            	Team Work
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
            	Alone
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
