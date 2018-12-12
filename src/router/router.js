import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Bundle from './bundle'

import Login from 'bundle-loader?lazy&name=login!components/login/login';
import Dashboard from 'bundle-loader?lazy&name=dashboard!components/system/dashboard';
import ContentInput from 'bundle-loader?lazy&name=contentInput!components/template/contentInput';
import Counter from 'bundle-loader?lazy&name=counter!components/template/counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!components/template/userInfo';

import ManageContent from 'bundle-loader?lazy&name=manageContent!components/system/manageContent/manageContent';
import ColumnManage from 'bundle-loader?lazy&name=columnManage!components/system/manageContent/columnManage/columnManage';
import EditContent from 'bundle-loader?lazy&name=editContent!components/system/manageContent/editContent/editContent';
import SubjectManage from 'bundle-loader?lazy&name=subjectManage!components/system/manageContent/subjectManage/subjectManage';
import ManageOperation from 'bundle-loader?lazy&name=manageOperation!components/system/manageOperation/manageOperation';
import ManagePurview from 'bundle-loader?lazy&name=managePurview!components/system/managePurview/managePurview';
import ManageSystem from 'bundle-loader?lazy&name=manageSystem!components/system/manageSystem/manageSystem';

import NotFound from 'bundle-loader?lazy&name=NoFound!components/status/notFound';
import Loading from 'bundle-loader?lazy&name=Loading!components/system/loading/loading';

//TODO
// const Loading = function(){
//     return <div>Loading......</div>
// };

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} />: <Loading />
        }
    </Bundle>
);


const getRouter =[
    {
        path: '/',
        component: createComponent(Login),
        exact: true,
    },{
        path: '/login',
        name:'Login',
        component: createComponent(Login),
    },{
        path: '/dashboard',
        name:'Dashboard',
        component: createComponent(Dashboard),
        children:[
            {
                path:'/dashboard/manageContent',
                name:'ManageContent',
                component: createComponent(ManageContent),
                // children:[
                //     {
                //         path:'/dashboard/manageContent/editContent',
                //         name:'EditContent',
                //         component:createComponent(EditContent)
                //     }, {
                //         path:'/dashboard/manageContent/columnManage',
                //         name:'ColumnManage',
                //         component:createComponent(ColumnManage)
                //     },{
                //         path:'/dashboard/manageContent/subjectManage',
                //         name:'SubjectManage',
                //         component:createComponent(SubjectManage)
                //     }
                   
                // ]
            },{
                path:'/dashboard/manageOperation',
                name:'ManageOperation',
                component: createComponent(ManageOperation),
            },{
                path:'/dashboard/managePurview',
                name:'ManagePurview',
                component: createComponent(ManagePurview),
            },{
                path:'/dashboard/manageSystem',
                name:'ManageSystem',
                component: createComponent(ManageSystem),
            },{
                component: createComponent(NotFound),
            }
        ]
    },{
        path: '/userInfo',
        name: 'UserInfo',
        component: createComponent(UserInfo),
    },{
        component: createComponent(NotFound),
    }
]


// export default getRouterLogin;
export {getRouter};
