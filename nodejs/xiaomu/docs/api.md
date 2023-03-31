#API(接口)设计

## 注册

### url    
`/api/user/register`

### method 
`post`

### request body
```js
{
    username:'12345678901',
    password:'123abc
}
```
response body
```js
{
    errno:0,
    message:'errno !== 0 d的话，错误信息
}
```

## 登录
### url 
`/api/user/login`
### method 
`post`
### request body
```js
{
    username:'12345678901',
    password:'123abc
}
```
### response body 
```js
{
    errno:0,
    message:'errno != 0 的话，错误信息
}
```

## 獲取收穫地址列表
### url 
`/api/user/address`
### method 
`get`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
        _id:'收货地址的 id'，
          city:'北京',
   department: '真静花园',
   houseNumber:'门牌号,
   name:'小欣'，
   phone:'12334567890'
    }
    message:'errno !== 0 的话，错误信息
}
```
## 获取用户信息
## url
`/api/user/info`
### method
`get`
### request body
无
### response body
```js
{
    errno:0,
    data:{
        username:'xxxx',
    }
    message:'errno !-- 0 的话错误信息'
}
```
## 地址管理
### url 
`/api/user/address`
### method 
`post`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
        _id:'收货地址的 id'，
          city:'北京',
   department: '真静花园',
   houseNumber:'门牌号,
   name:'小欣'，
   phone:'12334567890'
    }
    message:'errno !== 0 的话，错误信息
}
```
## 獲取單個收貨地址
### url 
`/api/user/address/:id` 
### method 
`post`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
        _id:'收货地址的 id'，
          city:'北京',
   department: '真静花园',
   houseNumber:'门牌号,
   name:'小欣'，
   phone:'12334567890'
    }
    message:'errno !== 0 的话，错误信息
}
```
## 更新收貨地址
### url 
`/api/user/address/:id` 
### method 
`post`
### request body
```js 
{
        _id:'收货地址的 id'，
          city:'北京',
   department: '真境花园',
   houseNumber:'门牌号,
   name:'小欣'，
   phone:'12334567890'
}
```
### response body 
```js
{
    errno:0,
    message:'errno !== 0 的话，错误信息'
}
```
## 附近（熱門）店鋪

### url
`/api/shop/hot-list`

### method
`get`
### request body
無
### response body
```js
{
    errno:0,
    data:[
        {
            _id:'商店 id',
            name:'沃爾瑪',
            imgUrl:'商店的圖片 url',
            sales:10000,  //月售
            expressLimit:0, // 起送價格
            expressPrice:5, //快遞價格
            slogan:'VIP 尊享滿 89 元 減一元'，
            }
    ]
    message:  'errno !== 0 的錯誤信息'
}
```

#API(接口)设计

## 注册

### url    
`/api/user/register`

### method 
`post`

### request body
```js
{
    username:'12345678901',
    password:'123abc
}
```
response body
```js
{
    errno:0,
    message:'errno !== 0 d的话，错误信息
}
```

## 登录
### url 
`/api/user/login`
### method 
`post`
### request body
```js
{
    username:'12345678901',
    password:'123abc
}
```
### response body 
```js
{
    errno:0,
    message:'errno != 0 的话，错误信息
}
```

## 獲取收穫地址列表
### url 
`/api/user/address`
### method 
`get`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
        _id:'收货地址的 id'，
          city:'北京',
   department: '真静花园',
   houseNumber:'门牌号,
   name:'小欣'，
   phone:'12334567890'
    }
    message:'errno !== 0 的话，错误信息
}
```
## 地址管理
### url 
`/api/user/address`
### method 
`post`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
        _id:'收货地址的 id'，
          city:'北京',
   department: '真静花园',
   houseNumber:'门牌号,
   name:'小欣'，
   phone:'12334567890'
    }
    message:'errno !== 0 的话，错误信息
}
```
## 獲取單個收貨地址
### url 
`/api/user/address/:id` 
### method 
`post`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
        _id:'收货地址的 id'，
          city:'北京',
   department: '真静花园',
   houseNumber:'门牌号,
   name:'小欣'，
   phone:'12334567890'
    }
    message:'errno !== 0 的话，错误信息
}
```
## 商店詳情
### url 
`/api/user/address/:id` 
### method 
`get`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
         {
            _id:'商店 id',
            name:'沃爾瑪',
            imgUrl:'商店的圖片 url',
            sales:10000,  //月售
            expressLimit:0, // 起送價格
            expressPrice:5, //快遞價格
            slogan:'VIP 尊享滿 89 元 減一元'，
            }
    }
    message:'errno !== 0 的话，错误信息'
}
```

## 創建訂單
### url 
`/api/user/address/:id/products`
### query
`tab = 全部商品`
舉例    `/api/user/address/:id/products`
### method 
`get`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
         {
           _id :'商品',
           name:'番茄',
           imgUrl:'xxx.png',
           sales:10,
           price:33.6,
           oldPrice:40.6
    }
    message:'errno !== 0 的话，错误信息'
}
```
## 查詢（某個）商店的商品列表
### url 
`/api/user/address/:id/products`
### query
`tab = 全部商品`
舉例    `/api/user/address/:id/products`
### method 
`get`
### request body
無
### response body 
```js
{
    errno:0,
    data:{
         {
           _id :'商品',
           name:'番茄',
           imgUrl:'xxx.png',
           sales:10,
           price:33.6,
           oldPrice:40.6
    }
    message:'errno !== 0 的话，错误信息'
}
```
## 創建訂單
### url 
`/api/order`
### method 
`post`
### request body
```js
{
    addressId:'收貨地址的id'，
    shopId:'商店的Id',
    shopName:'沃爾瑪',
    isCanceled:false,
    products:[
        {
            id:'商品 id',
            num: 3
        },
        {
            id:'商品 id',
            num:5 //购买数量
        }
    ]
}
```
### response body 
```js
{
    errno:0,
    data:{
        _id:订单'
    }
    message:'errno !== 0 的话，错误信息'
}
```