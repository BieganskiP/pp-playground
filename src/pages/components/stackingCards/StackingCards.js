import css from "./StackingCards.module.css";

export default function StackingCards() {
  return (
    <div className={css.wrapper}>
      <div className={css.cardGroup}>
        <div className={`${css.card} ${css.smallCard}`}></div>
        <div className={`${css.card} ${css.bigCard}`}></div>
        <div className={`${css.card} ${css.smallCard}`}></div>
        <div className={`${css.card} ${css.bigCard}`}></div>
        <div className={`${css.card} ${css.smallCard}`}></div>
        <div className={`${css.card} ${css.bigCard}`}></div>
        <div className={`${css.card} ${css.smallCard}`}></div>
        <div className={`${css.card} ${css.bigCard}`}></div>
      </div>
    </div>
  );
}
