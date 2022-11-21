import React from 'react';
import getVideoUrls from './pageParse';

class Extractor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // inputVal: 'https://mp.weixin.qq.com/s/nySwvV9DxZuj1hkAvBfF_g',
      inputVal: '',
      result: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const videoUrl = await getVideoUrls(this.state.inputVal)
    // const videoUrl = ['Item 1', 'Item 2', 'Item 3'];
    this.setState({ result: videoUrl });
  }

  render() {
    return (
      <div>
        <p>输入网页链接：</p>
        <div>
          <input value={this.state.inputVal} onChange={(event) => { this.setState({ inputVal: event.target.value }) }} />
          <button onClick={this.handleClick}>解析</button>
        </div>
        <div>
          <div style={this.state.result.length > 0 ? {} : { display: 'none' }} >
            <div>优先使用包含"f10003"的链接</div>
            <ul>
              {
                this.state.result.map((item, index) =>
                  <li key={index}>{item}</li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Extractor;
