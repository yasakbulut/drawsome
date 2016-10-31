import React, {Component} from "react";
import GameRound from "./components/GameRound.js";
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                drawings: [],
                playerPortraits: []

            },
            files: [],
            gameFile: null,
            loading: false
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('http://drawsome.yasa.gs/index.json')
            .then(data => data.json())
            .then(data => this.setState({files: data.files, loading: false}))
    }

    displayGameFile(gameFile) {
        this.setState({loading: true});
        fetch(`http://drawsome.yasa.gs/games/${gameFile}`)
            .then(data => data.json())
            .then(data => {
                this.setState({data, gameFile, loading: false})
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
                        <h1>drawsome</h1>
                        <ol>
                            {this.state.files.map(file => <li key={file} className={file === this.state.gameFile ? 'active': ''}><a onClick={event => this.displayGameFile(file)}>{file}</a></li>)}
                        </ol>
                    </div>
                    <div>{this.state.loading ? 'Loading' : ''}</div>
                    { this.displaySelectedGame(this.state.data) }
                </div>
            );
    }
}

export default App;
