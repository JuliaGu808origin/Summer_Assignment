import React from 'react';


class LeftAssignment1 extends React.Component {
    constructor(){
        super();
        this.state = {text: "", show: false, result: false}
    }
    showText(event) {
        event.preventDefault();
        this.state.text === "Stefan" ? this.setState({show: true, result:true}) 
                                     : this.setState({show: true, result:false});
    }

    handleChange(event) {
        this.setState({text: event.target.value, show: false});
    }

    show() {
        return (
            this.state.show ? (this.state.result ? <div className="ui pink massive label">Hej Stefan</div> 
                                                      : <div className="ui pink massive label">Jaha du är inte Stefan</div>
                                    )  
                                 : ""
        );
    }

    render() {

        return (
            <div>
                <form className="ui form" onSubmit={(event) => { this.showText(event) }}>
                    <div className="field">
                        <label>skriva text: </label>
                        <input type="text" onChange={(event) => this.handleChange(event)} />
                    </div>
                    <button className="ui button" type="submit">OK</button>
                </form>
                <br />
                {this.show()}
            </div>

        );
    }
}

export default LeftAssignment1;