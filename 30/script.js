// // const myRegExp = /pattern/flags;


// // const myRegExp = /pattern/;

// // console.log('myRegExp > ', typeof myRegExp);

// // const regExpContructor = new RegExp('pattern', "g");

// // g
// // i
// // m

// // test => true/false
// // match => []

// // const myString = 'hello';
// // const myString = 'oaterello, worlf';

// // const patternToTest = /[hgo]ello/g;
// // const patternToTest = /(hh|gb|oater)ello/g;

// // const testResult = patternToTest.test(myString);

// // console.log('testResult > ', testResult);


// // const matchedEntries = myString.match(patternToTest);

// // console.log('matchedEntries > ', matchedEntries);

// // const replacedString = myString.replace(patternToTest, 'X');

// // console.log('replacedString > ', replacedString);

// const myString = '12345';
// const myRegExp = /^\d{6,}$/g;

// const testResult = myRegExp.test(myString);

// console.log('testResult > ', testResult);

// function jQuery() {
//     // ...
// }

// jQuery();

// const $ = jQuery;

// $();



// $(selector).action();
// $(selector).action().action2();

// $('#selector tag .class .class2.class3').hide().show().css('border', '1px solid black');

$(document).ready(function() {  // defer
    $('h1').text('Some New Text')


    // $('label').css('display', 'none');
    $('label')
        .css('color', 'red')
        .fadeOut(2000)
        .fadeIn(2000)
        .addClass('new-class'); //removeClass

    $('#showEmail').on('click', function(e) {
        e.preventDefault();

        const emailValue = $('#email').val();

        console.log('emailValue > ', emailValue);

        $('#phone').slideUp(500).slideDown(1000);
    });


    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        // method: 'GET',
        success: function(data) {
            console.log('data > ', data);
        }
    });

});