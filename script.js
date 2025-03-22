fetch('content.md')
  .then(res => res.text())
  .then(md => {
    const data = parseMarkdown(md);

    document.getElementById('intro').textContent = data.intro;
    document.getElementById('position').textContent = data.current_position;
    document.getElementById('graduation').textContent = data.expected_graduation;
    document.getElementById('research').textContent = data.research_focus;
    document.getElementById('hobbies').textContent = data.hobbies;
    document.getElementById('quote').textContent = data.quote;
    document.getElementById('cv-link').href = data.cv_file;
    document.getElementById('email').textContent = data.email;
    document.getElementById('office').textContent = data.office;
    document.getElementById('newsletter').href = data.newsletter;

    document.getElementById('ig').href = data.instagram;
    document.getElementById('gh').href = data.github;
    document.getElementById('li').href = data.linkedin;
    document.getElementById('signature').textContent = data.signature;

    const presContainer = document.getElementById('presentations');
    data.presentations.forEach(p => {
      const el = document.createElement('div');
      el.innerHTML = `<h3>${p.title}</h3>
        <p><em>${p.event}</em> – ${p.date}${p.redelivery ? ` (also: ${p.redelivery})` : ''}</p>
        ${p.slides ? `<a href="${p.slides}" target="_blank">🪄 View Slides</a>` : ''}
        <p>${p.abstract}</p>`;
      presContainer.appendChild(el);
    });

    const handoutList = document.getElementById('handout-list');
    data.handouts.forEach(h => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${h.file}" download>${h.title}</a> — ${h.description}`;
      handoutList.appendChild(li);
    });

    console.log("🧙‍♂️ Aha! You peeked behind the scroll. Type ‘Reveal Arjun’ to summon a secret.");
  });

function parseMarkdown(md) {
  const lines = md.split('\n');
  const data = {};
  let current = null;

  lines.forEach(line => {
    if (line.startsWith('#')) return;
    if (/^\s*- title:/.test(line)) {
      current = line.includes('presentations') ? 'presentations' : 'handouts';
      if (!data[current]) data[current] = [];
      data[current].push({});
    } else if (line.includes(':')) {
      const [key, ...rest] = line.split(':');
      const value = rest.join(':').trim();
      if (current && data[current].length > 0) {
        data[current][data[current].length - 1][key.trim()] = value;
      } else {
        data[key.trim()] = value;
      }
    }
  });

  return data;
}

// Potion Toggle
const toggleBtn = document.getElementById("toggle-theme");
let toggleCount = 0;
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleCount++;
  if (toggleCount === 3) {
    alert("🪄 You have unlocked Nerd Mode™. The potion bubbles with approval.");
  }
});
