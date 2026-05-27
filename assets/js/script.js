const whatsappMessage =
  "Olá! Vim pelo site da Daniel & Clarice Aquatics e quero consultar disponibilidade dos peixes.";

const whatsappPhone = "5521971681663";
const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}
