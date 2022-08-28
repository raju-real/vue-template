
<style scope>
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i");
  @import "../../assets/admin/vendor/bootstrap/css/bootstrap.min.css";
  @import "../../assets/admin/vendor/bootstrap-icons/bootstrap-icons.css";
  @import "../../assets/admin/vendor/boxicons/css/boxicons.min.css";
  @import "../../assets/admin/vendor/quill/quill.snow.css";
  @import "../../assets/admin/vendor/quill/quill.bubble.css";
  @import "../../assets/admin/vendor/remixicon/remixicon.css";
  @import "../../assets/admin/vendor/simple-datatables/style.css";

  @import "../../assets/admin/css/style.css";
</style>

<template>
	  <!-- ======= Header ======= -->
  	<header-app />
  <!-- ======= Sidebar ======= -->
  
  <sidebar-app />

  <main id="main" class="main">

    <router-view />

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer-app />

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>

import {apexcharts} from '../../assets/admin/vendor/apexcharts/apexcharts.min.js';
import bootstrapBundle from '../../assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js';
import chart from '../../assets/admin/vendor/chart.js/chart.min.js';
import echarts from '../../assets/admin/vendor/echarts/echarts.min.js';
import quill from '../../assets/admin/vendor/quill/quill.min.js';
import simpleDatatables from '../../assets/admin/vendor/simple-datatables/simple-datatables.js';
import tiniMicy from '../../assets/admin/vendor/tinymce/tinymce.min.js';
import emailValidate from '../../assets/admin/vendor/php-email-form/validate.js';
import mainJs from '../../assets/admin/js/main.js';

import HeaderLayout from './headerLayout.vue';
import SidebarLayout from './SidebarLayout.vue';
import FooterLayout from './FooterLayout.vue';

export default {
	components: {
		'header-app': HeaderLayout,
		'sidebar-app': SidebarLayout,
		'footer-app': FooterLayout,
	},
  
}
</script>

