
document.getElementById("hero-title").textContent = "Willkommen beim Zeichnungsbüro Neumann";
document.getElementById("hero-text").textContent = "Professionelle CAD-Zeichnungen und Planungsunterstützung für Ihre Projekte.";

document.getElementById("ueber-uns-text").textContent = "Wir sind ein erfahrenes Zeichnungsbüro mit Fokus auf Architektur- und Bauzeichnungen. Mit Leidenschaft für Präzision unterstützen wir Architekten, Ingenieure und Bauherren bei der Umsetzung ihrer Projekte.";

const leistungen = [
  "Erstellung von CAD-Zeichnungen",
  "Baueingabe- und Ausführungspläne",
  "3D-Visualisierungen",
  "Digitale Planbearbeitung"
];

const leistungenListe = document.getElementById("leistungen-liste");
leistungen.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  leistungenListe.appendChild(li);
});
