<template>
  <div class="drag-list-page">
    <el-card header="拖拽列表">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-card header="待办事项">
            <cc-drag-list v-model="todolist" v-bind="dragOptions" @change="handleChange($event, 'left')">
              <transition-group class="drag-wrapper" tag="ul" name="flip-list">
                <li class="todo-item" v-for="todo in todolist" :key="todo.order">
                  <div>
                    <cc-svg-icon @click="fixed(todo)" class-name="todo-icon" :icon-class="todo.fixed ? 'fixed' : 'drag'"></cc-svg-icon>
                    {{todo.name}}
                  </div>
                  <div>
                    {{todo.order}}
                  </div>
                </li>
              </transition-group>
            </cc-drag-list>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card header="已完成事项">
            <cc-drag-list v-model="complate" v-bind="dragOptions" @change="handleChange($event, 'right')">
              <transition-group class="drag-wrapper" tag="ul" :name="'no'">
                <li class="todo-item" v-for="todo in complate" :key="todo.order">
                  <div>
                    <cc-svg-icon @click="fixed(todo)" class-name="todo-icon" :icon-class="todo.fixed ? 'fixed' : 'drag'"></cc-svg-icon>
                    {{todo.name}}
                  </div>
                  <div>
                    {{todo.order}}
                  </div>
                </li>
              </transition-group>
            </cc-drag-list>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card header="操作记录">
            <div v-for="(item, index) in history" :key="index">
              {{item}}
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card>
            <pre style="background: #f5f5f5;padding: 10px;border-radius: 5px;color: #333;" v-html="todolist">

            </pre>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card>
            <pre style="background: #f5f5f5;padding: 10px;border-radius: 5px;color: #333;" v-html="complate">

            </pre>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'drag-list-page',
  data () {
    return {

      todolist: [
        {
          name: 'vue.js',
          order: 1,
          fixed: false
        },
        {
          name: 'element-ui',
          order: 2,
          fixed: false
        },
        {
          name: 'draggable',
          order: 3,
          fixed: false
        },
        {
          name: 'vuex',
          order: 4,
          fixed: false
        },
        {
          name: 'vue-router',
          order: 5,
          fixed: false
        }
      ],
      complate: [
        {
          name: 'react',
          order: 6,
          fixed: false
        }
      ],
      dragOptions: {
        group: 'description',
        ghostClass: 'ghost'
      },
      history: []
    }
  },
  methods: {
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    handleChange ({ $event, value }, type) {
      console.log($event, value, type)
      const from = type
      let to = ''
      if ($event.from === $event.to) {
        to = type
      } else {
        to = type === 'left' ? 'right' : 'left'
      }
      this.history.push(`${from} => ${to} ${$event.oldIndex} => ${$event.newIndex} `)
    },
    fixed (item) {
      item.fixed = !item.fixed
    },
    handleEnd (event, type) {
      const from = type
      let to = ''
      if (event.from === event.to) {
        to = type
      } else {
        to = type === 'left' ? 'right' : 'left'
      }
      this.history.push(`${from} => ${to} ${event.oldIndex} => ${event.newIndex} `)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/index.scss';
.drag-list-page {
  .flip-list-move {
    transition: transform 0.5s;
  }
  .drag-wrapper {
    padding: 5px 0;
  }
  .todo-item {
    @include flex(row);
    line-height: 40px;
    // margin-bottom: -1px;
    padding-left: 10px;
    margin: 5px 0;
    // border: 1px solid #ddd;
    cursor: pointer;
    > div:first-child {
      flex: 1;
    }
    > div:last-child {
      width: 50px;
    }
  }
  .todo-icon {
    color: #666;
  }
}
</style>
