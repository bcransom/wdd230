const submissionDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

//form submission date
//using the Current date functions already created
document.querySelector("#submission-date").value = submissionDate;