import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

//Provider组件让所有的组件可以访问到store。不用手动传,不用手动去监听。
import {Provider} from 'react-redux';
//
import store from './redux/store';
import {BrowserRouter as HashRouter} from 'react-router-dom'; 
import App from 'components/app/app';

import 'style/cmsBase.less';

//开启热更新
if (module.hot) {
    module.hot.accept('components/app/app', () => {
        const NextApp = require('components/app/app').default;
        renderWithHotReload(NextApp);
    });
};

//TODO
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <HashRouter>
                    <RootElement/>
                </HashRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

//初始化
renderWithHotReload(App);