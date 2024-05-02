import React from 'react'


function Afooter() {
  return (
   <>
 <div>
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer ">
    <div className="copyright">
      © Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer>{/* End Footer */}
  {/* Vendor JS Files */}
  <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/chart.js/chart.umd.js"></script>
  <script src="assets/vendor/echarts/echarts.min.js"></script>
  <script src="assets/vendor/quill/quill.min.js"></script>
  <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
  <script src="assets/vendor/tinymce/tinymce.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  
  {/* Template Main JS File */}
  <script src="assets/js/main.js"></script>
</div>

</>

  )
}

export default Afooter