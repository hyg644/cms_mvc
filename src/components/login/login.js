import React, {Component} from 'react';
import NavBase from 'components/system/nav/navBase';
import FooterBase from 'components/system/footer/footerBase';
import request,{post} from 'utils/Request';

import {Form, Icon, Input, Button, Checkbox, Row, Col, Layout, Select} from 'antd';

const { Content, } = Layout;
const Option = Select.Option;
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      token:'',
    }

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

  }
  
  componentwillmount(){
    
    // const {clientHeight} = this.refDom;
    // console.log('token:'+ clientHeight);
  }

  handleChange =(value) =>{
    console.log(`selected ${value}`);
    //TODO 存储语言状态
    localStorage.locale = value;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //TODO 存储语言状态
        localStorage.locale = values.locale;
        //TODO 提交
        post('http://localhost:8213/login',{
            username:values.username,
            password:values.password,
        }).then((res)=>{
          console.log('res:'+res)
          if(res){
            this.props.history.push('/dashboard');
          }
        })
      }
    });
  }


  

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        
        <NavBase />    
        
        <Content>
          <Row type='flex' justify='center' style={{paddingTop:'100px',paddingBottom:'200px'}}>
            <Col span={8}>       
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem  label="Username:" >
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem label="Password:">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem label="Language:">
                  {getFieldDecorator('locale', {
                    rules: [{ message: 'Please select your Language!' }],
                    initialValue:'zh_CN'
                  })(
                    <Select onChange={this.handleChange}>
                      <Option value="zh_CN">中文简体</Option>
                      <Option value="en_US">English</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                  )}
                  <a className="login-form-forgot" href="">Forgot password</a> <br></br>

                  <Button type="primary" htmlType="submit" className="login-form-button"> Log in </Button>
                  Or <a href="">register now!</a>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Content>
          
        <FooterBase />
      </Layout>

      
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;