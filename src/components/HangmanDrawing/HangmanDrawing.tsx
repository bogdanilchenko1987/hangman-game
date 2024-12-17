import { BODY_PARTS } from "./BodyParts";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}

// export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
//   return (
//     <div className={styles.hangwrapper}>
//       {BODY_PARTS.slice(0, numberOfGuesses)}
//       <div className={styles.hang} />
//       <div className={styles.hangpole} />
//       <div className={styles.hanghangler} />
//       <div className={styles.hangbase} />
//     </div>
//   );
// }
