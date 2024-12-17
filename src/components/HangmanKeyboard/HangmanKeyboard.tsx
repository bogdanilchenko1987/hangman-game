import styles from "./Hangmankeyboard.module.css";
import { KEYS } from "./Keys";

type HangmankeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedletter: (letter: string) => void;
  disabled?: boolean;
};

export function Hangmankeyboard({
  activeLetters,
  inactiveLetters,
  addGuessedletter,
  disabled = false,
}: HangmankeyboardProps) {
  return (
    <div className={styles.grid}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedletter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
