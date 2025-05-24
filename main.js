//function to get the current year for the copyright
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

document.querySelector(
  ".footertext"
).textContent = `${getCurrentYear()} © Spots`;

const images = document.querySelectorAll("img");
// adding an event on each of the images
images.forEach((img) => {
  img.addEventListener("click", function () {
    const imageContainer = document.createElement("div"); // create and style div element
    imageContainer.style.top = "0";
    imageContainer.style.left = "0";
    imageContainer.style.width = "100%";
    imageContainer.style.height = "100%";
    imageContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    imageContainer.style.display = "flex";
    imageContainer.style.position = "fixed";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center";
    imageContainer.style.zIndex = "1000";
    imageContainer.innerHTML = "";

    // create and  style image element
    const previewImage = document.createElement("img");
    previewImage.src = img.src;
    previewImage.style.maxWidth = "80%";
    previewImage.style.maxHeight = "80%";

    // create and style p element
    const imgTitle = document.createElement("p");
    imgTitle.textContent = img.getAttribute("data-name");
    imgTitle.style.color = "#fff";
    imgTitle.style.fontSize = "20px";
    imgTitle.style.marginTop = "0px";
    imgTitle.style.marginInline = "10px";

    // append the image and p elements to the div
    imageContainer.appendChild(previewImage);
    imageContainer.appendChild(imgTitle);
    document.body.appendChild(imageContainer);

    // to remove the image when clicked
    imageContainer.addEventListener("click", function () {
      document.body.removeChild(imageContainer);
    });
  });
});
