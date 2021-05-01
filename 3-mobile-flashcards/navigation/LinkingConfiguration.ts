/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";
import DeckDetails from "../components/DeckDetails";
import DeckDetailsScreen from "../screens/DeckDetailsScreen";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Decks: {
            screens: {
              DecksScreen: "one",
            },
          },
          AddDeck: {
            screens: {
              AddDeckScreen: "two",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
