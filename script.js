    let btn = document.querySelector(".btn")
    let karta_otasi = document.querySelector(".karta_otasi")

    btn.addEventListener("click", ()=>{
        karta_otasi.innerHTML = ""
        navigator.geolocation.getCurrentPosition((a)=>{
            
            kenglik = a.coords.latitude
            uzunlik = a.coords.longitude
            console.log(kenglik, uzunlik);
            let karta = document.createElement("div")
            karta.innerHTML = `<iframe width="600" height="600" src="https://www.google.com/maps?q=${kenglik},${uzunlik}&output=embed"></iframe>`
            karta_otasi.appendChild(karta)
        })
    })