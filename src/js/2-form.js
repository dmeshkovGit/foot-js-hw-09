const feedbackForm = document.querySelector(".feedback-form");
const email = feedbackForm.elements.email
const message = feedbackForm.elements.message
const getParsedItem = (item) => {
    try {
        return JSON.parse(item)
    } catch (error) {
        console.error('parsing error');
    };
};
const savedFeedbackFormState = getParsedItem(localStorage.getItem("feedback-form-state"));
const feedbackFormState = savedFeedbackFormState || { email: "", message: "" };

email.value = feedbackFormState.email;
message.value = feedbackFormState.message;
  
feedbackForm.addEventListener("input", (event) => {    
    if (event.target.name === "email") {
        feedbackFormState.email = event.target.value.trim();
    } else {
        feedbackFormState.message = event.target.value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
});

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (feedbackFormState.email !== "" && feedbackFormState.message !== "")
    {
    console.log(feedbackFormState);
    localStorage.removeItem("feedback-form-state")
        feedbackForm.reset(); 
    } else {
      alert("Fill in all fields !")
    }
    
});