import './card.styles.css'

const MonsterCard = ({monster}) => {
        const {name, id, email} = monster;
        return(
            <div className="card-conatiner" key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        ) 
    }

export default MonsterCard;        