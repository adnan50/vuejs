<template>
  <div id="app">
      <!-- navbar start-->
      <div class="bgimg pb-4">
         <div class="container-fluid">
            <div class="topnav pl-5 pr-5 pt-4 pb-4">
               <nav class="navbar navbar-expand-lg navbar-custom p-0">
                  <a href="#" class="navbar-brand pl-0">
                  <h2 class="text-white font30_mob">Max Follower</h2>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
                  <i class="fas fa-bars fa-lg py-1 text-white"></i>
                  </button>
                  <div class="navbar-collapse collapse" id="navbarCustom">
                     <!-- main menu start -->
                     <ul class="navbar-nav">
                        <li class="nav-item">
                           <a class="nav-link" href="#how-it-work" id="how_menu" v-smooth-scroll>HOW IT WORKS</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#how-it-works" id="how_menu1" v-smooth-scroll>HOW IT WORKS</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#our_history" id="case_menu" v-smooth-scroll>OUR HISTORY</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#faq" id="faq_menu" v-smooth-scroll>FAQs</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#pricing" id="pricing_menu" v-smooth-scroll>PRICING</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#contact" id="contact_menu" v-smooth-scroll>CONTACT</a>
                        </li>
                     </ul>
                     <!-- main menu end -->
                     <!-- menu buttons start -->
                     <span class="ml-auto navbar-text pl_tab">
                     <a href="#" class="top_navbtn colorfe getmob">Learn More</a>
                     
                     </span>
                     <!-- menu button end -->
                  </div>
               </nav>
            </div>
         </div>
         <!-- navbar end-->
         <!-- navbar content start -->
         <div class="container">
            <!-- row start -->
            <div class="row banner_content">
               <div class="col-lg-6 col-md-8 col-sm-12 text-left text-white">
                  <h2 class="text-white font30_mob">Max Follower is</h2>
                  <h3 class="short_para font20_mob">The best solution for you & ready for more purposes</h3>
                  <p class="lar_para font20 lh26 font14_mob">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p class="font24 lh40 colorfe mb-4 font14_mob"><b class="font19_mob">QUESTIONS? TEXT US:</b>&nbsp;<a href="tel:+1(234)5678910" class="text-white no_text_under font19_mob">+1(234)5678910</a></p>
                  <a href="#" class="follow_btn colorfe">LEARN MORE</a>
                  <a href="#" class="case_btn colorfe">SHARE NOW</a>
               </div>
               <div class="col-lg-6 col-md-4 col-sm-12 text-right wid100_mob">
                  <img src="./assets/img/bannerpic.png" class="mt_mob" alt="img1">
               </div>
            </div>
            <!-- row end -->
         </div>
      </div>
      <OurWork/>
        <WhatWeDo/>
        <OurFeatures/>
        <HowWorks/>
        <CustomerSupport/>
        <TrustedClients/>
        <OurHistory/>
        <Faqs/>
        <Pricing/>
         <testimonial/>
        <Contact/>
 
        <Footer/>
 
      <!-- navbar content end -->
  </div>

</template>

<script>
 import WhatWeDo from './components/WhatWeDo.vue';
import OurFeatures from './components/OurFeatures.vue';
import HowWorks from './components/HowWorks.vue';
import CustomerSupport from './components/CustomerSupport.vue';
import TrustedClients from './components/TrustedClients.vue';
import OurHistory from './components/OurHistory.vue';
import Faqs from './components/Faqs.vue';
import Pricing from './components/Pricing.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import OurWork from './components/OurWork.vue';
import Testimonial from './components/Testimonial.vue';






// styles of website
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/bootstrap.min.css';
import './assets/css/slick.css';
// import './assets/css/slick-theme.css';
// font awesome
import './assets/css/all.css';
// import './assets/css/fonts.css';


export default {
  name: 'App',
  components: {
    WhatWeDo,
     OurFeatures,
     HowWorks,
     CustomerSupport,
     TrustedClients,
     OurHistory,
     Faqs,
     Pricing,
     Contact,
     Footer,
     OurWork,
     Testimonial
  }
}
</script>


