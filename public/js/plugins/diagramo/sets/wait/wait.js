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

figureSets["Wait"] = {
    name : '等待',
    description : 'A set of figures needed to draw state diagrams',
    figures: [
        {figureFunction: "ImageClick", image: "wait-time.png", outCount: 1, figureType: 25, name: "等待时间"},
        {figureFunction: "ImageClick", image: "wait-open.png", outCount: 2, figureType: 26, name: "等待打开"},
        {figureFunction: "ImageClick", image: "wait-click.png", outCount: 2, figureType: 27, name: "等待点击"},
        {figureFunction: "ImageClick", image: "wait-take.png", outCount: 2, figureType: 28, name: "等待收货"},
        {figureFunction: "ImageClick", image: "wait-order.png", outCount: 2, figureType: 29, name: "等待下单"},
        {figureFunction: "ImageClick", image: "wait-pay.png", outCount: 2, figureType: 30, name: "等待付款"},
        {figureFunction: "ImageClick", image: "wait-evaluate.png", outCount: 2, figureType: 31, name: "等待评价"},
        {figureFunction: "ImageClick", image: "wait-cus.png", outCount: 2, figureType: 32, name: "定义等待"}

    ]
}


