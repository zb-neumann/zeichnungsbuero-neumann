<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zeichnungsbüro Neumann</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #fff;
      color: #000;
    }
    header {
      background-color: #000;
      color: #fff;
      padding: 2rem;
      text-align: center;
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
      background-color: #1a1a1a;
      padding: 1rem;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
    }
    nav a:hover {
      color: #3399ff;
    }
    section {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: auto;
    }
    .hero {
      background-color: #3399ff;
      color: #fff;
      padding: 6rem 2rem;
      text-align: center;
    }
    .leistungen {
      background-color: #f4f4f4;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 600px;
      margin: auto;
    }
    input, textarea {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    button {
      background-color: #000;
      color: #fff;
      padding: 1rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
    button:hover {
      background-color: #3399ff;
    }
    footer {
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 2rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>Zeichnungsbüro Neumann</h1>
    <p id="slogan">Präzision trifft Planung</p>
  </header>
  <nav>
    <a href="#start">Startseite</a>
    <a href="#ueber-uns">Über uns</a>
    <a href="#leistungen">Leistungen</a>
    <a href="#kontakt">Kontakt</a>
  </nav>

  <section class="hero" id="start">
    <h2 id="hero-title"></h2>
    <p id="hero-text"></p>
  </section>

  <section id="ueber-uns">
    <h2>Über uns</h2>
    <p id="ueber-uns-text"></p>
  </section>

  <section id="leistungen" class="leistungen">
    <h2>Unsere Leistungen</h2>
    <ul id="leistungen-liste"></ul>
  </section>

  <section id="kontakt">
    <h2>Kontakt</h2>
    <form>
      <input type="text" name="name" placeholder="Ihr Name" required>
      <input type="email" name="email" placeholder="Ihre E-Mail" required>
      <textarea name="nachricht" rows="5" placeholder="Ihre Nachricht" required></textarea>
      <button type="submit">Absenden</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 Zeichnungsbüro Neumann</p>
  </footer>

  <script src="content.js"></script>
</body>
</html>
