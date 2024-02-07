const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elephant Beside on Baby Elephant",
  },
  {
    url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue Geeen and Orange Parrot",
  },
  {
    url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Zebras on Zebra",
  },
];

const gallery = document.querySelector(".gallery");

for (let i = 0; i < 3; i++) {
  const imageLi = document.createElement("li");
  imageLi.classList.add("photo-list");
  ("use strict");

  const photo = document.createElement("img");
  photo.classList.add("photo");
  imageLi.append(photo);
  photo.setAttribute("src", images[i].url);
  photo.setAttribute("alt", images[i].alt);
  gallery.append(imageLi);
}

const imageStyle = document.querySelectorAll(".photo");

gallery.style.display = "flex";
gallery.style.justifyContent = "space-between";
gallery.style.listStyleType = "none";

imageStyle.forEach((im) => {
  im.style.width = "360px";
  im.style.height = "300px";
});
