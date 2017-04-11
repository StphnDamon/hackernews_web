import React, { Component } from 'react';
import { Button } from 'stardust';
import { graphql } from 'react-apollo';
import { voteDownMutation, voteUpMutation } from '../graphql/voteMutation';

class HandleVote extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleVote = this.handleVote.bind(this);
    }

    handleVote(event) { 
        event.preventDefault();

        this.props.mutate({
            variables: {id: this.props.url._id}
        }).then(res => {
            this.props.refetch();
        });
    }

    render() {
        return (
            <Button 
                size='mini'
                color={this.state.action === 'up' ? 'green' : 'red'}
                onClick={this.handleVote}
            > 
                {this.state.action === 'up' ? '+' : '-'} {this.state.vote}
            </Button>
        )
    }
};

class HandleVoteUp extends HandleVote {
    constructor(props) {
        super(props);

        this.state.action = 'up';
        this.state.vote = this.props.vote;
    }
}

class HandleVoteDown extends HandleVote {
    constructor(props) {
        super(props);

        this.state.action = 'down';
        this.state.vote = this.props.vote;
    }
}

const VoteUpMutation = graphql(voteUpMutation)(HandleVoteUp);
const VoteDownMutation = graphql(voteDownMutation)(HandleVoteDown);

export default class HandleVoteFactory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: this.props.url,
            vote: this.props.vote
        }
    }

    render() {
        if (this.props.action === 'up') {
            return <VoteUpMutation vote={ this.state.vote } url={ this.state.url } refetch={ this.props.refetch } />
        } else {
            return <VoteDownMutation vote={ this.state.vote } url={ this.state.url } refetch={ this.props.refetch } />
        }
    }
};
