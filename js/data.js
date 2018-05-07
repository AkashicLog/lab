const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];

window.onload =function fakeContent() {
    let div =document.createElement("div");
    div.className="flex-container justify";
    for(let i = 0;i<countries.length;++i){
        let divelement =document.createElement("div");
        let p1_element = document.createElement("p");
        let p2_element =document.createElement("p");
        let countries_title =document.createElement("h2");
        let continnet_title = document.createElement("h3");
        let cities_title = document.createElement("h3");
        let photo_title= document.createElement("h3");
        let button=document.createElement("button");
        divelement.className="item";
        p1_element.className ="inner-box justify";
        p2_element.className ="inner-box justify";
        p1_element.style.boxSizing ="border-box";
        p2_element.style.boxSizing ="border-box";
        cities_title.innerText ="Cities";
        photo_title.innerText ="Popular Photos";
        countries_title.innerText = countries[i].name;
        continnet_title.innerText =countries[i].continent;
        button.innerText="View";
        p1_element.appendChild(cities_title);
        p2_element.appendChild(photo_title);
        for(let j =0;j <countries[i].cities.length;++j){
            let city = document.createElement("ul");
            city.innerText=countries[i].cities[j];
            p1_element.appendChild(city);
        }
        for(let k=0;k<countries[i].photos.length;++k){
            let photosrc = "./images/"+countries[i].photos[k];
            let temporaryphoto= document.createElement("img");
            temporaryphoto.src= photosrc;
            p2_element.appendChild(temporaryphoto);
        }
        p2_element.appendChild(button);
        divelement.appendChild(countries_title);
        divelement.appendChild(continnet_title);
        divelement.appendChild(p1_element);
        divelement.appendChild(p2_element);
        div.appendChild(divelement);
    }
    document.body.replaceChild(div,document.getElementsByTagName("div")[0])
};