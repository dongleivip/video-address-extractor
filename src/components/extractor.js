import React from 'react';
import parsePage from './pageParse';

class Extractor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      result: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const videoUrl = parsePage(this.state.inputVal)
    this.setState({result: videoUrl});
  }

  render() {
    return (
      <div>
        <p>输入网页链接：</p>
        <div>
          <input value={this.state.inputVal} onChange={ (event) => {this.setState({inputVal: event.target.value})} } />
          <button onClick={this.handleClick}>解析</button>
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