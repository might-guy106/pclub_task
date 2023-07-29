
const search_term = document.querySelector("#searchbar")

search_term.addEventListener("input", e =>{
    const request= e.target.value;
    console.log(request);
    
    const courses=document.querySelectorAll(".course");
    const nu_courses=courses.length;

    for(let i=0;i<nu_courses;i++){
        if(courses[i].textContent.toLowerCase().includes(request.toLowerCase())){
            courses[i].classList.remove("hide");
        }
        else{
            courses[i].classList.add("hide");
        }
    }

})

var courseslist = document.querySelectorAll('.course');


courseslist.forEach(element => {
    element.addEventListener('click',function(){
        window.location.href="courses/"+element.firstElementChild.innerHTML+".html"
    })
});





  