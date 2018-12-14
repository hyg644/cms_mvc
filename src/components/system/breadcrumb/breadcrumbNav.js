
import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter,} from 'react-router-dom';
import {Breadcrumb} from 'antd';
import { browserHistory } from 'react-router';
// const breadcrumbNameMap = {
//     '/dashboard': 'Dashborad',
//     '/dashboard/manageContent': 'Management Content',
//     '/dashboard/manageContent/editContent': 'Edit Contents',
//     '/dashboard/manageContent/subjectManage': 'Subject Management',
//     '/dashboard/manageContent/columnManage': 'Column Management',
//     '/dashborad/managePurview': 'Manage Purview',
//     '/dashborad/manageOperation': 'Manage Operation',
//     '/dashborad/manageSystem': 'Manage System',
// };

// const breadcrumbNameMap=()=>{
//     let routerData= window.location.href.split('/');
//     console.log(routerData)
//     return routerData
// }


const BreadcrumbNav = withRouter((props)=>{
    const {location} = props;
    const pathSnippets = location.pathname.split('/').filter(i=>i);
    // let routerData= window.location.href.split('/');
    // for(var i=0;i<routerData.length;i++){
    //     routerData=routerData.
    // }
    // routerData.forEach((v,k)=>{
    //     routerData[k]
    //    console.log(v,k)
    // })
    let dataRourt
    const extraBreadcrumbItems = pathSnippets.map((_,index)=>{
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        dataRourt=url.split('/')[index+1]
        // console.log(dataRourt)
        return (
            <Breadcrumb.Item key={url} >
                <Link to={url}>{dataRourt}</Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [(
        <Breadcrumb.Item key="CMS">
          <Link to="/dashboard">CMS</Link>
        </Breadcrumb.Item>
      )].concat(extraBreadcrumbItems);
  
    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            {breadcrumbItems}
        </Breadcrumb>
    );
    
});



// export default class BreadcrumbNav extends Component{

//     constructor(props){
//         super(props);
//         //console.log(props)
//         // const Home = withRouter((props) => {
//         //     const {location} = props;
//         //     console.log('this location:' + location);
//         // })
//         // Home()
//     }
   

//     componentWillMount(){
//         console.log(JSON.stringify(this.props))
//         // thisProps = this.props
//         // const Home = withRouter((this.props) => {
//         //     // const {location} = props;
//         //     console.log('this location:' + thisProps);
//         // })

//         // console.log('this.props:' + withRouter(this.props=>{
            
//         // }))
//     }

//     //TODO
//     render(){
//         return (
//             <div>Breadcrumb</div>
//         )
//     }
// }


// const BreadcrumbNav = () =>{
//     return (<div>
//         Breadcrumb item

//          {Home()}
//     </div>
       
//         )
// }

export default BreadcrumbNav;