<template>
  <div class="idea-bloc" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <div class="idea-top">
      <div class="content">
        <div>{{category}}</div>
        <div>{{likes}}</div>
      </div>
    </div>
    <div class="idea-center">{{label}}</div>
    <div class="idea-bottom">
      <div class="content">
        <div class="idea-author-container">
          <img
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
          >

          <div class="idea-author-name">{{author}}</div>
        </div>
        <a class="idea-button" href="#" v-if="hover" @click="toIdea">voir +</a>
      </div>
    </div>
    <div class="filter" v-if="hover"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    category: String,
    author: String,
    likes: Number,
    height: String,
    background: String
  },
  data: () => ({
    hover: false
  }),
  methods: {
    toIdea() {
      alert("oj");
    },
    mouseOver() {
      this.hover = true;
    },
    mouseLeave() {
      this.hover = false;
    }
  }
};
</script>

<style lang="scss">
$spacing: 40px;
$padding: 5px;
$marginbottom: 10px;
$radius: 8px;
.idea-bloc {
  min-height: 180px;
  color: #444;
  background-color: white;
  margin-bottom: $marginbottom;
  padding-top: $spacing;
  padding-bottom: $spacing;
  border-radius: $radius;
  position: relative;
  .idea-center {
    font-size: 20px;
    padding: 20px;
  }
  .idea-top,
  .idea-bottom {
    padding: $padding;
    height: $spacing;
    position: absolute;

    width: 100%;
    display: flex;
    align-items: center;
    .content {
      margin-top: auto;
      margin-bottom: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .idea-top {
    top: 0;
    .content {
    }
  }

  .idea-bottom {
    bottom: 0;
    .idea-author-container {
      display: flex;
      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        align-self: flex-start;
      }

      .idea-author-name {
        margin-left: 10px;
        margin-top: auto;
        margin-bottom: auto;
        align-self: flex-start;
      }
    }

    .idea-button {
      padding: 4px;
      padding-left: 8px;
      padding-right: 8px;
      border-radius: 4px;
      justify-content: flex-end;

      background-color: #4caf50;
      color: white;
      text-decoration: none;
    }
  }

  .filter {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    // background-color: rgba(34, 34, 34, 0.027);
  }
}

.idea-bloc:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
