const feedbackForm = document.querySelector(".feedback-form");
const email = feedbackForm.elements.email
const message = feedbackForm.elements.message
const feedbackFormState = {
    email: "",
    message: ""
};
const savedFeedbackFormState = JSON.parse(localStorage.getItem("feedback-form-state"));

if (savedFeedbackFormState !== null) {
feedbackFormState.email = savedFeedbackFormState.email;
feedbackFormState.message = savedFeedbackFormState.message;
}
email.value = feedbackFormState.email;
message.value = feedbackFormState.message;


    
feedbackForm.addEventListener("input", (event) => {     
    if (event.target.name === "email") {
        feedbackFormState.email = event.target.value;
    } else {
        feedbackFormState.message = event.target.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
});

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (email.value !== "" && message.value !== "") {
    console.log(feedbackFormState);
    localStorage.removeItem("feedback-form-state")
        feedbackForm.reset(); 
    } else {
      alert("Fill in all fields !")
    }
    
});