import React from 'react'
import ReactDOM from 'react-dom';
import font from "./../img/font.png"
import { Input,Upload, Icon, Modal, Button, } from 'antd';
const { TextArea } = Input;
const onChange1 = e => {
  console.log(e);
};
function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

var Re= require('../Release/release.css')
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class Release extends React.Component{
  state1 = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },

      {
        uid: '-5',
        name: '添加',
        status: 'done',
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });
    state = {
        value: '',
      };
    
      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
      
    render(){
      const { previewVisible, previewImage, fileList } = this.state1;
      const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
        const { value } = this.state;
        return(
            <div className={Re.bg}>
              <div className={Re.bg2}>
                <div className={Re.font}><img src={font} width={200} height={200}/></div>
                <div className={Re.title}> <TextArea placeholder="请描述你的产品" rows={4} allowClear onChange1={onChange1} /> 
     </div>
     <div className={Re.clearfix}>
       <h2 className={Re.up}>请上传实物照片:</h2>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
      <div className={Re.price}> <h2 className={Re.up}>设定单价：</h2><Input className={Re.input} placeholder="开个价吧~" />
     </div>
     <div className={Re.type}> <h2 className={Re.up}>商品类型：</h2><Input placeholder="宠物/电子产品/化妆品" /></div>
     <div className={Re.pull}> <Button type="primary" size="large">发布</Button></div>
      </div>
            </div>
        )
    }
}
