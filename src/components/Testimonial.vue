<template>
          <!-- testimonial start -->
      <div class="bgtestimonial">
         <div class="container-fluid">
            <!-- row start -->
            <div class="row">
               <div class="col-md-8 offset-md-2 col-10 offset-1 text-center">
  <vueper-slides
                class="no-shadow"
                :visible-slides="1"

                :slide-ratio="1 / 4"
                :dragging-distance="100"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
                :bullets="false"
            >
                          <vueper-slide>
                           <template v-slot:content>
                           <img src="../assets/img/arrows.png" alt="img32">
                           <p class="m-0 pt-5 text-white font20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                           <br>
                           <br>
                           
                           <div class="img-box rounded-circle m-auto border-img">
                              <img class="d-block rounded-circle" src="../assets/img/profile-1.jpg" alt="First slide">
                           </div>
                           <h3 class="mt-4 mb-0"><strong class="text-white font20">Paul Mitchel</strong></h3>
                           <div class="mt-4">
                              <a href="#"><i class="fab fa-facebook fb-testi"></i></a>
                              <a href="#"><i class="fab fa-linkedin link-testi"></i></a> 
                              <a href="#"><i class="fab fa-twitter twi-testi"></i></a>
                           </div>
                              </template>
                          </vueper-slide>
                        <!-- carousel item end -->
                        <!-- carousel item start -->
                        <vueper-slide>
                     <template v-slot:content>
                           <img src="../assets/img/arrows.png" alt="img33">
                           <p class="m-0 pt-5 text-white gothambook font20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                           <br>
                           <br>

                           <div class="img-box rounded-circle m-auto border-img">
                              <img class="d-block rounded-circle" src="../assets/img/profile-3.jpg" alt="First slide">
                           </div>
                           <h3 class="mt-4 mb-0"><strong class="text-white font20">Steve Fonsi</strong></h3>
                           <div class="mt-4">
                              <a href="#"><i class="fab fa-facebook fb-testi"></i></a>
                              <a href="#"><i class="fab fa-linkedin link-testi"></i></a> 
                              <a href="#"><i class="fab fa-twitter twi-testi"></i></a>
                           </div>
                     </template>
                         </vueper-slide>

                          <vueper-slide>
                      <template v-slot:content>
                           <img src="../assets/img/arrows.png" alt="img34">
                           <p class="m-0 pt-5 text-white gothambook font20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                           <br><br>
                       
                           <div class="img-box rounded-circle m-auto border-img">
                              <img class="d-block rounded-circle" src="../assets/img/profile-7.jpg" alt="First slide">
                           </div>
                           <h3 class="mt-4 mb-0"><strong class="text-white font20">Daniel vebar</strong></h3>
                           <div class="mt-4">
                              <a href="#"><i class="fab fa-facebook fb-testi"></i></a>
                              <a href="#"><i class="fab fa-linkedin link-testi"></i></a> 
                              <a href="#"><i class="fab fa-twitter twi-testi"></i></a>
                           </div>
                      </template>
                         </vueper-slide>
                        <!-- carousel item end -->
                     
                     <!-- carousel inner end -->
                  </vueper-slides>
            </div>
            <!-- row end -->
         </div>
            </div>
            </div>
      <!-- testimonial end -->
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default{
    name:'Testimonial',
    props:{
        
    },
   components: { VueperSlides, VueperSlide },
}
</script>