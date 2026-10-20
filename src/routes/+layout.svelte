<script>
  import '../style.css';
  let { children } = $props();
</script>

<header>
  <a href="/" class="logo">Elias Berg</a>
  <nav>
    <a href="/">Work</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/messages">Messages</a>
  </nav>
</header>

{@render children()}

<footer>
  <p>© 2026 Elias Berg</p>
</footer>