import React, {Component} from "react";
import GameRound from "./components/GameRound.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                drawings: [],
                playerPortraits: []

            },
            files: []
        };
    }

    componentDidMount() {
        const gameId = window.location.href.match(/\/game\/([A-Za-z0-9-.]*)$/);
        console.log(window.location.href);
        if(gameId !== null) {
            fetch(`http://drawful.yasa.gs/games/${gameId[1]}`)
                .then(data => data.json())
                .then(data => {
                    this.setState({data})
                })
        } else {
            fetch('http://drawful.yasa.gs/index.json')
                .then(data => data.json())
                .then(data => this.setState({files: data.files}))
        }
    }

    render() {
        if (this.state.files.length > 0) {
            return (
                <div className="App">
                    <ul>
                        {this.state.files.map(file => <li key={file}><a href={'/game/' + file}>{file}</a></li>)}
                    </ul>
                </div>
            );  
        }
        return (
            <div className="App">
                <GameRound {...this.state.data}/>
            </div>
        );
    }
}

export default App;
