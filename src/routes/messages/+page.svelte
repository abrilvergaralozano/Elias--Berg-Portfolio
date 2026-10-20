<script>
  let { data } = $props();
</script>

<main class="messages">
  <h1>Messages</h1>

  {#if data.messages.length === 0}
    <p>No messages yet.</p>
  {:else}
    {#each data.messages as msg}
      <article>
        <h2>{msg.name}</h2>
        <p>{msg.email}</p>
        <p>{msg.message}</p>
      </article>
    {/each}
  {/if}
</main>