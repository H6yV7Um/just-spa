

import axios from 'axios';


// 同步change实例
export const change = function () {
    $('.text').html('change world');
}

// 异步change实例
export const asyncChange = function (actionType) {
    const self = this;
    axios.get('/.build/${_Component}/data/asyncData.json', {
        dataType: 'json',
        contentType: 'application/json'
    }).then((res) => {
        $('.text').html(res.data.text);
    });
}

// 异步change实例
export const promiseChange = function (actionType) {
    const self = this;
    new Promise(function (resolve, reject) {
        return axios.get('/.build/${_Component}/data/asyncData.json', {
            dataType: 'json',
            contentType: 'application/json'
        }).then((res) => {
            $('.text').html(res.data.text);
        });
    });
}