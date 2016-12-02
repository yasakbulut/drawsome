import React from 'react';
import Autosuggest from 'react-autosuggest';

import './GameSearch.css'

const getSuggestionValue = s => "Game from " + (new Date(s.date)).toLocaleDateString();

const renderSuggestion = (handler) => (s) => (
    <div className="suggestion" onClick={e => handler(s)}>
        <div className="suggestion-header">Game from {(new Date(s.date)).toLocaleDateString()}</div>
        <div className="suggestion-players">{s.players.join(', ')}</div>
    </div>
);

class GameSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.props.games.filter(game => {
            return game.players.some(a => a.includes(inputValue)) || game.keywords.some(a => a.includes(inputValue))
        });
    };

    onChange = (event, { newValue } ) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const {value, suggestions} = this.state;

        const inputProps = {
            placeholder: 'Search for players, titles, lies',
            value,
            onChange: this.onChange
        };

        const handler = this.props.handler || (a => console.log(a));

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion(handler)}
                inputProps={inputProps}
            />
        )
    }
}

export default GameSearch;
