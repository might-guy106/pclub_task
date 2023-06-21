
const search_term = document.querySelector("#searchbar")

search_term.addEventListener("input", e =>{
    const request= e.target.value;
    console.log(request);
    
    const courses=document.querySelectorAll(".course");
    const nu_courses=courses.length;

    for(var i=0;i<nu_courses;i++){
        if(courses[i].textContent.toLowerCase().includes(request.toLowerCase())){
            courses[i].classList.remove("hide");
        }
        else{
            courses[i].classList.add("hide");
        }
    }

})

var courseslist = document.querySelectorAll('.course');

// var files=["course1","course2","course3","course4","course5","course6","course7","course8","course9","course10"];

// for(var i=0;i<clickableDiv.length;i++){
//     // var num=i+1;
//     // var text=num.toString()
//     // var temp="courses/course"+i+".html";
//     console.log(i);
//     clickableDiv[i].addEventListener('click',function(){
//        const temp=files[0];
//        window.location.href="courses/"+temp+".html"; 
//     })


// }


courseslist[0].addEventListener('click', function() {
  window.location.href='courses/course1.html'
});
courseslist[1].addEventListener('click', function() {
    window.location.href='courses/course2.html'
  });
courseslist[2].addEventListener('click', function() {
    window.location.href='courses/course3.html'
  });
courseslist[3].addEventListener('click', function() {
    window.location.href='courses/course4.html'
  });
courseslist[4].addEventListener('click', function() {
    window.location.href='courses/course5.html'
  });
courseslist[5].addEventListener('click', function() {
    window.location.href='courses/course6.html'
  });
courseslist[6].addEventListener('click', function() {
    window.location.href='courses/course7.html'
  });
courseslist[7].addEventListener('click', function() {
    window.location.href='courses/course8.html'
  });
courseslist[8].addEventListener('click', function() {
    window.location.href='courses/course9.html'
  });
courseslist[9].addEventListener('click', function() {
    window.location.href='courses/course10.html'
  });




  