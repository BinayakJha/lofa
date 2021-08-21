const teams = [
  {
    name: 'Ankit Subedi',
    role: 'President',
    photo: 'ankit.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Binayak Jha',
    role: 'IT Director',
    photo: 'binayak.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Prashim Timisina',
    role: 'IT Member',
    photo: 'prashim.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Aryan Sigdel',
    role: 'Vice President, IT',
    photo: 'aryan.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Prasiddha Sapkota',
    role: 'Dummy Role, Somewhere',
    photo: 'prasiddha.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Aditi Adhikari',
    role: 'Dummy Role, Somewhere',
    photo: 'aditi.jpg',
    facebook: 'aditi.05.a',
  },
  {
    name: 'Karun Dhakal',
    role: 'Dummy Role, Somewhere',
    photo: 'karun.jpg',
    facebook: 'karuz.dk.1',
  },
  {
    name: 'Abhiyan Paudel',
    role: 'Dummy Role, Somewhere',
    photo: 'abhiyan.jpg',
    facebook: 'abhiyan.paudel.1',
  },
  {
    name: 'Abhiskar Adhikari',
    role: 'Dummy Role, Somewhere',
    photo: 'abhiskar.jpg',
    facebook: 'profile.php?id=100008161808678',
  },
  {
    name: 'Samuktya Amatya',
    role: 'Dummy Role, Somewhere',
    photo: 'samuktya.jpg',
    facebook: 'samyukta.amatya.9',
  },
  {
    name: 'Shirish Baral',
    role: 'Dummy Role, Somewhere',
    photo: 'shirish.jpg',
    facebook: 'RedDevilShizzy',
  },
  {
    name: 'Animesh Shrestha',
    role: 'Dummy Role, Somewhere',
    photo: 'animesh.jpg',
    facebook: '',
  },
  {
    name: 'Lalit Yadav',
    role: 'Dummy Role, Somewhere',
    photo: 'lalit.jpg',
    facebook: 'profile.php?id=100010630032840',
  },
  {
    name: 'Nishu Shrestha',
    role: 'Dummy Role, Somewhere',
    photo: 'nishu.jpg',
    facebook: 'profile.php?id=100012133158985',
  },
  {
    name: 'Astha Sapkota',
    role: 'Dummy Role, Somewhere',
    photo: 'astha.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Manoj Budha',
    role: 'Dummy Role, Somewhere',
    photo: 'manoj.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Roshan Bist',
    role: 'Dummy Role, Somewhere',
    photo: 'roshan.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Rahul Das',
    role: 'Dummy Role, Somewhere',
    photo: 'rahul.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Sneha Maskey',
    role: 'Dummy Role, Somewhere',
    photo: 'sneha.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Nishant Bhandari',
    role: 'Dummy Role, Somewhere',
    photo: 'nishant.jpg',
    facebook: 'ak.chapagai',
  },
  {
    name: 'Ashik Chapagain',
    role: 'Dummy Role, Somewhere',
    photo: 'ashik.jpg',
    twitter: '@ChapagainAshik',
    facebook: 'ak.chapagai',
  },
];

const teamsContainer = document.querySelector('#teamsContainer');
teamsContainer.innerHTML = teams.map(
  (person) =>
    `
  <div class="discover__card swiper-slide" style="border-radius: 15px;">
      <img src="assets/img/teams/${person.photo}" alt="" class="discover__img">
      <div class="discover__data">
          <h2 class="discover__title">${person.name}</h2>
          <span class="discover__description">${person.role}</span>
          <div class="discover__social">
          ` +
    (person.facebook
      ? `
            <a href="https://facebook.com/${person.facebook}">
              <i class="ri-facebook-circle-fill"></i>
            </a>`
      : '') +
    (person.twitter
      ? `
            <a href="https://twitter.com/${person.twitter}">
                <i class="ri-twitter-fill"></i>
              </a>`
      : '') +
    (person.instagram
      ? `
              <a href="https://instagram.com/${person.instagram}">
                <i class="ri-instagram-line"></i>
              </a>`
      : '') +
    `
          </div>
      </div>
  </div>
  `
);
