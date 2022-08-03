const addBtn = document.getElementById('add');
console.log(addBtn);
addBtn.addEventListener('click', addUser);

function addUser(){
    axios.get('https://randomuser.me/api/')
    .then(function (response) {
      // handle success
      console.log(response.data.results[0].picture.medium);
      const imgUrl = response.data.results[0].picture.medium;
      const name = response.data.results[0].name.first;
      console.log(name);
      const surname = response.data.results[0].name.last;
      console.log(surname);

      createProfile(imgUrl, name, surname);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

function createProfile(url, name, surname){
    // gestisco immagine
    let image = document.createElement('img');
    image.src = url;
    image.className = 'img-fluid';

    // gestisco nome e cognome
    let scritta = document.createElement('h5');
    scritta.innerText = name + ' ' + surname;
    scritta.className = 'mt-3 text-center';
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.appendChild(scritta);

    // creo div card
    let div = document.createElement('div');
    div.className = 'card col-4';
    div.appendChild(image);
    div.appendChild(cardBody);

    document.getElementById('gallery').appendChild(div);

}



