import React, {Component} from 'react';
import Nav from 'components/system/nav/nav';
import SliderBar from 'components/system/sliderBar/sliderBar';
import ContentBody from 'components/system/contentBody/contentBody';
import FooterBase from 'components/system/footer/footerBase'
import { Button, DatePicker, Layout} from 'antd';


import {renderRoutes} from 'react-router-config';

export default class Dashboard extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            route: props.route
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
                    <ContentBody route={this.props.route} />
                </Layout>
                <FooterBase/>
            </Layout>
        )
    }
};