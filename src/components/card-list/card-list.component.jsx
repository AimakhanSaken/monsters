import "./card-list.styles.css";
import MonsterCard from "../card/card.component";

const CardList = ({ monsters }) => (
    <div className="card-list">
      {monsters.map((monster) => {
        return <MonsterCard monster={monster} />;
      })}
    </div>
  );

export default CardList;
