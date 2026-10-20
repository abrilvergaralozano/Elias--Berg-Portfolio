<script>
  let { form } = $props();
</script>

<main class="contact">
  <section>
    <h1>Book a shoot</h1>
    <p>I'll get back to you within two days.</p>

    <form method="POST">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send</button>
    </form>

    {#if form?.success}
      <p class="form-success">Thanks! Message received.</p>
    {/if}
  </section>

  <div>
    <h2>Other ways to reach me</h2>
    <p>elias.berg@gmail.com</p>
    <p>Studio in Stockholm</p>
    <p>Available weekdays</p>
    <img src="/images/personwithcamera.webp" alt="Person holding a camera at a café table">
  </div>
</main>