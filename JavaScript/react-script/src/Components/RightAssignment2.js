import React from 'react';

class RightAssignment2 extends React.Component {
  constructor() {
    super();
    this.state = { numLabel: 1, number: "", errorInfo: "", btn: "Nästa", numbers:[], result:"", show: false }
  }

  showText(event) {
    event.preventDefault();
    let index = this.state.numLabel;
    let num = this.state.number;
    let numArr = this.state.numbers;

    Number(this.state.number) ? this.setState({ numLabel: index + 1, errorInfo: "", number: "", 
                                                numbers: [...numArr,Number(num)]}, () => {
      if (this.state.numLabel === 10) this.setState({ btn: "Sum" })
      if (this.state.numLabel > 10) this.setState({ numLabel: 1, number: "", errorInfo: "", btn: "Nästa", show: true})
    }) : this.setState({ errorInfo: "Wrong number, try again !" });
  }

  handleChange(event) {
    if(this.state.numLabel===1) this.setState({numbers:[]})
    this.setState({ number: event.target.value, show: false });
  }

  show() {
    return (
      this.state.show && <div className="ui pink massive label">Total: {this.state.numbers.reduce((a,b)=> a+b, 0)}</div>     
    );
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={(event) => { this.showText(event) }}>
          <h4 className="ui dividing header">skriva ett tal: <span style={{ color: "red" }}>{this.state.errorInfo}</span></h4>
          <div className="field">
            <label>Nr: {this.state.numLabel}</label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.number} />
          </div>
          <button className="ui button" type="submit">{this.state.btn}</button>
        </form>
        <br />
        {this.show()}
      </div>
    );
  }
}

export default RightAssignment2;