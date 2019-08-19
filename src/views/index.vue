<template>
  <div class="index">
    <van-field
      class="break-all"
      v-model="message"
      type="textarea"
      placeholder="你想说些什么吗？"
      rows="1"
      autosize
    />
    <div class="images">
      <img v-for="(item, index) in imagesData" :key="index" :src="item" />
    </div>
    <div class="tools">
      <div class="photo">
        <van-icon name="photo-o" />
        <input @change="xmTanUploadImg" ref="fileInput" class="photo-input" type="file" multiple="multiple" accept="image/*">
      </div>
    </div>
    <div class="buttons">
      <van-button type="default" size="small">保存</van-button>
    </div>
  </div>
</template>

<script>
import { Button, Field, Icon } from 'vant'
import http from 'axios'
export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Icon.name]: Icon
  },
  data () {
    return {
      message: '',
      imagesData: []
    }
  },
  methods: {
    xmTanUploadImg (event) {
      // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader()
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
              // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
              // Read image as base64 and set to imageData
              this.imagesData.push(e.target.result)
              // this.$local.setItem('images', this.imagesData)
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0])
      }
    }
  },
  created () {
    // this.$local.getItem('images').then(
    //   res => {
    //     if (res) {
    //       this.imagesData = res
    //     }
    //   }
    // )
  }
}
</script>

<style lang="stylus" scoped>
.tools
  text-align right
  padding 10px 30px
  .photo
    font-size 30px
    position relative
    overflow hidden
    display inline-block
    .photo-input
      position absolute 
      top 0
      right 0
      bottom 0
      left 0
      opacity: 0
.buttons
  padding 0 30px
  text-align right 
</style>
