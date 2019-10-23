// components/tree/index.js
Component({
  properties: {
    model: Object,
  },

  data: {
    open: false,
    isBranch: false,
  },

  methods: {
    toggle: function(e) {
      if (this.data.isBranch) {
        this.setData({
          open: !this.data.open,
        });
      }
    },
    
    tapItem: function(e) {
      const id = e.currentTarget.dataset.id;
      console.log('组件里点击的id: ' + id);
      this.triggerEvent('tapitem', { id }, { bubbles: true, composed: true });
    }
  },

  ready: function(e) {
    this.setData({
      isBranch: Boolean(this.data.model.nodes && this.data.model.nodes.length),
    });
    console.log(this.data);
  },
})
