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

// systemManage
import ModelManage from 'bundle-loader?lazy&name=modelManage!components/system/manageSystem/systemManage/modelManage/modelManage';
import ParamterConfig from 'bundle-loader?lazy&name=paramterConfig!components/system/manageSystem/systemManage/paramterConfig/paramterConfig';
import SiteManage from 'bundle-loader?lazy&name=siteManage!components/system/manageSystem/systemManage/siteManage/siteManage';
import InterfaceList from 'bundle-loader?lazy&name=interfaceList!components/system/manageSystem/systemManage/interfaceList/interfaceList';
import PlanManage from 'bundle-loader?lazy&name=planManage!components/system/manageSystem/systemManage/planManage/planManage';
import TemplateManage from 'bundle-loader?lazy&name=templateManage!components/system/manageSystem/systemManage/templateManage/templateManage';
//functoinMaintenance
import AttachmentManage from 'bundle-loader?lazy&name=attachmentManage!components/system/manageSystem/functoinMaintenance/attachmentManage/attachmentManage';
import ClearCacheManage from 'bundle-loader?lazy&name=clearCacheManage!components/system/manageSystem/functoinMaintenance/clearCacheManage/clearCacheManage';


//logMonitoring
import LogList from 'bundle-loader?lazy&name=logList!components/system/manageSystem/logMonitoring/logList/logList';
import SystemMonitoring from 'bundle-loader?lazy&name=systemMonitoring!components/system/manageSystem/logMonitoring/systemMonitoring/systemMonitoring';




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
                children:[
                    {
                        path:'/dashboard/manageContent',
                        exact: true,
                        name:'manageContentDefault',
                        component:createComponent(EditContent)
                    },{
                        path:'/dashboard/manageContent/editContent',
                        name:'EditContent',
                        component:createComponent(EditContent)
                    }, {
                        path:'/dashboard/manageContent/columnManage',
                        name:'ColumnManage',
                        component:createComponent(ColumnManage)
                    },{
                        path:'/dashboard/manageContent/subjectManage',
                        name:'SubjectManage',
                        component:createComponent(SubjectManage)
                    }
                   
                ]
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
                // children:[
                //     {
                //         path:'/dashboard/manageSystem/systemManage',
                //         exact:true,
                //         name:'systemManageDefault',
                //         component: createComponent(SiteManage),
                //         children:[
                //             {
                //                 path:'/dashboard/manageSystem/systemManage/siteManage',
                //                 name:'SiteManage',
                //                 component:createComponent(SiteManage)           
                //             },
                //         ]
                //     },{
                //         path:'/dashboard/manageSystem/functoinMaintenance',
                //         exact:true,
                //         name:'functoinMaintenanceDefault',
                //         component: createComponent(ManageSystem),
                //     },{
                //         path:'/dashboard/manageSystem/logMonitoring',
                //         exact:true,
                //         name:'logMonitoringDefault',
                //         component: createComponent(ManageSystem),
                //     }
                // ]
                children:[
                    {
                        path:'/dashboard/manageSystem',
                        exact: true,
                        name:'manageSystemDefault',
                        component:createComponent(SiteManage)
                    },{
                        path:'/dashboard/manageSystem/systemManage/modelManage',
                        name:'ModelManage',
                        component:createComponent(ModelManage)
                    },{
                        path:'/dashboard/manageSystem/systemManage/paramterConfig',
                        name:'ParamterConfig',
                        component:createComponent(ParamterConfig)
                    },{
                        path:'/dashboard/manageSystem/systemManage/siteManage',
                        name:'SiteManage',
                        component:createComponent(SiteManage)
                    },{
                        path:'/dashboard/manageSystem/systemManage/interfaceList',
                        name:'InterfaceList',
                        component:createComponent(InterfaceList)
                    },{
                        path:'/dashboard/manageSystem/systemManage/planManage',
                        name:'PlanManage',
                        component:createComponent(PlanManage)
                    },{
                        path:'/dashboard/manageSystem/systemManage/templateManage',
                        name:'TemplateManage',
                        component:createComponent(TemplateManage)
                    },{
                        path:'/dashboard/manageSystem/functoinMaintenance/attachmentManage',
                        name:'AttachmentManage',
                        component:createComponent(AttachmentManage)
                    },{
                        path:'/dashboard/manageSystem/functoinMaintenance/clearCacheManage',
                        name:'ClearCacheManage',
                        component:createComponent(ClearCacheManage)
                    },{
                        path:'/dashboard/manageSystem/logMonitoring/LogList',
                        name:'LogList',
                        component:createComponent(LogList)
                    },{
                        path:'/dashboard/manageSystem/logMonitoring/systemMonitoring',
                        name:'SystemMonitoring',
                        component:createComponent(SystemMonitoring)
                    }
                ]
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
