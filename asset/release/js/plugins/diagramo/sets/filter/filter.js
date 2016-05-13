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

figureSets["Filter"] = {
    name : '数据过滤',
    description : 'A set of figures needed to draw state diagrams',
    figures: [
        {figureFunction: "ImageClick", image: "filter-level.png", outCount: 2, figureType: 3, name: "等级"},
        {figureFunction: "ImageClick", image: "filter-active.png", outCount: 2, figureType: 4, name: "活跃度"},
        {figureFunction: "ImageClick", image: "filter-seat.png", outCount: 2, figureType: 5, name: "所在地"},
        {figureFunction: "ImageClick", image: "filter-oldmember.png", outCount: 2, figureType: 6, name: "新老会员"},
        {figureFunction: "ImageClick", image: "filter-advance.png", outCount: 2, figureType: 7, name: "高级会员"}
    ]
}


