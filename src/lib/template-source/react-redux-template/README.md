﻿```html
    <link rel="stylesheet" href="//i.gtimg.cn/qzone/biz/gdt/lib/bootstrap-3.3.7/css/bootstrap-base64font.min.css" />
    <link rel="stylesheet" href='//i.gtimg.cn/qzone/biz/gdt/lib/bootstrap-3.3.7/css/bootstrap-theme.css?max_age=31536000' /> 
    <div id="test"></div>

```

```css
body {
    background: #ccc;
}
```

```javascript

import { connect } from 'react-redux';
import ${_Component} from './index.jsx';

import './src/index.less';

//注入 mock请求返回数据
Mock.mock('/.build/${_Component}/data/asyncData.json', {
    "text": "hello first and hi Mock Data "
});

const props = {
    name: 'world'
};

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  };
}

const mapDispatchToProps = (state, ownProps) => {
  return {};
}

const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(${_Component})

export default <Component {...props}/>;

```

#### 详细文档
---