const courses = [
    {
        name: "javaScript",
        Price: 1000,
        Rating: 4.56,
        // isAvailable: false,
        langauges: ["Malayalam", " Kannada", " English"],
        mentor: { name: "abdul Rahiman", contact: "abdulrahimann631@gmail.com" }

    },
    {
        name: "HTML & CSS",
        Price: 1000,
        Rating: 4.45,
        // isAvailable: false,
        langauges: ["Malayalam", " Kannada", " English"],
        mentor: { name: "abdul Rahiman", contact: "abdulrahimann631@gmail.com" }

    },
    {
        name: "node js ",
        Price: 1000,
        Rating: 4.84,
        // isAvailable: false,
        langauges: ["Malayalam", " Kannada", " English"],
        mentor: { name: "abdul Rahiman", contact: "abdulrahimann631@gmail.com" }

    },
    {
        name: "fullstack development",
        Price: 2000,
        Rating: 4.16,
        // isAvailable: false,
        langauges: ["Malayalam", " Kannada", " English"],
        mentor: { name: "abdul Rahiman", contact: "abdulrahimann631@gmail.com" }

    },
    {
        name: "embedded System",
        Price: 1000,
        Rating: 4.56,
        // isAvailable: false,
        langauges: ["Malayalam", " Kannada", " English"],
        mentor: { name: "abdul Rahiman", contact: "abdulrahimann631@gmail.com" }

    },
    {
        name: "Data Structures and Algorithm",
        Price: 1000,
        Rating: 4.56,
        // isAvailable: false,
        langauges: ["Malayalam", " Kannada", " English"],
        mentor: { name: "abdul Rahiman", contact: "abdulrahimann631@gmail.com" }

    },
    {
        name: "Machine Learning",
        Price: 1000,
        Rating: 4.56,
        // isAvailable: false,
        langauges: ["Malayalam", " Kannada", " English"],
        mentor: { name: "abdul Rahiman", contact: "abdulrahimann631@gmail.com" }

    }

];
const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

function displayCourse(courses) {
    const courseContainer = document.getElementById("course-container");
    courseContainer.innerHTML = ""
    courses.forEach((course) => {
        const courseUI = `<div class="course-card">
            <h3>${formatName(course.name)}</h3>
            <p>Price: ${course.Price}</p>
            <p>Rating: ${Math.round(course.Rating * 10) / 10}</p>
            <p>Available Langauge :${course.langauges}</p>
            <p>Instructor: ${formatName(course.mentor.name)}</p>
            <p>Contact: ${course.mentor.contact}</p>
        </div>`;
        courseContainer.innerHTML += courseUI;
    })


}

function findTopRatedCourse(courses){
    const top = courses.reduce((topCourse, course)=>{
        return topCourse.Rating > course.Rating ? topCourse : course
    })
    return top;
}

function displaytopCourses(courses) {
    const topratedcourse = findTopRatedCourse(courses)
    const courseUI = `<div class="course-card">
            <h3>${formatName(topratedcourse.name)}</h3>
            <p>Price: ${topratedcourse.Price}</p>
            <p>Rating: ${Math.round(topratedcourse.Rating * 10) / 10}</p>
            <p>Available Langauge :${topratedcourse.langauges}</p>
            <p>Instructor: ${formatName(topratedcourse.mentor.name)}</p>
            <p>Contact: ${topratedcourse.mentor.contact}</p>
        </div>`;
    
     const topCourseContiner = document.getElementById("topcourse-container");
     

     topCourseContiner.innerHTML = courseUI

}

function displayCourseCount(courses){
    document.querySelector("#courseCount").innerText = `${courses.length} courses available`

}

function getSearchResult(courses,query){
    const result = courses.filter((item)=>{
        return item.name.includes(query)
    })
    displayCourse(result)
    displayCourseCount(result)
}

function initPage(courses){
    displayCourseCount(courses);
    displayCourse(courses);
    displaytopCourses(courses);

    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", (event)=>{
        getSearchResult(courses, event.target.value);
    })
}
initPage(courses)




