(() => {

	fetch('./data/IndexData.json')
		.then(res => res.json())
		.then(indexdata => {
			console.log(indexdata);


		
	})
	.catch((err) => {
		console.log(err);
		fetch('./data/FailData.json')
		.then(res => res.json())
		.then(faildata => {
			console.log(faildata);

		
		let dataSection = document.querySelector(".class-section"),
		classTemplate = document.querySelector("#class-template").content;
	

		function handleDataSet (data) {

	
	

				let currentdata = classTemplate.cloneNode(true),
				currentClassText = currentdata.querySelector('.class').children;
	
				currentClassText[0].textContent = data.failed;
	
				dataSection.appendChild(currentdata);
		}
	
		handleDataSet (faildata);
	})
    })
    








    fetch('./data/PortfolioData.json')
		.then(res => res.json())
		.then(portdata => {
			console.log(portdata);


		
	})
	.catch((err) => {
		console.log(err);
		fetch('./data/FailData.json')
		.then(res => res.json())
		.then(faildata => {
			console.log(faildata);

		let dataSection = document.querySelector(".class-section"),
		classTemplate = document.querySelector("#class-template").content;
	


		function handleDataSet (data) {

	
	

				let currentdata = classTemplate.cloneNode(true),
				currentClassText = currentdata.querySelector('.class').children;
	
				currentClassText[0].textContent = data.failed;
	
				dataSection.appendChild(currentdata);
		}
	
		handleDataSet (faildata);
	})
    })
    








    let lightBox = document.querySelector(".lightbox"),
    lblclose = lightBox.querySelector("span"),
    lblimg = document.querySelector("image");
    
    function showHideLightBox(){
		lightBox.classList.toggle('show-lightbox');
        debugger;
		lblimg.src = `./images/Portfolio1.jpg`;
    }
    
    lblclose.addEventListener("click", showHideLightBox);




})();