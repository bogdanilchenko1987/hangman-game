/* eslint-disable react-refresh/only-export-components */
import styles from "./HangmanDrawing.module.css";

const HEAD = <div key={0} className={styles.head} />;

const BODY = <div key={1} className={styles.body} />;

const RIGHT_ARM = <div key={2} className={styles.rightarm} />;

const LEFT_ARM = <div key={3} className={styles.leftarm} />;

const RIGHT_LEG = <div key={4} className={styles.rightleg} />;

const LEFT_LEG = <div key={5} className={styles.leftleg} />;

export const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
];
