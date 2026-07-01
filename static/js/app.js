const icons = {
  "shopping-bag": '<path d="M6 2h12l1 5H5l1-5Z"/><path d="M3 7h18l-2 15H5L3 7Z"/><path d="M9 11a3 3 0 0 0 6 0"/>',
  "edit-3": '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "trash-2": '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  truck: '<path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>',
  package: '<path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  "messages-square": '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/><path d="M8 9h8"/><path d="M8 13h5"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.5 14A6 6 0 1 1 15.5 14c-.7.45-1.5 1.5-1.5 3h-4c0-1.5-.8-2.55-1.5-3Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "upload-cloud": '<path d="M16 16l-4-4-4 4"/><path d="M12 12v9"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',
  "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/>',
  "file-spreadsheet": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M10 9v8"/>',
  "clipboard-check": '<path d="M9 5h6"/><path d="M9 3h6v4H9z"/><path d="M5 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1"/><path d="m9 14 2 2 4-4"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  "alert-circle": '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  type: '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>',
  "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10Z"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  "bar-chart-3": '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  hash: '<path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3 8 21"/><path d="m16 3-2 18"/>',
  "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
};

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.getAttribute("data-icon");
    const path = icons[name];
    if (!path) return;
    node.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  });
}

function updateCharCount() {
  const input = document.querySelector("#reviewInput");
  const count = document.querySelector("#charCount");
  if (!input || !count) return;
  count.textContent = `${input.value.length} / 1000`;
}

function renderPrediction(data) {
  const card = document.querySelector("#predictionCard");
  const table = document.querySelector("#rankingTable");
  const interpretation = document.querySelector("#interpretation");
  const sentimentCard = document.querySelector("#sentimentCard");
  const sentimentTable = document.querySelector("#sentimentRankingTable");
  const sentimentInterpretation = document.querySelector("#sentimentInterpretation");
  if (!card || !table || !interpretation) return;
  const iconMap = {
    "Kualitas Barang": "star",
    "Keamanan Kemasan": "package",
    "Kecepatan Pengiriman": "truck",
    "Pelayanan Toko": "messages-square"
  };
  const sentimentIconMap = {
    Positif: "check-circle",
    Netral: "info",
    Negatif: "alert-circle"
  };
  const sentimentColorMap = {
    Positif: "#16a34a",
    Netral: "#64748b",
    Negatif: "#dc2626"
  };
  const sentimentSoftMap = {
    Positif: "#dcfce7",
    Netral: "#f1f5f9",
    Negatif: "#fee2e2"
  };
  card.innerHTML = `
    <span class="large-category-icon" data-icon="${iconMap[data.label] || "info"}"></span>
    <div>
      <p>Kategori Utama (Prediksi)</p>
      <h3>${data.label}</h3>
      <p>Confidence Score</p>
      <strong>${data.confidence}%</strong>
      <div class="progress"><i style="width:${Math.min(data.confidence, 100)}%"></i></div>
    </div>`;
  table.innerHTML = data.ranking.map((item, index) => `
    <div class="rank-row">
      <span class="rank-num">${index + 1}</span>
      <strong>${item.label}</strong>
      <div class="progress"><i style="width:${Math.min(item.confidence, 100)}%"></i></div>
      <b>${item.confidence}%</b>
    </div>`).join("");
  interpretation.innerHTML = `<span data-icon="check-circle"></span><p><strong>Interpretasi</strong><br>Ulasan ini paling sesuai dengan kategori ${data.label} dengan tingkat keyakinan ${data.confidence}%.</p>`;

  if (data.sentiment && sentimentCard && sentimentTable && sentimentInterpretation) {
    const sentimentColor = sentimentColorMap[data.sentiment.label] || "#64748b";
    sentimentCard.style.setProperty("--accent", sentimentColor);
    sentimentCard.style.setProperty("--soft-accent", sentimentSoftMap[data.sentiment.label] || "#f1f5f9");
    sentimentCard.innerHTML = `
      <span class="large-category-icon" data-icon="${sentimentIconMap[data.sentiment.label] || "info"}"></span>
      <div>
        <p>Sentimen Utama</p>
        <h3>${data.sentiment.label}</h3>
        <p>Confidence Sentimen</p>
        <strong>${data.sentiment.confidence}%</strong>
        <div class="progress"><i style="width:${Math.min(data.sentiment.confidence, 100)}%;background:${sentimentColor}"></i></div>
      </div>`;
    sentimentTable.innerHTML = data.sentiment.ranking.map((item, index) => `
      <div class="rank-row">
        <span class="rank-num">${index + 1}</span>
        <strong>${item.label}</strong>
        <div class="progress"><i style="width:${Math.min(item.confidence, 100)}%;background:${item.color}"></i></div>
        <b>${item.confidence}%</b>
      </div>`).join("");
    sentimentInterpretation.className = data.sentiment.label === "Negatif" ? "notice danger" : data.sentiment.label === "Positif" ? "notice success" : "notice info";
    sentimentInterpretation.innerHTML = `<span data-icon="${sentimentIconMap[data.sentiment.label] || "info"}"></span><p><strong>Insight Sentimen</strong><br>Ulasan ini cenderung ${data.sentiment.label} dengan tingkat keyakinan ${data.sentiment.confidence}%.</p>`;
  }
  renderIcons();
}

function bindInputAnalysis() {
  const input = document.querySelector("#reviewInput");
  const analyze = document.querySelector("#analyzeBtn");
  const clear = document.querySelector("#clearBtn");
  if (!input || !analyze || !clear) return;

  input.addEventListener("input", updateCharCount);
  clear.addEventListener("click", () => {
    input.value = "";
    updateCharCount();
    input.focus();
  });
  analyze.addEventListener("click", async () => {
    const text = input.value.trim();
    if (!text) return;
    analyze.disabled = true;
    analyze.textContent = "Menganalisis...";
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text})
      });
      const data = await response.json();
      if (response.ok) renderPrediction(data);
    } finally {
      analyze.disabled = false;
      analyze.innerHTML = '<span data-icon="search"></span> Analisis';
      renderIcons();
    }
  });
  updateCharCount();
}

function bindUpload() {
  const fileInput = document.querySelector("#datasetFile");
  if (!fileInput) return;
  const nameNode = document.querySelector("#selectedFileName");
  const sizeNode = document.querySelector("#selectedFileSize");
  const sizeNode2 = document.querySelector("#selectedFileSize2");
  const typeNode = document.querySelector("#selectedFileType");
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;
    const sizeKb = `${Math.max(1, Math.round(file.size / 1024))} KB`;
    nameNode.textContent = file.name;
    sizeNode.textContent = sizeKb;
    sizeNode2.textContent = sizeKb;
    typeNode.textContent = file.name.split(".").pop().toUpperCase();
  });
}

function bindSidebarToggle() {
  const toggle = document.querySelector(".sidebar-toggle");
  if (!toggle) return;

  const savedState = localStorage.getItem("sidebarHidden");
  if (savedState === "true") {
    document.body.classList.add("sidebar-hidden");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
    localStorage.setItem("sidebarHidden", document.body.classList.contains("sidebar-hidden"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindSidebarToggle();
  renderIcons();
  bindInputAnalysis();
  bindUpload();
});
