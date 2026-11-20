let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "131", enrolled: 100, instructor: "George Bush" },
        { section: "132", enrolled: 98, instructor: "John Taylor" }
    ]
};


function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code}-${course.title}`;
}

function renderSections(sections) {
    let rows = "";
    for (const section of sections) {
        rows += `<tr><td>${section.section}</td><td>${section.enrolled}</td><td>${section.instructor}</td></tr>`;
    }
    document.querySelector("#sections tbody").innerHTML = rows;
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
