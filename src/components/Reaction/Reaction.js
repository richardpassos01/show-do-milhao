import React, { Component } from 'react';
import './Reaction.css';
import initialReaction from './../../../public/images/initial.gif';
import rightAnswer1 from './../../../public/images/rightAnswer1.gif';
import rightAnswer2 from './../../../public/images/rightAnswer2.gif';
import rightAnswer3 from './../../../public/images/rightAnswer3.gif';
import rightAnswer4 from './../../../public/images/rightAnswer4.gif';
import wrongAnswer1 from './../../../public/images/wrongAnswer1.gif';
import wrongAnswer2 from './../../../public/images/wrongAnswer2.gif';
import wrongAnswer3 from './../../../public/images/wrongAnswer3.gif';
import wrongAnswer4 from './../../../public/images/wrongAnswer4.gif';

class Reaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reactions: {
                initial: initialReaction,
                valid: {
                    0: rightAnswer1,
                    1: rightAnswer2,
                    2: rightAnswer3,
                    3: rightAnswer4
                },
                invalid: {
                    0: wrongAnswer1,
                    1: wrongAnswer2,
                    2: wrongAnswer3,
                    3: wrongAnswer4
                }
            },
            reactionState: props.reactionState || 'initial',
            callReaction: props.callNextReaction || 0
        };

        this.setupState = this.setupState.bind(this);
    }

    setupState({ callNextReaction, reactionState }) {
        this.setState({ callReaction: callNextReaction || 0, reactionState });
    }

    componentWillReceiveProps({ callNextReaction, reactionState }) {
        this.setupState({ callNextReaction, reactionState })
    }

    render() {
        return (
            <div className='Reaction'>
               <img className='image' src={
                   this.state.reactionState === 'initial' ?
                   this.state.reactions[this.state.reactionState]:
                   this.state.reactions[this.state.reactionState][this.state.callReaction]
                } alt="reaction" />
            </div>
        );
    }
}

export default Reaction;