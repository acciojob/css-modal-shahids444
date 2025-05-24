//your JS code here. If required.

document.querySelector("#openModal").addEventListener("click",()=>{
	document.querySelector(".modal").classList.remove("hidden")
})
document.querySelector(".close-modal").addEventListener("click",()=>{
	document.querySelector(".modal").classList.add("hidden")
})

