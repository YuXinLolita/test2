# 数据模型设计

## 用户
```js
{
    _id:'xxx',
    usernam:'18617273937', //唯一
    password:'abc123'
}
```
## 地址
```js
{
    usernam:'18617273937',
    city:'北京',
    department:'xx小区',
    name:'张三',
    phone:'12345634341'
}
```
## 商店
```js
{
    name:'沃尔玛',
    imgUrl:'xxx.png',
    sales:10000,
    expressLimit:0,
    expressPrice:5,
    slogan:'满88元减3元'
}
```

## 商品
```js
{
    _id:'xxx',
    shopId:'xxxxxx',
    name:'番茄'，
    imgUrl:'xxx.png',
    sales:10,
    price:33.6,
    oldPrice:40.6,
    tabs:['all','seckill'] //秒杀，新鲜水果 左侧tab类型

}
```

## 订单】

具有特殊性，待定
