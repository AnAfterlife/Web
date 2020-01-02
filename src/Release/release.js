import React from 'react'
import ReactDOM from 'react-dom';
import font from "./../img/font.png"
import { Input, Select, Upload,message,Icon,Modal,Button } from 'antd';

const InputGroup = Input.Group;
const { Option } = Select;
const { TextArea } = Input;
// const options = [
//   {
//     value: 'name',
//     label: 'name',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

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
  state = {
    dataSource: [],
  };

  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
  };

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
      //声明state
      constructor(props){
        super(props)
        this.state={}
      }
    //修改state的值
    changeValue=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
resp=()=>{
  //fetch
   var data = {
    "GoodsName":this.state.GoodsName,
    "amount":this.state.amount,
    "ReleasePerson":this.state.ReleasePerson,
    "Dormitory":this.state.Dormitory,
     "describe":this.state.describe,
     "price":this.state.price,
     "qqNumber":this.state.qqNumber,
     "goodstype":this.state.goodstype
   }
   //数据请求
   fetch("/Goods/releaseGoods",{
     method:"post",
     data:data
   }).then(response=>response.json())//json数据格式转化
   .then(result=>{
     if(result.state==1){
      message.info("提交成功，审核中....")
     } else if(result.state==2){
      message.info("提交失败，请完善信息！")
     }
   }).catch(e=>{
     message.error(e);
   })
}
    render(){
      const { previewVisible, previewImage, fileList } = this.state1;
      const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">上传照片</div>
        </div>
      );
        const { value } = this.state;
        return(
            <div className={Re.bg}>
              <div className={Re.bg2}>
                <div className={Re.font}><img src={font} width={200} height={200}/></div>
                <div className={Re.title}> <TextArea type="text" name="describe" placeholder="请描述你的产品"  value={this.state.describe} onChange={e=>this.changeValue(e)} rows={4}  allowClear onChange={onChange1} /> 
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
      <div className={Re.price}> <h2 className={Re.up}>设定单价：</h2><Input type="text" name="price"  value={this.state.price} onChange={e=>this.changeValue(e)} className={Re.input} placeholder="开个价吧~" />
     </div>
     <div className={Re.type}> <h2 className={Re.up}>商品类型：</h2><Input type="text" name="goodstype" value={this.state.goodstype} onChange={e=>this.changeValue(e)}  placeholder="宠物/电子产品/化妆品" /></div>
     <div className={Re.detail}> 
     <h3 className={Re.up}>更多详细信息：</h3>
    <InputGroup compact>
          <Select defaultValue="发布人">
            <Option value="ReleasePerson"  style={{ height: '70%' }}>发布人</Option>
            <Option value="amount" style={{ height: '70%' }}>数量</Option>
            <Option value="Dormitory" style={{ height: '70%' }}>公寓号</Option>
            <Option value="PhoneNumber" style={{ height: '70%' }}>电话号码</Option>
            <Option value="qqNumber" style={{ height: '70%' }}>QQ</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue=""/>
        </InputGroup></div>
     <div className={Re.pull}> <Button onClick={this.resp} type="primary" size="large" style={{ width: '80%' }}>发布</Button>
    </div>
      </div>
            </div>
        )
    }
}
