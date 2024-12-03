<template>
  <section id="contact" class="contact">

    <div>
      <h2 class="text-4xl font-bold mb-8 text-center border-b-4 border-accent inline-block px-6">Contact Us</h2>
    </div>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>

      <button type="submit">Submit</button>
    </form>

  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert('Thank you for your message!');
    },
  },
};
</script>

<style>
.contact {
  padding: 40px 20px;
  background-color: var(--secondary);
}

form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid var(--dark-green);
  border-radius: 5px;
}
</style>
