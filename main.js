document.addEventListener('DOMContentLoaded', () => {
      const bookingModalEl = document.getElementById('bookingModal');
      const bookingModal = new bootstrap.Modal(bookingModalEl);
      const departmentSelect = document.getElementById('departmentSelect');
      const bookingForm = document.getElementById('bookingForm');

      // Open Modal via General Book Buttons
      document.querySelectorAll('.btn-open-booking').forEach(btn => {
        btn.addEventListener('click', () => {
          bookingModal.show();
        });
      });

      // Open Modal & Auto-Select Department
      document.querySelectorAll('.btn-dept-booking').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const deptName = e.currentTarget.getAttribute('data-dept');
          if (deptName) {
            departmentSelect.value = deptName;
          }
          bookingModal.show();
        });
      });

      // Set Min Date for Visit to Today
      const visitDateInput = document.getElementById('visitDate');
      if (visitDateInput) {
        const today = new Date().toISOString().split('T')[0];
        visitDateInput.setAttribute('min', today);
      }

      // Form Validation & Submit Logic
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Check validity
        if (!bookingForm.checkValidity()) {
          e.stopPropagation();
          bookingForm.classList.add('was-validated');
          return;
        }

        // Hide Modal
        bookingModal.hide();

        // Show Alert
        alert('Your appointment has been confirmed successfully!');

        // Reset Form
        bookingForm.reset();
        bookingForm.classList.remove('was-validated');
      });
    });