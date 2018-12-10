import React, {Component} from 'react';
import NavBase from 'components/system/nav/navBase'
import FooterBase from 'components/system/footer/footerBase'

import {Form, Icon, Input, Button, Checkbox, Row, Col, Layout} from 'antd';

const { Content, } = Layout;

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      token:'',
    }

  }
  
  componentwillmount(){
    
    const {clientHeight} = this.refDom;
    console.log('token:'+ clientHeight);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        
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
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
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