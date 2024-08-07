document.addEventListener("DOMContentLoaded", function () {
  // Charger les données depuis le fichier JSON
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      // Créer des cartes pour chaque élément dans le JSON
      const cardContainer = document.getElementById("card-container");

      data.forEach(item => {
        const card = createCard(item);
        cardContainer.appendChild(card);
      });
    })
    .catch(error => console.error("Erreur de chargement du JSON", error));

  // Fonction pour créer une carte avec titre, image et lien PDF
  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "portfolio-item", "filter-authers", "card");

    const link = document.createElement("a");
    link.href = item.link;

    const image = document.createElement("img");
    image.src = item.image;
    image.classList.add("img-fluid");
    image.alt = item.title;

    const portfolioInfo = document.createElement("div");
    portfolioInfo.classList.add("portfolio-info");

    const title = document.createElement("h4");
    title.textContent = item.title;

    const organization = document.createElement("p");
    organization.textContent = item.organization;

    const previewLink = document.createElement("a");
    previewLink.href = item.image;
    previewLink.setAttribute("data-gallery", "portfolioGallery");
    previewLink.classList.add("portfolio-lightbox", "preview-link");
    previewLink.title = item.title;
    previewLink.innerHTML = '<i class="bx bx-plus"></i>';

    const downloadLink = document.createElement("a");
    downloadLink.href = item.pdfUrl;
    downloadLink.classList.add("details-link");
    downloadLink.title = "Download";
    downloadLink.target = "_blank";
    downloadLink.innerHTML = '<i class="bx bx-download"></i>';

    portfolioInfo.appendChild(title);
    portfolioInfo.appendChild(organization);
    portfolioInfo.appendChild(previewLink);
    portfolioInfo.appendChild(downloadLink);

    link.appendChild(image);
    link.appendChild(portfolioInfo);

    card.appendChild(link);

    return card;
  }
});
