export default function validateInfo(values) {
    let errors = {}
    console.log(values.initial);

    if(!values.initial){
        errors.initial = "Please enter a Number"
        console.log("Empty")
    }
    if(!values.contribution){
        errors.contribution = "Please enter the weekly Deposit"
        console.log("Empty2")
    }
    if(!values.length){
        errors.length = "Please enter the amount of time in years"
        console.log("Empty3")
    }
    if(!values.interest){
        errors.interest = "Please enter the expected interest in %"
        console.log("Empty4")
    }

    console.log(errors)
}