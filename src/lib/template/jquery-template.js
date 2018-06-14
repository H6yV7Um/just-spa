


module.exports = function reactTemplate(componentName) {
    return `// 引入组件
import Component from '../.build/${componentName}/entry';
import template from '../.build/${componentName}/template';

/**
 * 用于从调试页面中注入mock规则
 * 
 * @param {any} mockDataSet 
 */
window.setMockData = function(mockDataSet, callback) {
    if (Mock) {
        for (let mockRule in mockDataSet) {
            Mock.mock(mockRule, mockDataSet[mockRule].mockType, mockDataSet[mockRule].mockData);
        }
        callback && callback()
    }
}

/**
 * 用于从调试页面中移除所有规则
 * 
 * @param {any} key 
 * @param {any} callback 
 */
window.removeMockData = function(callback, key) {

    if (Mock && key) {
        delete Mock._mocked[key];
    } else if(Mock) {
        Mock._mocked = {};
    }
    callback && callback();
}

document.getElementById('template').outerHTML = template;

render(Component);

function render(Component) {
    document.getElementById('root').innerHTML = Component();
}

// 进行热替换调试组件内容
if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept([
        '../.build/${componentName}/index',
        '../.build/${componentName}/entry'
    ], (err) => {
        if (err) {
            console.log(err);
        }
        const NextComponent = require('../.build/${componentName}/entry').default;

        render(NextComponent);
    });
};`

}