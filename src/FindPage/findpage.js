import React from 'react'
import {Link} from 'react-router-dom'
var findpagecss = require('./findpage.css')

export default class register extends React.Component {


    // $(function (){
    //     $(".passinbut").click(function(){
    //         var id=getCookie("id");
    //         var password=$(".aginpassword").val();
    //         var ypassword=$("#inputPassword").val();
    //         var npassword=$(".newspassword").val();
    //         if(password=='' || password==null && ypassword=='' || ypassword==null && npassword=='' || npassword==null){
    //             layer.msg('密码不能为空');
    //         }else{
    //             oldPassword(id,ypassword)
    //         }
            
    //     });
    // })
    
    // //原码判断
    // function oldPassword(id,ypassword){
    //         $.ajax({
    //             url:"/hospitalmanage/user/getuserpas.do",
    //             type:"post",
    //             dataType:"json",
    //             data:{
    //                 "id":id,
    //                 "password":ypassword
    //             },
    //             success:function(data){
    //                 console.log(data)
    //                 if(data.data==true){
    //                     passSubmission();
    //                 }else{
    //                     layer.msg('原密码有误');
    //                     return
    //                 }
                    
    //             }
    //         });
    // }
    
    // //新码判断
    // function passSubmission(){
    //     var id=getCookie("id");
    //     var password=$(".aginpassword").val();
    //     var npassword=$(".newspassword").val();
    //      if(password != npassword){
    //         layer.msg('两次密码输入不一致！');
    //         return;
    //     }else{
    //         loadingSubmission(id,password);
    //     }
    // }
    // function loadingSubmission(id,password){
    //     $.ajax({
    //         url:"/hospitalmanage/user/alertpas.do",
    //         type:"post",
    //         dataType:"json",
    //         data:{
    //             "num":id,
    //             "password":password
    //         },
    //         success:function(data){
    //             if(data.state==0){
    //                 layer.confirm('密码修改成功', {
    //                       btn: ['确定'] //按钮
    //                     }, function(){
    //                         window.history.back(-1);
    //                     });
    //                 $(".aginpassword").val("");
    //                 $(".newspassword").val("");
    //                 $("#inputPassword").val("");
    //             }else{
    //                 layer.msg('密码修改失败');
    //             }
    //         }
    //     });
    // }
    render() {
        return (
            <div className={findpagecss.login}>
                <div>
                <div className={findpagecss.loginheader}>
                    找回密码
                </div>
                <div className={findpagecss.loginheader1}>
                <table className={findpagecss.biaoge}>
                    <p><input type="text" name="username" placeholder="用户名" className={findpagecss.tg}></input></p>
                    <p><input type="text" name="password" placeholder="邮箱" className={findpagecss.tg}></input></p>
                    <p><input type="text" name="password" placeholder="验证码" className={findpagecss.tg1}></input><Link to='/findpage1'><button className={findpagecss.tijiao} type="button"  >提交</button></Link> </p>
                    
                </table>
                </div>
                </div>
            </div>
        )
    }
}