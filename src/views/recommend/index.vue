<template>
  <div class="recommend" ref="recommend">
    <app-scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <app-slider>
            <div slot="slider" v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl" />
              </a>
            </div>
          </app-slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li
              @click="selectItem(item)"
              v-for="(item,index) in discList"
              class="item"
              :key="index"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </app-scroll>
  </div>
</template>
<script>
import AppSlider from "../../base/slider";
import AppScroll from "../../base/scroll";
import { getRecommomend, getDiscList } from "../../api/recomend";
import { ERR_OK } from "../../api/config";
import axios from "axios";
export default {
  data() {
    return {
      recommends: [],
      discList: []
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    selectItem() {},
    _getRecommend() {
      getRecommomend().then(response => {
        if (response.code === ERR_OK) {
          this.recommends = response.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(response => {
        const resp = response.data;
        if (resp.code === ERR_OK) {
          this.discList = resp.data.list;
        }
      });
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true;
        setTimeout(() => {
          this.$refs.scroll.refresh();
        }, 2000);
      }
    }
  },
  components: {
    AppSlider,
    AppScroll
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
        overflow-y: auto;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>