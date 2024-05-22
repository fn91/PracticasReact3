import React, {PureComponent} from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResult";
import filterEmoji from "./filterEmoji";


export default class extends PureComponent{
constructor (props){

super(props);

this.state={

filterEmoji: filterEmoji ("",10)



};


}

handleSearchChange= event => {
this.setState({

filterEmoji: filterEmoji(event.target.value , 10)

});


};

render () {

return (

<div>
  <Header/>
  <SearchInput textChange={this.handleSearchChange}/>
  <EmojiResults emojiData={this.state.filterEmoji}/>
</div>


);


}




}