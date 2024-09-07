data ={
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney, Australia",
            "imageUrl": "js_essentials_pics/sydney.jpeg",
            "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            "name": "Melbourne, Australia",
            "imageUrl": "js_essentials_pics/melbourne.jpeg",
            "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
          }
        ]
      },
      {
        "id": 2,
        "name": "Japan",
        "cities": [
          {
            "name": "Tokyo, Japan",
            "imageUrl": "js_essentials_pics/tokyo.jpg",
            "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            "name": "Kyoto, Japan",
            "imageUrl": "js_essentials_pics/kyoto.jpg",
            "description": "Known for its historic temples, gardens, and traditional tea houses."
          }
        ]
      },
      {
        "id": 3,
        "name": "Brazil",
        "cities": [
          {
            "name": "Rio de Janeiro, Brazil",
            "imageUrl": "js_essentials_pics/riodejaniro.jpg",
            "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            "name": "São Paulo, Brazil",
            "imageUrl": "js_essentials_pics/saopaulo.jpg",
            "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Angkor Wat, Cambodia",
        "imageUrl": "js_essentials_pics/angkorwat.jpeg",
        "description": "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        "id": 2,
        "name": "Taj Mahal, India",
        "imageUrl": "js_essentials_pics/tajmahal.jpeg",
        "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora, French Polynesia",
        "imageUrl": "js_essentials_pics/borabora.jpeg",
        "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Copacabana Beach, Brazil",
        "imageUrl": "js_essentials_pics/copacabana.jpeg",
        "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
  }






let c=document.getElementById("modal1")
c.style.backgroundColor="transparent"
c.style.padding="20px"
let userin=document.getElementById("userin")
function searchbutton(){
    c.textContent=""
    let m=document.createElement("modal")
    m.setAttribute("class","d-flex flex-column justify-content-center")
    m.style.backgroundColor="transparent"
    m.style.textAlign="center"
    m.style.borderBlockStyle="solid"
    m.style.borderWidth="5px"
    m.style.borderColor="white"
    if(userin.value == "country"){
        data.countries.forEach(function(a){
        let p=document.createElement("p")
        p.textContent=a.name
        p.style.fontWeight="bold"
        p.style.margin="8px"
        m.appendChild(p)
        a.cities.forEach(function(b){
            let imgEle=document.createElement("div")
            imgEle.style.textAlign="center"
            let img = document.createElement("img")
            img.src= b.imageUrl
            img.classList.add("img1")
            let p1=document.createElement("p")
            img.style.textAlign="center"
            p1.textContent=b.name
            p1.style.margin="4px"
            p1.style.fontWeight="bold"
            let p2=document.createElement("p")
            p2.textContent=b.description
            imgEle.appendChild(img)
            m.appendChild(imgEle)
            m.appendChild(p1)
            m.appendChild(p2)

        })
        c.style.backgroundColor="white"
        c.appendChild(m)
    })}
    else if(userin.value == "beach"){
        data.beaches.forEach(function(a){
        let p=document.createElement("p")
        p.textContent=a.name
        p.style.fontWeight="bold"
        p.style.margin="4px"
        let imgEle=document.createElement("div")
        imgEle.style.textAlign="center"
        let img = document.createElement("img")
        img.src= a.imageUrl
        img.classList.add("img1")
        let p1=document.createElement("p")
        p1.textContent=a.description
        imgEle.appendChild(img)
        m.appendChild(imgEle)
        m.appendChild(p)
        m.appendChild(p1)
        c.style.backgroundColor="white"
        c.appendChild(m)
    })}
    else if(userin.value == "temple"){
        data.temples.forEach(function(a){
        let p=document.createElement("p")
        p.textContent=a.name
        p.style.fontWeight="bold"
        p.style.margin="4px"
        let imgEle=document.createElement("div")
        imgEle.style.textAlign="center"
        let img = document.createElement("img")
        img.src= a.imageUrl
        img.classList.add("img1")
        let p1=document.createElement("p")
        p1.textContent=a.description
        imgEle.appendChild(img)
        m.appendChild(imgEle)
        m.appendChild(p)
        m.appendChild(p1)
        c.style.backgroundColor="white"
        c.appendChild(m)
    })}
}
function cleardiv(){
c.replaceChildren()
c.style.backgroundColor="transparent"
}

