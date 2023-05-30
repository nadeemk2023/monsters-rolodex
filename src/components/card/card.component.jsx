import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  render() {
    const { email, id, name } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
