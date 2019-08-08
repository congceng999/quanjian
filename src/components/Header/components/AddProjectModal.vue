/**
* Created by OXOYO on 2018/4/3.
*
* 新建项目弹窗
*/

<style lang="less" rel="stylesheet/less">
  .xpe_add-project-modal {
    text-align: left;
  }
</style>

<template>
  <XUIModal
    class="xpe_add-project-modal"
    :value="isShow"
    title="新建页面"
    :transfer="false"
    @on-ok="handleOK"
    @on-cancel="handleCancel"
  >
    <XUIForm
      ref="addProjectForm"
      :model="formData"
      :rules="formRules"
      :label-width="120"
      @keydown.native.enter.prevent
    >
      <XUIFormItem label="页面名称：" prop="name">
        <XUIInput type="text" v-model="formData.name" placeholder="请输入页面名" style="width: 300px;"></XUIInput>
      </XUIFormItem>
    </XUIForm>
    <div slot="footer">
      <Button type="text" size="large" @click="handleCancel">取消</Button>
      <Button type="primary" size="large" @click="handleOK">确定</Button>
    </div>
  </XUIModal>
</template>

<script>
import utils from '@/global/utils'

export default {
  name: 'XPEAddProjectModal',
  data () {
    return {
      // 是否显示弹窗
      isShow: false,
      // 表单数据
      formData: {
        name: '',
        width: 0,
        height: 0
      },
      // 表单校验规则
      formRules: {
        name: {
          required: true,
          trigger: 'change'
        }
      },
    }
  },
  watch: {
    'formData.type': function (val) {
      let _t = this
      let width = 960
      let height = 1000
      _t.formData = {
        ..._t.formData,
        width,
        height
      }
    }
  },
  methods: {
    init: function () {
      let _t = this
      // 初始化formData
      _t.formData = {
        name: '',
        width: 960,
        height: 1000
      }
    },
    handleOK: function () {
      let _t = this
      // 校验结果
      let validResult = false
      _t.$refs['addProjectForm'].validate((valid) => {
        validResult = valid
        if (!valid) {
          _t.$Message.error('表单验证失败！')
        }
      })
      console.log('validResult', validResult)
      if (!validResult) {
        return false
      }
      // 关闭弹窗
      _t.isShow = false
      let timeNow = new Date().getTime()
      let payload = {
        ..._t.formData,
        width: _t.formData.width + 'px',
        height: _t.formData.height + 'px',
        id: 'project-' + timeNow,
        components: [],
        selectionStyleMap: {}
      }
      // 广播事件
      utils.bus.$emit('XPE/project/add/ok', payload)
      _t.$nextTick(function () {
        // 清空表单
        _t.init()
      })
    },
    handleCancel: function () {
      let _t = this
      // 关闭弹窗
      _t.isShow = false
    }
  },
  created: function () {
    let _t = this
    // 初始化
    _t.init()
    // 监听事件
    utils.bus.$on('XPE/project/add', function () {
      _t.isShow = true
    })
  }
}
</script>
