import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../../redux/actions/userInfo';

class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        // console.log(this.props.userInfo)
        return (
            <div>
                {
                    isLoading? 'loading...':(
                        errorMsg ? errorMsg : 
                        <div>
                            <p>用户信息</p>
                            <p>username：{userInfo.name}</p>
                            <p>userintro: {userInfo.intro}</p>
                        </div>
                    )
                }

                <button onClick = {()=> this.props.getUserInfo()}>发起请求</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo:state.userInfo}),{getUserInfo})(UserInfo);