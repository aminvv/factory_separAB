import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements AfterViewInit {
  isSignUp = true;   // true = ثبت نام ، false = ورود
  formValid = false;

  ngAfterViewInit() {
    this.checkForm();
    this.enableAutoDirection(); // حتما اینو اضافه کن
  }

  enableAutoDirection() {
    const inputFields = document.querySelectorAll<HTMLInputElement>('.input__field');
    inputFields.forEach(input => {
      input.addEventListener('input', () => {
        if (/^[\u0600-\u06FF]/.test(input.value)) {
          input.style.direction = 'rtl';
          input.style.textAlign = 'right';
          input.classList.remove('english');
        } else {
          input.style.direction = 'ltr';
          input.style.textAlign = 'left';
          input.classList.add('english');
        }
      });
    });
  }

  toggleForm(event: Event) {
    event.preventDefault();
    this.isSignUp = !this.isSignUp;
    this.formValid = false;
    setTimeout(() => this.checkForm());
    setTimeout(() => this.enableAutoDirection()); // وقتی فرم تغییر کرد دوباره فعال کن
  }

  checkForm() {
    const requiredInputs = Array.from(document.querySelectorAll<HTMLInputElement>('input[required]'));
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmInput = document.getElementById('confirm-password') as HTMLInputElement;

    const validate = () => {
      const allFilled = requiredInputs.every(input => input.value.trim() !== '');
      const passwordsMatch = this.isSignUp ? (passwordInput?.value === confirmInput?.value) : true;
      this.formValid = allFilled && passwordsMatch;
    };

    requiredInputs.forEach(input => input.addEventListener('input', validate));
    if (passwordInput) passwordInput.addEventListener('input', validate);
    if (confirmInput) confirmInput.addEventListener('input', validate);
  }
}
