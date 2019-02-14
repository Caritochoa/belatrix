import React, { Component } from "react";
import EasyTable from "react-easy-table";

var Tokenizer = require("tokenize-text");
var tokenize = new Tokenizer();

class FileReceiver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      txt_array: []
    };
  }
  render() {
    let fileReader;
    let tokens;
    const ciudad = "ciudad";

    const handleFileRead = e => {
      const content = fileReader.result;
      tokens = tokenize.words()(content);
      console.log(tokens);
      //using map method to get into the array.
      tokens.map(word => this.state.txt_array.push(word));
      this.setState({ item: tokens });
      console.log(this.state.txt_array);
    };

    const handleFileChoser = file => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };
    return (
      <div className="">
        <input
          type="file"
          id="file"
          className="input-file"
          accpet=".txt"
          onChange={e => handleFileChoser(e.target.files[0])}
        />

        {this.state.txt_array.map(function(item, index) {
          if (item.value.length > 3) {
            return (
              <div className="card">
                <h2>ciudad</h2>
                <p>{item.value}</p>
              </div>
            );
          } else if (2 <= item.value.length < 3) {
            return (
              <div className="">
                <h3>codigo</h3>
                <p>{item.value}</p>
              </div>
            );
          } else {
          }
        })}
      </div>
    );
  }
}
export default FileReceiver;
