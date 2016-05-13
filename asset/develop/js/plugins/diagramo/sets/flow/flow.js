"use strict";

/*
Copyright [2014] [Diagramo]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

figureSets["Flow"] = {
    name : '数据分流',
    description : 'A set of figures needed to draw state diagrams',
    figures: [
        {figureFunction: "ImageClick", image: "flow-ABTest.png", outCount: 2, figureType: 10, name: "AB测试"},
        {figureFunction: "Image", image: "flow-active.png", outCount: 5, figureType: 11, name: "活跃度"},
        {figureFunction: "ImageClick", image: "flow-group.png", outCount: 0, figureType: 12, name: "选择分组"},
        {figureFunction: "Image", image: "flow-level.png", outCount: 4, figureType: 13, name: "等级"},
        {figureFunction: "Image", image: "flow-oldmember.png", outCount: 3, figureType: 14, name: "新老会员"}

    ]
}


