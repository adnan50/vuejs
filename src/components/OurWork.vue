
<template>
          <!-- slider logo section -->
      <div class="container">
         <div class="row pt-4 pb-3">
            <div class="col-md-12">
               <h2 class="text-center colorblack font50 font30_mob">Our Work</h2>
            </div>
         </div>
            <vueper-slides
                fade
                class="no-shadow"
                :visible-slides="4"
                slide-multiple
                :gap="4"
                :slide-ratio="1 / 4"
                :dragging-distance="100"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
                :bullets="false"
            >
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"/>

            </vueper-slides>
         
         <!-- row start -->
         <div class="row pb-3">
            <div class="col-md-12 text-center mt-2">
               <a href="#" class="colorfe follow_btn">View More Agencies?</a>
            </div>
         </div>
         <!-- row end -->
      </div>
      <!-- slider logo section end -->
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name:'OurWork',

 data: () => ({
       slides: [
  {
    image: require('@/assets/img/client.png')
  },
  {
    image: require('@/assets/img/client.png')
  },
    {
    image: require('@/assets/img/client.png')
  },
    {
    image: require('@/assets/img/client.png')
  },
    {
    image: require('@/assets/img/client.png')
  },
    {
    image: require('@/assets/img/client.png')
  },
    {
    image: require('@/assets/img/client.png')
  }
],

  }),
    components: { VueperSlides, VueperSlide },


}
</script>