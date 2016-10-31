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
            gameFile: null
        };
    }

    componentDidMount() {
        fetch('http://drawsome.yasa.gs/index.json')
            .then(data => data.json())
            .then(data => this.setState({files: data.files}))
    }

    displayGameFile(gameFile) {
        fetch(`http://drawsome.yasa.gs/games/${gameFile}`)
            .then(data => data.json())
            .then(data => {
                this.setState({data, gameFile})
            })
    }

    render() {
        if (this.state.gameFile === null) {
            return (
                <div className="game-list">
                    <h1>drawsome</h1>
                    <ol>
                        {this.state.files.map(file => <li key={file}><a onClick={event => this.displayGameFile(file)}>{file}</a></li>)}
                    </ol>
                </div>
            );
        }
        return (
            <div className="game-detail">
                <div className="breadcrumbs">
                    <a href="/">Home</a> > {this.state.gameFile}
                </div>
                <GameRound {...this.state.data}/>
            </div>
        );
    }
}

export default App;
