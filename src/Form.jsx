function handleFormSubmit(e) {
    e.preventDefault(); // by using this method clicking on button inside FORM no longer works as usual (so it does not refresh page, it just console.logs the info)
    console.log("Submitted the form")
}

export default function Form() {
    return( // if we dont handle form (so there is no 'onSubmit') clicking the button refreshes the page every time
        <form onSubmit ={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}