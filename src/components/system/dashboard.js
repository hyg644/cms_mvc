import React, {Component} from 'react';
import Nav from 'components/system/nav/nav';
import SliderBar from 'components/system/sliderBar/sliderBar';
import ContentBody from 'components/system/contentBody/contentBody';

import { Button, DatePicker, Layout} from 'antd';




export default class Dashboard extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    //click
    _handlerClick(){

    }

    render() {
        return (
            <Layout>
                <Nav />
                <Layout>
                    <SliderBar /> 
                    <ContentBody />
                </Layout>
            </Layout>
        )
    }
};