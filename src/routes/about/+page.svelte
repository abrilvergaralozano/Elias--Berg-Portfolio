<main class="about">
<div class ="about-columns">
    <img class="about-portrait" src="images/cafetable.webp" alt="Elias Berg holding a camera in a café">
       <div class="about-text">
      <h1>About</h1>
            <p class="about-lead">I am a Stockholm-based photographer who works with restaurants, bakeries and cafés. I like quiet mornings, window light and food that still looks warm.</p>
                  <h2>My approach</h2>
      <p>No heavy styling. I shoot what the kitchen actually serves, in the space where guests eat it.</p>
            <h2>What I do</h2>
      <ul>
        <li>Menu and dish photography</li>
        <li>Interior and atmosphere shots</li>
        <li>Opening and event coverage</li>
      </ul>
    </div> 
</div>
  <section class="about-cta">
    <p>Have a space or a menu to photograph?</p>
    <a href="/contact" class="button-outline">Get in touch</a>
  </section>
</main>

<style>
  .about {
    max-width: 72rem;
    margin: 0 auto;
    padding: 72px 1.5rem 80px;
    display: flex;
    flex-direction: column;
    gap: 56px;
  }

  .about-columns {
    display: flex;
    flex-wrap: wrap;
    gap: 56px;
    align-items: flex-start;
  }

    .about-portrait {
    flex: 1 1 320px;
    max-width: 26rem;
    height: 480px;
    object-fit: cover;
    background: #ECEAE5;
    border: 1px solid #CFCCC4;
  }

  .about-text {
    flex: 1 1 380px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

    .about-text h1 {
    margin: 0;
  }

  .about-text h2 {
    margin: 16px 0 0;
  }

  .about-text ul {
    margin: 0;
    padding-left: 20px;
    line-height: 1.9;
  }

    .about-cta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-top: 40px;
    border-top: 1px solid #D6D4CE;
  }

  .about-cta p {
    margin: 0;
    font-size: 20px;
  }

  .button-outline {
    padding: 14px 22px;
    border: 2px solid #1C1C1A;
    color: #1C1C1A;
    text-decoration: none;
    font-weight: 500;
  }

    .button-outline:hover {
    background: #1C1C1A;
    color: #FFFFFF;
  }

  .button-outline:focus-visible {
    outline: 3px solid #1F5FD1;
    outline-offset: 3px;
  }

  @media (max-width: 700px) {
    .about {
      padding-top: 40px;
    }

    .about-portrait {
      max-width: 100%;
      height: 360px;
    }

    
  }
</style>