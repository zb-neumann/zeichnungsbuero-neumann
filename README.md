<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zeichnungsbüro Neumann</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lora:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #003366, #00559e);
      color: #f0f0f0;
    }

    header {
      background: #003366;
      padding: 20px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    header img {
      height: 60px;
    }

    nav a {
      text-decoration: none;
      color: white;
      margin: 0 15px;
      font-weight: bold;
      font-size: 18px;
      transition: color 0.3s;
    }

    nav a:hover {
      color: #00559e;
    }

    main {
      padding: 60px 20px;
    }

    section {
      margin-bottom: 60px;
      text-align: center;
    }

    #startseite {
      background: rgba(0, 0, 0, 0.4);
      padding: 50px;
      border-radius: 8px;
    }

    #startseite h1 {
      font-size: 40px;
      margin-bottom: 20px;
    }

    #startseite p {
      font-size: 20px;
      max-width: 700px;
      margin: 0 auto;
    }

    #leistungen {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      padding: 20px;
    }

    .leistung-card {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .leistung-card:hover {
      transform: translateY(-10px);
    }

    .leistung-card h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    form {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      width: 50%;
      margin: 0 auto;
    }

    input, textarea {
      width: 100%;
      padding: 15px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    button {
      background-color: #003366;
      color: white;
      padding: 15px 25px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #00559e;
    }

    footer {
      background-color: #003366;
      color: white;
      padding: 20px;
      text-align: center;
      position: relative;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>

  <header>
    <img src="logo.png" alt="Zeichnungsbüro Neumann Logo">
    <nav>
      <a href="#startseite">Startseite</a>
      <a href="#ueber-uns">Über uns</a>
      <a href="#leistungen">Leistungen</a>
      <a href="#kontakt">Kontakt</a>
    </nav>
  </header>

  <main>
    <section id="startseite">
      <h1>Willkommen beim Zeichnungsbüro Neumann</h1>
      <p>Professionelle CAD-Zeichnungen und Planungsunterstützung für Ihre Projekte.</p>
    </section>

    <section id="leistungen">
      <div class="leistung-card">
        <h3>CAD-Zeichnungen</h3>
        <p>Wir erstellen präzise und detaillierte CAD-Zeichnungen für Ihre Projekte.</p>
      </div>
      <div class="leistung-card">
        <h3>Baueingabepläne</h3>
        <p>Erstellen Sie Baueingabepläne und Ausführungszeichnungen für Ihre Bauvorhaben.</p>
      </div>
      <div class="leistung-card">
        <h3>3D-Visualisierungen</h3>
        <p>Wir liefern fotorealistische 3D-Visualisierungen für Ihr Architekturprojekt.</p>
      </div>
    </section>

    <section id="kontakt">
      <h2>Kontakt</h2>
      <form name="kontakt" method="POST" data-netlify="true">
        <input type="text" name="name" placeholder="Ihr Name" required><br>
        <input type="email" name="email" placeholder="Ihre E-Mail-Adresse" required><br>
        <textarea name="nachricht" placeholder="Ihre Nachricht" required></textarea><br>
        <button type="submit">Absenden</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Zeichnungsbüro Neumann</p>
  </footer>

</body>
</html>
