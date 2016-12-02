import React, {Component} from "react";
import GameRound from "./components/GameRound";
import GameSearch from "./components/GameSearch";
import './App.css'

const baseUrl = '/api';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            selectedGame: null,
            game: {
                metadata: {},
                game: {
                    drawings: [],
                    playerPortraits: []

                }
            },
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(baseUrl + '/games')
            .then(data => data.json())
            .then(data => this.setState({games: data, loading: false}))
    }

    displayGameFile(game) {
        this.setState({loading: true});
        fetch(baseUrl + '/games/' + game.id)
            .then(data => data.json())
            .then(data => {
                this.setState({game: data, selectedGame: game.id, loading: false})
            })
    }

    displaySelectedGame(data){
        return (
            <div className="game-detail">
                <GameRound {...data}/>
            </div>
        )
    }

    render() {
            return (
                <div className="app">
                    <div className="game-list">
                        <GameSearch games={this.state.games} handler={event => this.displayGameFile(event)}/>
                    </div>
                    <div>{this.state.loading ? 'Loading' : ''}</div>
                    { this.displaySelectedGame(this.state.game.game) }
                </div>
            );
    }
}

export default App;
