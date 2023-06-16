import { useState, useEffect } from 'react';

// Bootstrap Validation Hook
export function useBsValidation() {
  const [isValidated, setIsValidated] = useState(false);
  
  useEffect(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          
          form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.checkValidity()) { 
              event.stopPropagation(); 
            }
            form.classList.add('was-validated');
            let requiredInputs = form.querySelectorAll("input").length;
            let validatedInputs = form.querySelectorAll("input:valid").length;
            // console.log(validatedInputs, requiredInputs);
            if(validatedInputs === requiredInputs) {
              form.classList.add('validation-success');
              setIsValidated(true);
            }
            else {
              form.classList.remove('validation-success');
              setIsValidated(false);
            }
          }, false);
          
        })
  }, [isValidated]);
  return isValidated;
}
