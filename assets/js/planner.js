// Prints the current day and time in this particular format. Moment already knows the format of moment().
var randomDate = "02/12/2019";
    var randomFormat = "MM/DD/YYYY";
    var convertedDate = moment(randomDate, randomFormat);
var now = moment();
    console.log(now.format("MM/DD/YY hh:mm A"));

// getting value from text area
var description

$('.descripton').click(function() {
    var text = $('textarea#mytextarea').val();
    
});