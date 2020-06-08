## 使用css+react实现进度条
> 支持半圆、整圆形式

### github
[https://github.com/dyxweb/reactProgress](https://github.com/dyxweb/reactProgress)

### API

| api | 类型 | 是否必选 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| type | string | false | 'semicircle' | 进度条不同形式，目前支持半圆(semicircle)、整圆(circle)形式 |
| percent | number | true | 0 | 进度百分比为0-100 |
| color | string | false | '#5584ff' | 进度区域显示的颜色 |
| backColor | string | false | '#ebecf0' | 无进度区域显示的颜色 | 
| borderWidth | number | false | 4 | 进度条边框宽度 | 

### 示例
> npm i react-css-progress

**半圆形式**
```
<Progress type="semicircle" percent={25} />
```
**半圆形式自定义颜色**
```
<Progress type="semicircle" percent={50} color="red" backColor="#ebecf0" />
```
**半圆形式自定义边框宽度**
```
<Progress type="semicircle" percent={75} borderWidth={10} />
```
**整圆形式**
```
<Progress type="circle" percent={25} />
```
**整圆形式自定义颜色**
```
<Progress type="circle" percent={50} color="red" backColor="#ebecf0" />
```
**整圆形式自定义边框宽度**
```
<Progress type="circle" percent={75} borderWidth={10} />
```


