module.exports = {
    db: {
        appId: 'A6030930289055',
        appKey: '34F0CD4A-0386-DAFB-94DC-C475112255CC'
    },
    cdn: {
        host: 'http://p4t4vcu10.bkt.clouddn.com/',
        bucket: 'vue-study',
        ak: 'GYgaJ3VBYjcfXqA32hZd2r9rrRvAaP_9jfEPhE5n',
        sk: 'X2ZMFccy_viLkHXBFB7TlDyP0QmuCIBQzTJZC6iJ'
    }
    // 需要注册七牛云 然后实名认证  然后修改webpack outpath 中的配置，改成这个host 自动化上传
    // 还有下载依赖  npm i qiniu -D
}