﻿
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    value: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'text',
    },
    placeholder: {
      type: String,
      value: '请输入内容',
    },
    title: {
      type: String,
      value: '标题',
    },
    errTitle: {
      type: String,
      value: '',
    },
    maxlength: {
      type: Number,
      value: '20'
    }
  },
  data: {
    myvalue: '',
    myerrTitle: '',
    pwdType: 'password',
    pwdeye: 'close',
  },
  methods: {
    // 这里是一个自定义方法
    mykeyup: function(e){
      let v = e.detail.value.trim()
      this.triggerEvent('keyupEvent', v)
      this.setData({
          myvalue: v
      });
    },
    eyeclick: function (e) {
        this.setData({
            pwdeye: this.data.pwdeye === 'close' ? 'open' : 'close',
            pwdType: this.data.pwdType === 'password' ? 'text' : 'password'
        });
    },
    setErrTitle: function (v) {
      this.setData({
          myerrTitle: v,
      });
    },
    clearErrTitle: function () {
      this.setData({
          myerrTitle: '',
      });
    },
    cleartext: function () {
        this.setData({
            myvalue: ''
        });
        this.triggerEvent('keyupEvent', '')
    }
  },
  ready: function () {
      this.setData({
          myvalue: this.properties.value
      })
  },
})
