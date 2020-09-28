<template>
          <!-- contact start -->
      <div class="bgcontact pr-5 pl-5" id="contact">
         <div class="container-fluid">
            <!-- row start -->
            <div class="row mass_row">
               <div class="col-lg-5 col-md-12">
               </div>
               <div class="col-lg-7 col-md-12">
                  <h2 class="font50 font30_mob">
                     Get Free Email <br>Updates
                  </h2>
                  <h3 class="font32 font20_mob">Fill out the form and we'll contact you soon</h3>
                  <p class="font20 lh26 font14_mob">We would love to be in touch with you!. Sign up to receive <br>emails from us! 
                  </p>
                  <!-- <?php
                     if(isset($_POST['submit'])){
                         $to = "samishahzad3456@gmail.com"; // this is your Email address
                         $from = $_POST['email']; // this is the sender's Email address
                         $first_name = $_POST['firstname'];
                         $last_name = $_POST['lastname'];
                         $phone=$_POST['phone'];
                         $email=$_POST['email'];
                         $message=$_POST['message'];
                     
                         $subject = "Form submission";
                         $subject2 = "Copy of your form submission";
                         $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
                         $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
                     
                         $headers = "From:" . $from;
                         $headers2 = "From:" . $to;
                         mail($to,$subject,$message,$headers);
                         mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
                        
                         // You can also use header('Location: thank_you.php'); to redirect to another page.
                         }
                     ?> -->
                  <!-- form start -->
                  <form id="contact-form" name="contact-form" action="#contact" method="POST">
                     <!-- row start -->
                     <div class="row mb-4 mb1_mob">
                        <div class="col-md-6">
                           <div class="md-form mb-0">
                              <input type="text" id="name" name="firstname" class="form-control" placeholder="First Name *" required>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="md-form mb-0">
                              <input type="text" id="last" name="lastname" class="form-control" placeholder="Second Name *" required>
                           </div>
                        </div>
                     </div>
                     <!-- row end -->
                     <!-- row start -->
                     <div class="row mb-4 mb1_mob">
                        <div class="col-md-6">
                           <div class="md-form mb-0">
                              <input type="text" id="phone" name="phone" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="Phone *" required>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="md-form mb-0">
                              <input type="email" id="email" name="email" class="form-control" placeholder="Email *" required>
                           </div>
                        </div>
                     </div>
                     <!-- row end -->
                     <!-- row start -->
                     <div class="row mb-4">
                        <div class="col-md-12">
                           <div class="md-form">
                              <textarea id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Tell us about you and what you want to achieve with Max Follower"></textarea>
                           </div>
                        </div>
                     </div>
                     <!-- row end -->
                     <div class="text-right">
                     <input type="submit" name="submit" class="btn text-white contactbtn" value="SUBMIT FORM">
                     </div>
                  </form>
                  <!-- <?php if(isset($_POST['submit'])){  echo "<div class='output'>Mail Sent. Thank you " . $first_name . ", we will contact you shortly.</div>";} ?> -->
                  <!-- form end -->
               </div>
            </div>
            <!-- row end -->
         </div>
      </div>
      <!-- contact end -->
</template>
<script>
export default {
    name:'Contact',
    props:{}
}
</script>