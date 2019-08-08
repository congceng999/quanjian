// 定义左侧导航

const list = {
  components: [
    {
      type: 'Basic',
      title: '基础',
      children: [
        {
          title: '文章标题',
          name: 'Text',
          icon: 'ios-grid-view-outline',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: '输入框',
          name: 'InputNumber',
          icon: 'ios-grid-view-outline',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        }
      ]
    }
  ]
}

export default list
