const app = getApp()
const treeData = {
  text: 'Tree View',
  id: 0,
  nodes: [{
      text: 'Parent 1',
      id: 1,
      nodes: [{
          text: 'Child 1',
          id: 2,
          nodes: [{
              text: 'Grandchild 1',
              id: 3,
            },
            {
              text: 'Grandchild 2',
              id: 4,
            },
          ]
        },
        {
          text: 'Child 2',
          id: 5,
        }
      ]
    },
    {
      text: 'Parent 2',
      id: 6,
      nodes: [{
          text: 'Child 1',
          id: 7,
        },
        {
          text: 'Child 2',
          id: 8,
        }
      ]
    }
  ]
}
Page({
  data: {
    treeData: treeData,
  },
  //事件处理函数
  tapItem: function(e) {
    console.log('index接收到的id: ' + e.detail.id);
  },

  onLoad: function() {

  },
})