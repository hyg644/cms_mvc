
import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter,} from 'react-router-dom';
import {Breadcrumb} from 'antd';

const breadcrumbNameMap = {
    '/dashboard': 'Dashborad',
    '/dashboard/manageContent': 'Management Content',
    '/dashboard/manageContent/editContent': 'Edit Contents',
    '/dashboard/manageContent/subjectManage': 'Subject Management',
    '/dashboard/manageContent/columnManage': 'Column Management',
    '/dashborad/managePurview': 'Manage Purview',
    '/dashborad/manageOperation': 'Manage Operation',
    '/dashborad/manageSystem': 'Manage System',
};


const BreadcrumbNav = withRouter((props)=>{
    const {location} = props;
    const pathSnippets = location.pathname.split('/').filter(i=>i);
    const extraBreadcrumbItems = pathSnippets.map((_,index)=>{
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url} >
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
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