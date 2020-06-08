## 使用css+react实现进度条
> 支持线状、半圆、整圆形式。

### API

| api | 类型 | 是否必选 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| type | string | false | 'line' | 进度条不同形式，目前支持线状(line)、半圆(semicircle)、整圆(circle)形式 |
| percent | number | true | 0 | 进度百分比为0-100 |
| color | string | false | '#5584ff' | 进度区域显示的颜色 |
| backColor | string | false | '#ebecf0' | 无进度区域显示的颜色 | 
| borderWidth | number | false | 6 | 进度条边框宽度 | 
| radius | number | false | 100 | 在type为semicircle或circle形式下自定义圆的半径(包括边框的宽度),值要大于borderWidth。line形式想要控制宽度，直接在Progress外包裹一个自己期待的宽度的容器，Progress默认width为100% | 

### 示例
> npm i react-css-progress

**线状形式**
```
<Progress type="line" percent={25} />
```
**线状形式自定义颜色**
```
<Progress type="line" percent={50} color="#52c41a" backColor="#eee" />
```
**线状形式自定义边框宽度**
```
<Progress type="line" percent={75} borderWidth={10} />
```
**半圆形式**
```
<Progress type="semicircle" percent={25} />
```
**半圆形式自定义颜色**
```
<Progress type="semicircle" percent={50} color="#52c41a" backColor="#eee" />
```
**半圆形式自定义边框宽度**
```
<Progress type="semicircle" percent={75} borderWidth={10} />
```
**半圆形式自定义圆的半径**
```
<Progress type="semicircle" percent={75} radius={60} />
```
**整圆形式**
```
<Progress type="circle" percent={25} />
```
**整圆形式自定义颜色**
```
<Progress type="circle" percent={50} color="#52c41a" backColor="#eee" />
```
**整圆形式自定义边框宽度**
```
<Progress type="circle" percent={75} borderWidth={10} />
```
**整圆形式自定义圆的半径**
```
<Progress type="circle" percent={75} radius={60} />
```

