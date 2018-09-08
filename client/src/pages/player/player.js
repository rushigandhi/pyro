import React, { Component } from 'react';
import './player.css';

import QueueObject from '../../components/queueObject/queueObject';
import MediaController from '../../components/mediaControl/mediaControl';
import AddButton from '../../components/addButton/addButton';


class Player extends Component {
    render() {
        return (
            <div className='player'>
                <MediaController />
                <QueueObject />
                <QueueObject />
                <QueueObject />
                <QueueObject />

                <AddButton />
            </div>
        )
    }
}

export default Player;