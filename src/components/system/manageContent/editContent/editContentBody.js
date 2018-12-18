//TODO 内容编辑管理
import React,{Component} from 'react';
import {Pagination} from 'antd';

import {FormattedMessage} from 'react-intl';

export default class EditContentBody extends Component {
     onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
      }

    render(){
        return (
            <div>
                FormattedMessage: <FormattedMessage id="intl.resendVerifyCode" defaultMessage={'Resend'}/>
                 <br />
                内容编辑-详情
                <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
            </div>
        )}
}