function sendEmail() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var mailtoLink = 'mailto:Jeremiah.green21@yahoo.com' +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent(
                        'Sent From Jeremiah Green\'s Web Portfolio by ' + firstName + ' ' +
                         lastName + ' ' +
                        '(' + email + ')' + '\n\n' +
                        'Message:\n' + message
                    );

    window.location.href = mailtoLink;

}