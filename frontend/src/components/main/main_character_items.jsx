import React from 'react';
import ava1 from './avatars/character_ava1.png'
import ava2 from './avatars/character_ava2.png'
import ava3 from './avatars/character_ava3.png'
import { Link } from 'react-router-dom'

class MainCharacterItems extends React.Component {
    render() {
        let displayAvatar;
        if (this.props.character.characterSprite === 1) {
            displayAvatar = (
                <img className="character-avatar-image" src={ava1} alt="mustache-man"/>
            )
        } else if (this.props.character.characterSprite === 2) {
            displayAvatar = (
                <img className="character-avatar-image" src={ava2} alt="robber"/>
            )
        } else {
            displayAvatar = (
                <img className="character-avatar-image" src={ava3} alt="superwoman"/>
            )
        }
        return (
            <Link to={`/main/${this.props.character._id}`} className="side-bar-character-box">
                    <div className="side-bar-character-image">
                        {displayAvatar}
                    </div>
                    <div className="side-bar-character-info">
                        <div className="character-name-level">
                            <p className="character-name">{this.props.character.name}</p>
                        </div>
                        <div className="character-name-level">
                            <p>Level: {this.props.character.level}</p>
                        </div>
                        <div className="side-bar-character-stats">
                            <p className="character-stats">
                                <img src="https://img.icons8.com/cotton/30/000000/like--v1.png" alt="heart"/>
                                {this.props.character.totalHP}
                            </p>
                            <p className="character-stats">
                                <img src="https://img.icons8.com/office/30/000000/sword.png" alt="sword" />
                                {this.props.character.meleeAttack}
                            </p>
                            <p className="character-stats">
                                <img src="https://img.icons8.com/cotton/30/000000/archers-bow.png" alt="bow" />
                                {this.props.character.rangedAttack}
                            </p>
                            <p className="character-stats">
                                <img src="https://img.icons8.com/color/30/000000/boots.png" alt="boots" />
                                {this.props.character.movementSpeed}
                            </p>
                            <p className="character-stats">
                                <img src="https://img.icons8.com/cotton/30/000000/shield.png" alt="shield" />
                                {this.props.character.defense}
                            </p>
                        </div>
                    </div>
            </Link>
        );
    }
};

export default MainCharacterItems;