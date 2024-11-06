<template>
  <article class="ada-form border-2 border-brand-black rounded-lg p-5">
    <h2 class="mb-5">Pošaljite nam poruku</h2>
    <form @submit.prevent="submitForm" novalidate>

      <div class="form-group">
        <label>Ime: * <span class="sr-only">obavezno polje</span>
          <span v-if="showErrors && !contactForm.name">Ovo polje je obavezno</span>
          <input name="name" type="text" v-model="contactForm.name" autocomplete="name" required />
        </label>
      </div>

      <div class="form-group">
        <label>Email: * <span class="sr-only">obavezno polje</span>
          <span v-if="showErrors && !isValidEmail">Ispravan email je obavezan</span>
          <input name="email" type="email" v-model="contactForm.email" autocomplete="email" required />
        </label>
      </div>

      <div class="form-group">
        <label>Poruka: <span class="sr-only">opciono polje</span>
          <textarea name="message" v-model="contactForm.message" autocomplete="on"></textarea>
        </label>
      </div>

      <p>Slanjem ove poruke slažete se sa našom <NuxtLink to="/politika-privatnosti" class="hover:underline">Politikom&nbsp;privatnosti</NuxtLink>.</p>

      <button class="btn-2 w-full !rounded-md my-2" type="submit">Pošalji</button>

      <!-- Display a success message if the form is submitted successfully -->
      <p class="m-0"><span class="text-[1.3em]">{{ successMessage }}</span>&nbsp;</p>
      <p class="m-0"><span class="text-[1.3em]">{{ errorMessage }}</span></p>
    </form>
  </article>
</template>

<script lang="ts" setup>
// Initialize form state with default properties
const contactForm: any = ref({
  name: '',
  email: '',
  message: '', // Message is now optional
});

// State to trigger error display after form submission
const showErrors = ref(false);

// Success message state
const successMessage = ref('');
const errorMessage = ref('');

// Computed property to validate email format
const isValidEmail = computed(() => {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(contactForm.value.email);
});

// Define optional fields (e.g., message)
const optionalFields = ['message'];

// Dynamic form validation function
const isFormValid = () => {
  // Loop through each field in contactForm and check if it's empty
  for (const key in contactForm.value) {
    // Skip optional fields from validation
    if (optionalFields.includes(key)) {
      continue;
    }

    // If a required field is empty, the form is invalid
    if (!contactForm.value[key]) {
      return false;
    }
  }

  // Additional custom validation for email field
  if (!isValidEmail.value) {
    return false;
  }

  return true; // If all fields are valid
};

// Form submission handler
const submitForm = async () => {
  showErrors.value = true;

  if (!isFormValid()) {
    const firstInvalidInput: any = document.querySelector('form [required]:invalid');
    if (firstInvalidInput) {
      firstInvalidInput.focus();
    }
    return;
  }

  try {
    successMessage.value = 'Poruka se šalje...';
    const response: any = await $fetch('/api/send-email', {
      method: 'POST',
      body: contactForm.value,
    });

    successMessage.value = response.message;
    errorMessage.value = response.error;
    contactForm.value = { name: '', email: '', message: '' };
    showErrors.value = false;
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  } catch (error) {
    successMessage.value = 'Neuspešno slanje poruke.';
  }
};
</script>