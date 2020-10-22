import React from 'react';

type MyProps = {
    hasGameStarted: boolean,
    onAddPlayer: any

};
type MyState = {

    playerName: string,
    playerLevel: string

};

class GroupModeAddPlayer extends React.Component<MyProps, MyState> {

    constructor(props : MyProps) {
        super(props);
        this.state = {playerName: '', playerLevel:'Junior'};
    }

    handleChangeName = (event: React.FormEvent<HTMLInputElement>)  => {
        this.setState({playerName: event.currentTarget.value});
    }

    handleChangeLevel = (event: React.FormEvent<HTMLSelectElement>) => {
        this.setState({playerLevel: event.currentTarget.value});
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!this.state.playerName){
            return;
        }
        this.props.onAddPlayer(this.state.playerName, this.state.playerLevel);

        this.setState({playerName: ""});
    }

    render() {
        if(this.props.hasGameStarted){
            return (<div/>);
        }
        return (
            <div className="addPlayer">
            <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Playername" value={this.state.playerName} onChange={this.handleChangeName} />

                    <select value={this.state.playerLevel} onChange={this.handleChangeLevel} >
                        <option value="Junior">Junior</option>
                        <option value="Middle">Middle</option>
                        <option value="Senior">Senior</option>
                        <option value="Principal">Principal</option>
                        <option value="Distinguished">Distinguished</option>
                    </select>

                <input type="submit" value="Add Player" />
            </form>
            </div>
        );
    }
}

export default GroupModeAddPlayer;