 //to get the current year for the copyright
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

document . addEventListener('DOMContentLoaded', function () {
  // Define the images
  const images = [
   {//
    src: 'assets/img/Mask group.png',
    caption: 'Val Thorens'
   },
   {
    src:'assets/img/pexels-kassandre-pedro-8639743 1.png',
    caption: 'Restaurant terrace'
   },
   {
    src: 'assets/img/Mask group (1).png',
    caption: 'An outdoor cafe'
   },
   {
    src: 'assets/img/pexels-kassandre-pedro-8639743 1-3.png' ,
    caption: 'A long bridge over forest'
   },
   {
    src: 'assets/img/pexels-kassandre-pedro-8639743 1-4.png' ,
    caption: 'Tunnel with morning light'
   },
   {
    src: 'assets/img/pexels-kassandre-pedro-8639743 1-5.png' ,
    caption: 'Mountain house'
   }
  ];

  //Remove existing gallery if it exists
  const existingGallery = document.getElementById('gallery');
  if (existingGallery) {
    existingGallery.remove();
  }

  //Create new gallery container
  const gallery = document.createElement('div');
  gallery.id = 'gallery';
  document.body.appendChild(gallery);

  //Now add images
  images.forEach(img => {
    const el = document.createElement('img');
    el.src = img.src;
    el.dataset.caption = img.caption;
    el.className = 'Images';
    gallery.appendChild(el);
  });

  // Injecting the modal
  const modal = document.createElement('div');
  modal.id = 'image-modal';
  modal.className = 'modal';
  modal.innerHTML = `
     <span class="modal-close">&times;</span>
     <div class="modal-body">
       <img id="modal-img" class="modal-content" />
       <div class="modal-caption">
         <p id="modal-text"></p>
         <span id="modal-heart" class="heart">♡</span>
       </div>
     </div>
     `;
     document.body.appendChild(modal);

     // Modal Interaction
     document.querySelectorAll('.Images').forEach(img => {
       img.addEventListener('click', function () {
        console.log("image clicked:", this.src);
         document.getElementById('image-modal').style.display = 'block';
         document.getElementById('modal-img').src = this.src;
         document.getElementById('modal-text').textContent = this.dataset.name;
         const heart = document.getElementById('modal-heart');
         heart.classList.remove('liked');
         heart.textContent = '♡'
       });
     });
     // Closes modal when clicking X
     document.querySelector('.modal-close').addEventListener('click', () => {
       modal.style.display = 'none';
     });
     // Closes modal when clicking outside the modal context
     window.addEventListener('click',e =>{
      if (e.target === modal) {
        modal.style.display = 'none';
      }
     });
     //Toggle heart icon
     document.getElementById('modal-heart').addEventListener('click', function () {
      this.classList.toggle('liked');
      this.textContent = this.classList.contains('liked') ? '❤' : '♡';
     });
});