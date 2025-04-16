function showFeatured(element) {
    const title = element.getAttribute("data-title");
    const description = element.getAttribute("data-description");
    const imageSrc = element.getAttribute("data-image");
  
    document.getElementById("featured-title").textContent = title;
    document.getElementById("featured-description").textContent = description;
    document.getElementById("featured-image").src = imageSrc;
  }

  
  function handleKeyDown(event, element) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showFeatured(element);
    }
  }