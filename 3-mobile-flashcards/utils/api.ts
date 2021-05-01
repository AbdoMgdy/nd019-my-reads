import AsyncStorage from "@react-native-community/async-storage";
import { DeckListType, DeckType, QuestionType } from "../types";
import decks from "./_DATA";
import * as Notifications from "expo-notifications";
const DECKS_STORAGE_KEY = "MobileFlashcards:decks";
const NOTIFICATIONS_STORAGE_KEY = "MobileFlashcard:notifications";

export const getData = (): DeckListType => {
  return decks;
};

export const getDecks = async () => {
  try {
    const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (!data) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
    return data === null ? decks : JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

export const getDeck = async (id: string) => {
  try {
    const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return JSON.parse(data!)[id];
  } catch (err) {
    console.log(err);
  }
};

export const saveDeckTitle = async (title: string) => {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const removeDeck = async (id: string) => {
  try {
    const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const decks = JSON.parse(data!);
    decks[id] = undefined;
    delete decks[id];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  } catch (err) {
    console.log(err);
  }
};

export const addCardToDeck = async (title: string, card: QuestionType) => {
  try {
    const deck: DeckType = await getDeck(title);

    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
};
const CHANNEL_ID = "DailyReminder";

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATIONS_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
    .then(JSON.parse as any)
    .then((data) => {
      if (!data) {
        Notifications.getPermissionsAsync().then(({ status }: any) => {
          if (status === "granted") {
            Notifications.setNotificationHandler({
              handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
              }),
            });

            Notifications.cancelAllScheduledNotificationsAsync();
            const time = new Date();
            time.setDate(time.getDate() + 1);
            time.setHours(12);
            Notifications.scheduleNotificationAsync({
              content: {
                title: "Reminder",
                body: "Todaay's Flash Cards",
              },
              trigger: time,
            });

            AsyncStorage.setItem(
              NOTIFICATIONS_STORAGE_KEY,
              JSON.stringify(true)
            );
          }
        });
      }
    });
};
