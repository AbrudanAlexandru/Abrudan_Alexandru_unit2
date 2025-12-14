// Cache the DOM
var monitorizareTitle = document.getElementById("monitorizare-title")
var resourcesContainer = document.getElementById("resources-container")
var body = document.getElementById("body")

var isSlideshow = false
var slideshowInterval = null
var currentSlide = 0

// Imagini pentru slideshow
var slides = [
	{ src: "images/Abrudan_Alexandru2.jpg", title: "Consum CPU" },
	{ src: "images/Abrudan_Alexandru3.jpg", title: "Utilizare Memorie" },
	{ src: "images/Abrudan_Alexandru4.jpg", title: "Utilizare Disk" },
	{ src: "images/Abrudan_Alexandru.jpg", title: "Porturi Deschise" },
	{ src: "images/Abrudan_Alexandru5.jpg", title: "Servicii Active" },
	{ src: "images/Abrudan_Alexandru6.jpg", title: "Procese" }
]

// Add event listener
monitorizareTitle.addEventListener("dblclick", ToggleSlideshow)

// Define function
function ToggleSlideshow() {
	if (!isSlideshow) {
		StartSlideshow()
	} else {
		StopSlideshow()
	}
}

function StartSlideshow() {
	isSlideshow = true
	currentSlide = 0
	
	// Creaza container pentru slideshow
	resourcesContainer.innerHTML = ""
	resourcesContainer.className = "slideshow-container"
	
	// Adauga toate slide-urile
	for (var i = 0; i < slides.length; i++) {
		var slideDiv = document.createElement("div")
		slideDiv.className = "slide"
		if (i === 0) {
			slideDiv.className = "slide active"
		}
		
		var img = document.createElement("img")
		img.src = slides[i].src
		img.alt = slides[i].title
		
		var title = document.createElement("h5")
		title.innerHTML = slides[i].title
		
		slideDiv.appendChild(img)
		slideDiv.appendChild(title)
		resourcesContainer.appendChild(slideDiv)
	}
	
	// Porneste slideshow-ul cu tranzitie de 3 secunde
	slideshowInterval = setInterval(NextSlide, 3000)
}

function NextSlide() {
	var allSlides = document.querySelectorAll(".slide")
	allSlides[currentSlide].className = "slide"
	
	currentSlide = (currentSlide + 1) % slides.length
	
	allSlides[currentSlide].className = "slide active"
}

function StopSlideshow() {
	isSlideshow = false
	clearInterval(slideshowInterval)
	
	// Reface afisarea originala
	resourcesContainer.className = ""
	resourcesContainer.innerHTML = ""
	
	for (var i = 0; i < slides.length; i++) {
		var resourceItem = document.createElement("div")
		resourceItem.className = "resource-item"
		
		var title = document.createElement("h5")
		title.innerHTML = slides[i].title
		
		var img = document.createElement("img")
		img.className = "resource-img"
		img.src = slides[i].src
		img.alt = slides[i].title
		img.width = 400
		img.height = 300
		
		resourceItem.appendChild(title)
		resourceItem.appendChild(img)
		resourcesContainer.appendChild(resourceItem)
	}
}