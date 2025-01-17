/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

export default {
    name: 'van-radio-group',
    type: 'van-radio-group',
    displayName: '单选框',
    icon: 'bk-drag-radio',
    group: '表单',
    document: 'https://vant-contrib.gitee.io/vant/v2/#/zh-CN/radio',
    events: [
        {
            name: 'click',
            tips: '点击单选框时调用该事件函数，事件回调参数 (event: Event)'
        }
    ],
    styles: [
        'position',
        {
            name: 'size',
            include: ['display']
        },
        'margin',
        'pointer',
        'opacity'
    ],
    directives: [
        {
            type: 'v-model',
            prop: 'value'
        }
    ],
    props: {
        value: {
            type: ['string', 'number', 'boolean'],
            val: '',
            displayName: '选中的数值'
        },
        direction: {
            type: 'string',
            val: 'horizontal',
            options: ['vertical', 'horizontal'],
            displayName: '排列方向',
            tips: '排列方向'
        },
        'icon-size': {
            type: ['string', 'number'],
            val: '20px',
            displayName: '单选框大小',
            tips: '所有单选框的图标大小，默认单位为 px'
        },
        'checked-color': {
            type: 'color',
            val: '#1989fa',
            displayName: '选中时颜色样式',
            tips: '所有单选框的选中状态颜色'
        }
    },
    slots: {
        default: {
            name: ['van-radio'],
            type: ['list', 'remote'],
            displayName: '可选项',
            tips: '默认插槽，填写的数据需要是数组且每个元素需包含label和value字段',
            remoteValidate (data) {
                if (!Array.isArray(data)) return '返回值需要是数组'
            },
            keys: [
                { id: 'label', label: '名称', tips: '从数据中获取名称的字段key，不填取 label 字段' },
                { id: 'value', label: '值', tips: '从数据中获取值的字段key，不填取 value 字段' },
                { id: 'disabled', label: '是否禁用', tips: '从数据中获取是否禁用的字段key，不填取 disabled 字段' }
            ],
            val: [
                { label: '选项一', value: '1', disabled: false },
                { label: '选项二', value: '2', disabled: false },
                { label: '选项三', value: '3', disabled: false }
            ],
            payload: {}
        }
    }
}
