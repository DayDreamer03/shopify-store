document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu-link');
  const featuredCollectionContainer = document.getElementById('featured-collection');

  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent page reload

      const collectionHandle = link.getAttribute('data-collection-handle');

      // Fetch the collection using Shopify's `/collections/<handle>` JSON endpoint
      fetch(`/collections/${collectionHandle}?view=ajax`)
        .then((response) => response.text())
        .then((html) => {
          // Replace the content of the featured collection container
          featuredCollectionContainer.innerHTML = html;
        })
        .catch((error) => console.error('Error loading collection:', error));
    });
  });
});
