##### 改造成音乐播放器
参考 http://duoduozuikeail.top/#/discover
参考 https://github.com/MrRainbowYoo/Music_Player
感谢作者的分享

1.在has地址中/后面的参数项是路径参数，使用 $route.params来获取
2?号后面是查询参数，使用$route.query.xx来获取
3.跳转 使用 this.$router.push()
4.vant2 Toast is undefined  
```
const loading = this.$toast.loading({
      message: '加载中...',
      forbidClick: true
    })
```
