// import React, { Component, Fragment } from 'react';
// import { Icon } from 'antd';//使用了一个antd的icon，如果你的项目没有使用antd，可以自己写个按钮样式，无须引入
// import { OutterContainer, InputOutter, BtnContainer, SendBtn, EmojiTab } from './style' //使用styled-compoents自定义的样式组件，这样做可以避免组件里出现过多css代码
// export default class HyperTextInput extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             textareaH: '8vw',
//             hyperText:"",
//             showEmojiTab: false,
//             emojiList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
//         }
//     }
//     render() {
//         return (
//     //         <Fragment>
//     //             <OutterContainer>
//     //                 <InputOutter>
//     //                         {/*用可编辑的div代替textarea承担输入功能:*/}
//     //                         <div className='inputDiv'
//     //                         ref={(inputDiv) => { this.inputDiv = inputDiv }} 
//     //                         contentEditable={true}
//     //                         style={{ height: 'auto' }}
//     //                         onKeyUp={this.divInput.bind(this)}
//     //                         />
//     //                     <BtnContainer>
//     //                         <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"}}>
//     //                         <Icon
//     //                             onClick={this.showEmojiTab.bind(this)}
//     //                             type="smile"
//     //                             style={{ color: this.state.showEmojiTab ? '#1890FF' : '#555', fontSize: "1.2em",outline:"none",display:"flex",justifyContent:"center",alignItems:"center" }}
//     //                         />
//     //                         {
//     //                             this.state.hyperText?
//     //                             <SendBtn onClick={this.sendMsg.bind(this)}>发送</SendBtn>:
//     //                             <SendBtn style={{color:"#999",background:"#ddd"}}>发送</SendBtn>
//     //                         }
//     //                         </div>
//     //                     </BtnContainer>
//     //                 </InputOutter>
//     //                 {/*emoji表情选择栏，默认折叠，点击图标展开*/}
//     //                 <EmojiTab style={{height:this.state.showEmojiTab?"40vw":"0"}}>
//     //                     {this.state.emojiList.map((item, index) => <div key={index}>
//     //                         <img alt="" data-index={index} onClick={this.chooseEmoji.bind(this,item)} src={`/emoji/emoji${item}.svg`} />
//     //                     </div>)}
//     //                 </EmojiTab>
//     //             </OutterContainer>
//     //         </Fragment>
      
//     <div></div>)
//     }
//     //控制表情栏展开折叠
//     showEmojiTab() {
//         this.setState({
//             showEmojiTab: !this.state.showEmojiTab
//         })
//     }
//     //选择表情
//     chooseEmoji(index){
//         this.inputDiv.innerHTML+=`<img src="/emoji/emoji${index}.svg" />`;
//         this.divInput.call(this);
//     }
//     //文本框输入事件：
//     divInput() {
//         this.setState({
//             hyperText:this.inputDiv.innerHTML
//         })
//     }
//     //发送消息事件：
//     sendMsg(){
//         console.log('即将发送的msg内容:\n',this.state.hyperText)
//         this.inputDiv.innerHTML='';
//         this.setState({
//             hyperText:'',
//             showEmojiTab: false
//         })
//     }
// }
