document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("nav ul li a");
  var sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function() {
    var currentSectionId = "";
    sections.forEach(function(section) {
      if (isInViewport(section)) {
        currentSectionId = section.id;
      }
    });

    links.forEach(function(link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
      }
    });
  });

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});