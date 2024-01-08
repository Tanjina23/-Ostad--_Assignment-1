let btn = document.getElementById('mybtn')
btn.addEventListener("click", ageVerify)

function ageVerify(){
  age = parseInt(document.getElementById('age').value)
  adult = document.getElementById('adult')
  child = document.getElementById('child')

  if(age >= 18 ){
     adult.innerHTML = `<div class="col-lg-4 col-md-6 mb-4 mb-md-0">
    <div id="adult">
        <div class="card " style="width: 18rem;">
          <img src="images/adult.PNG" class="card-img-top" alt="Spring Season">
          <div class="card-body">
            <h5 class="card-title text-center">You are an Adult</h5>
            <p class="card-text">Congratulations! Your age is ${age}</p>  
          </div>
        </div>
      </div>
    </div>`
      child.innerHTML = null
   // alert('Congratulations! You are an adult')
  }
 else if(age > 0 && age < 18){
    child.innerHTML = `<div class="col-lg-4 col-md-6 mb-4 mb-md-0">
      <div id="child">
          <div class="card " style="width: 18rem;">
            <img src="images/child.PNG" class="card-img-top" alt="Spring Season">
            <div class="card-body">
              <h5 class="card-title text-center">You are a Child</h5>
              <p class="card-text">Oops! You are ${18-age} years behind to become an adult </p>
            </div>
          </div>
        </div>
      </div>`
      adult.innerHTML = null
    // alert('Oops! You are a child')
    }
    else{
         alert('Please enter a valid number')
    }

}