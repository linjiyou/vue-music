<template>
  <div class="singer">
      <app-listview :singersLsit="singers" :title="title"></app-listview>
  </div>
</template>
<script>
import { getSingerList } from "../../api/singer"
import { ERR_OK } from "../../api/config"
import AppListview from "../../base/listview"
const HOT_SINGER_LEN = 10;
const HOT_NAME = "热门";
export default {
  data() {
    return {
      singers: [],
      title:[]
    }
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(response => {
        const resp = response.data;
        if (resp.code === ERR_OK) {
          this.singers = resp.singerList.data.singerlist;
          this.title=resp.singerList.data.tags.index
        }
      })
    }
},
  components:{
      AppListview
  }
}
</script>