<template>
  <div class="tree-table">
    <el-card>
      <p>支持使用 slot-scope 进行自定义列渲染内容</p>
      <p>更多使用说明请查看文档 <a href="https://www.npmjs.com/package/tree-table-vue">https://www.npmjs.com/package/tree-table-vue</a> </p>
      <el-row class="mt10 mb10">
        <el-col :span="2">
          <el-switch
            inactive-text="stripe："
            v-model="props.stripe">
          </el-switch>
        </el-col>
        <el-col :span="2">
          <el-switch
            inactive-text="border："
            v-model="props.border">
          </el-switch>
        </el-col>
        <!-- <el-col :span="3">
          <el-switch
            inactive-text="selection-type："
            v-model="props.selectionType">
          </el-switch>
        </el-col> -->
        <el-col :span="3">
          <el-switch
            inactive-text="show-header："
            v-model="props.showHeader">
          </el-switch>
        </el-col>
        <el-col :span="3">
          <el-switch
            inactive-text="show-index："
            v-model="props.showIndex">
          </el-switch>
        </el-col>
        <el-col :span="3">
          <el-switch
            inactive-text="show-summary："
            v-model="props.showSummary">
          </el-switch>
        </el-col>
        <el-col :span="3">
          <el-switch
            inactive-text="expand-type："
            v-model="props.expandType">
          </el-switch>
        </el-col>
        <el-col :span="3">
          <el-switch
            inactive-text="is-fold："
            v-model="props.isFold">
          </el-switch>
        </el-col>
      </el-row>
      <el-row class="mb20">
        <el-col :span="3">
          <el-switch
            inactive-text="tree-type："
            v-model="props.treeType">
          </el-switch>
        </el-col>
      </el-row>
      <tree-table
        ref="table"
        sum-text="sum"
        index-text="#"
        :data="data"
        :columns="columns"
        :stripe="props.stripe"
        :border="props.border"
        :show-header="props.showHeader"
        :show-summary="props.showSummary"
        :show-row-hover="props.showRowHover"
        :show-index="props.showIndex"
        :tree-type="props.treeType"
        :is-fold="props.isFold"
        :expand-type="props.expandType"
        :selection-type="props.selectionType">
        <template slot="$expand" slot-scope="scope">
          {{ `My name is ${scope.row.name},
            this rowIndex is ${scope.rowIndex}.`
          }}
        </template>
        <template slot="likes" slot-scope="scope">
          <el-tag class="mr10" v-for="(like, index) in scope.row.likes"
            :key="index"
          >
            {{like}}
          </el-tag>
          <!-- {{ scope.row.likes.join(',') }} -->
        </template>
      </tree-table>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue'
// tree-table-vue https://www.npmjs.com/package/tree-table-vue
import TreeTable from 'tree-table-vue'

Vue.component(TreeTable.name, TreeTable)
export default {
  name: 'tree-table-page',

  data () {
    return {
      props: {
        tripe: true,
        border: true,
        showHeader: true,
        showSummary: false,
        showRowHover: true,
        showIndex: false,
        treeType: true,
        isFold: true,
        expandType: false,
        selectionType: false,
        stripe: false
      },
      data: [
        {
          name: 'Jack',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 10,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                  children: [
                    {
                      name: 'Ashley',
                      sex: 'female',
                      likes: ['football', 'basketball'],
                      score: 20
                    },
                    {
                      name: 'Taki',
                      sex: 'male',
                      likes: ['football', 'basketball'],
                      score: 10,
                      children: [
                        {
                          name: 'Ashley',
                          sex: 'female',
                          likes: ['football', 'basketball'],
                          score: 20
                        },
                        {
                          name: 'Taki',
                          sex: 'male',
                          likes: ['football', 'basketball'],
                          score: 10
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        }
      ],
      columns: [
        {
          title: 'name',
          key: 'name',
          width: '400px'
        },
        {
          title: 'sex',
          key: 'sex',
          minWidth: '50px'
        },
        {
          title: 'score',
          key: 'score'
        },
        {
          title: 'likes',
          key: 'likes',
          minWidth: '200px',
          type: 'template',
          template: 'likes'
        }
      ]
    }
  },
  computed: {
    propList () {
      return Object.keys(this.props).map(item => ({
        name: item
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/common.scss';
.tree-table {
  p {
    color: #666;
    font-weight: 700;
    line-height: 24px;
  }
}
</style>
