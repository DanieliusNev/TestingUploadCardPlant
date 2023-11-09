console.log("Script is running");
const viewButton = document.getElementById("view-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

viewButton.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});
  
// const editButton = document.querySelector(".edit-button");
// const saveButton = document.getElementById("save-button");
// const editableSpans = document.querySelectorAll("span[id$='-editable']");

// editButton.addEventListener("click", () => {
//     editableSpans.forEach((editableSpan) => {
//         editableSpan.contentEditable = true;
//     });

//     saveButton.style.display = "inline";
//     editButton.style.display = "none";
// });

// saveButton.addEventListener("click", () => {
//     editableSpans.forEach((editableSpan) => {
//         editableSpan.contentEditable = false;
//     });

//     saveButton.style.display = "none";
//     editButton.style.display = "inline";
// });



