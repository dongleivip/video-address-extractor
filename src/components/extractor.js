import React from 'react';

class Extractor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      result: '',
    }
  }

  render() {
    return (
      <div>
        <p>输入网页链接：</p>
        <div>
          <input value={this.state.inputVal} onChange={ (event) => {this.setState({inputVal: event.target.value})} } />
          <button onClick={ () => this.setState({result: 'abc'})}>解析</button>
        </div>


        <div>
          <div style={this.state.result ? {} : { display: 'none' }} >
            <div>链接</div>
            {this.state.result}
          </div>
        </div>

      </div>);
  }
}

export default Extractor;