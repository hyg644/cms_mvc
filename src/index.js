import React from 'react';
import ReactDom from 'react-dom';
// import getRouter from 'router/router';
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './components/App/App'
// import '../mock/mock'
// if(MOCK){
//     require('../mock/mock');
// }
// 初始化
// renderWithHotReload(getRouter());
renderWithHotReload(App)
// 热更新
if(module.hot){
    module.hot.accept('./components/App/App', () => {
        const getRouter = require('./components/App/App').default;
        renderWithHotReload(NextApp);
    });
}
function renderWithHotReload(RootElement){
    ReactDom.render(
        <AppContainer>
            {<Provider store={store}>
                <RootElement/>
            </Provider>}
        </AppContainer>,document.getElementById('app')
    )
}

// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');