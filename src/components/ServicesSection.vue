<template>
  <section id="services" class="services">
    <h2 class="text-4xl font-bold mb-8 text-center border-b-4 border-accent inline-block px-6">Our Services</h2>
    <div class="service-list">
      <div class="service">
        <h3 class="text-2xl font-semibold underline">Haircuts</h3>
        <p>Get a fresh new look with our professional stylists.</p>
      </div>
      <div class="service">
        <h3 class="text-2xl font-semibold underline">Coloring</h3>
        <p>Enhance your beauty with vibrant and natural colors.</p>
      </div>
      <div class="service">
        <h3 class="text-2xl font-semibold underline">Styling</h3>
        <p>Perfect hairstyles for any occasion.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.services {
  padding: 40px 20px;
  background-color: var(--background);
}

.service-list {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.service {
  background-color: var(--light-green);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>
