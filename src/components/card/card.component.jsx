import { Component } from "react";
import './card.styles.css'

class MonsterCard extends Component {
    render(){
        const {name, id, email} = this.props.monster;
        return(
            <div className="card-conatiner" key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        ) 
    }
}

export default MonsterCard;        