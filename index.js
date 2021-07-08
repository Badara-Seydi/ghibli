function getFilmsFromApi() {

fetch("https://ghibliapi.herokuapp.com/films")//ici je fetch l'API , je peux utilises ses données dans un .then ou une promise.
    .then(res => res.json())
    .then (data => {  // onauraient pu faire une Promise mais le .then était tout aussi simple et clair .
     console.log(data);
     const films = data;

     compteur = 0 ; // ici le compteur me permet de selectionner un élément du tableau d'image a chaque tour de boucle ! ligne 43
     for (const film of films) { 
        const div = document.createElement("div")
        const h2= document.createElement("h2");
        const img = document.createElement("img");
        const p =document.createElement("p");
        const time = document.createElement("p");
        const director = document.createElement("p");
        const releaseDate = document.createElement("p");
        const nav= document.getElementById('nav');


        h2.innerHTML=film.title;
        p.innerHTML=film.description;
        time.innerHTML=("Duration : ")+film.running_time+" mns";
        director.innerHTML = ("Director : ")+film.director;
        releaseDate.innerHTML= ('Release date : '+ film.release_date);
        
        
        
        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(time);
        div.appendChild(director);
        div.appendChild(releaseDate);
        nav.appendChild(div);
        
            
        img.src=slide[compteur];
        compteur++;
        
  }} );};
        
  
  getFilmsFromApi()

        var slide = [
                "https://images-na.ssl-images-amazon.com/images/I/61KMGMDsf7L._SX412_BO1,204,203,200_.jpg",
                "https://optimise2.assets-servd.host/utter-seal/production/uploads/graveofthefireflies2.jpeg?w=1200&h=675&q=75&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&crop=focalpoint&s=1e60600e4138fb8aa941368b2991bc30",
                "https://www.brightwalldarkroom.com/wp-content/uploads/2017/04/truechildrenscinema.png",
                "https://fantoche.ch/sites/default/files/styles/project_intermediate/public/kikis_delivery_service__1.jpg?itok=-h1Kg2oo",
                "https://static.fnac-static.com/multimedia/Images/FR/NR/38/04/1a/1705016/1540-1/tsp20210203114407/Souvenirs-peu-a-peu-omohide-poroporo.jpg",
                "https://fr.web.img4.acsta.net/r_654_368/newsv7/20/04/10/15/10/5375747.jpg",
                "https://www.studioghibli.fr/wp-content/uploads/2009/07/pompoko-1024x614.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71Cl-PQhhCL._AC_SL1500_.jpg",
                "http://www.lesecransterribles.com/wp-content/uploads/2018/08/mono-1140x645.jpg",
                "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABW7l1U71OEbC3OuTt-6b8Ud3TBahZzS5_NXQoSBvPtVuYiBPQmjs8Plo6gZ5FKelI8FUMRHx-fGFD9v5i2XxLc1sRWRC.jpg?r=37b",
                "https://images-na.ssl-images-amazon.com/images/I/515A2S89QHL._AC_SY445_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81NvXSjG2TL.jpg",
                "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51qyfcSrd-L._AC_SY445_.jpg",
                "https://www.glenat.com/sites/default/files/images/livres/couv/9782723470575-T.jpg",
                "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/139/1rlhcruz2gyrjekjypfk2ijv8ad-203.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81JVKziDNAL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/715RCCBuZEL.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81MOMR6RnOL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/51IbSj3RZ7L._AC_.jpg",
                "https://upload.wikimedia.org/wikipedia/en/f/fe/The_Red_Turtle.png",
               ];


//La fonction ChangeSlide me permettait de faire defiler les images une a une afin de vérifier qu'elles étaient bonnes avant de les insérer dans chaque article , une fois vérifier je la commente car pas utile , mais la fonctionnalité fonctionne , bouton précédent suivant et interval de diaporama efficace.


//         var numero = 0;

// function ChangeSlide(sens) {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementById("slide").src = slide[numero];

    

//     // setInterval("ChangeSlide(1)", 2000);   //pour activer le slider automatique
// };


             
    
    
    
      
    