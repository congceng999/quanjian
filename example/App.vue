
<style scoped lang="less" rel="stylesheet/less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .page-editor-example {
    width: 100%;
    height: 800px;
  }
</style>

<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="page-editor-example">
      <XPageEditor :config="pageEditorConfig">
        <!-- 自定义元素列表组件 -->
        <CustomListItem slot="listItem"></CustomListItem>
      </XPageEditor>
    </div>
  </div>
</template>

<script>
import CustomListItem from './components/CustomListItem.vue'
import Resources from './resources'

export default {
  name: 'App',
  components: {
    CustomListItem
  },
  data () {
    return {
      pageEditorConfig: {
        // 自定义编辑器内相关UI
        UI: {
          // 编辑器功能：头部组件
          header: {
            // 是否启用该功能，true: 启用 false: 不启用
            enable: true,
            // 标题配置
            title: {
              enable: true,
              text: '全箭-XPAGE',
              fullText: 'QUANJIAN_SYS',
              subText: 'bateV0.1'
            },
            // 该功能数据源
            data: [],
            // 初始化数据
            initData: []
          },
          // 编辑器功能：表单元素列表
          list: {
            // 是否启用该功能，true: 启用 false: 不启用
            enable: true,
            // 该功能数据源
            data: Resources,
            // 初始化数据
            initData: [],
            style: {
              width: '300px',
              'margin-left': '-300px'
            }
          },
          // 编辑器画板
          board: {
            // 是否启用该功能，true: 启用 false: 不启用
            enable: true,
            // 该功能数据源
            data: [],
            // 初始化数据
            initData: [],
            // 工具栏配置
            toolBar: {
              // 是否启用该功能，true: 启用 false: 不启用
              enable: true,
              // 位置，可选值 top-left || top-right || bottom-right || bottom-left
              position: 'top-right',
              style: {
                right: '350px'
              }
            },
            // 刻度尺配置
            scale: {
              // 是否启用该功能，true: 启用 false: 不启用
              enable: true
            }
          },
          // 表单元素配置组件
          options: {
            // 是否启用该功能，true: 启用 false: 不启用
            enable: true,
            // 该功能数据源
            data: [],
            // 初始化数据
            initData: [],
            style: {
              width: '300px',
              'margin-right': '-300px'
            }
          },
          // 编辑器功能：脚部组件
          footer: {
            // 是否启用该功能，true: 启用 false: 不启用
            enable: true,
            // 该功能数据源
            data: [],
            // 初始化数据
            initData: []
          }
        },
        // 导出
        output: {
          // 钩子函数
          before: () => {},
          after: () => {}
        }
      }
    }
  }
}
</script>
