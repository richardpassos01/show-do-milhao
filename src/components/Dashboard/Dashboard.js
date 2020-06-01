import React, { Component } from 'react';
import Question from './../Question/Question';
import Reaction from './../Reaction/Reaction';
import Icon from './../Icon/Icon';
import FirebaseService from './../../services/FirebaseService';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            callNextReaction: 0,
            reactionState: 'initial'
        };

        this.callReaction = this.callReaction.bind(this);
    }

    componentDidMount = async () => {
        try {
            const data = await FirebaseService.getDataList('questions', 16);
            this.setState({ data });
        } catch (error) {
            console.error(`ERROR: ${error}`);
        }
    }

    callReaction = async (round, state) => {
       await this.setState({ callNextReaction: round, reactionState: state });
    }

    render() {
        if (this.state.data) {
            return (
                <div className='Dasboard'>
                    <div className='Left-content'>
                        <Icon width='300' />
                        <Question changeParentState={this.callReaction} data={this.state.data} />
                    </div>
                    <div className='Right-content'>
                        <Reaction
                            reactionState={this.state.reactionState}
                            callNextReaction={this.state.callNextReaction}
                        />
                    </div>
                </div>
            );
        }
        return (<div>carregando</div>)
    }
}

export default Dashboard;