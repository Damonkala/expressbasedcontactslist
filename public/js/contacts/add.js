'use strict';

$(document).ready(init);

function init() {
  $('#submit').click(addContact);
  $('#return').click(goToList);

}

function addContact() {
	var contact = {};
	contact.name = $('input#name').val();
	contact.number = $('input#number').val();
	contact.email = $('input#email').val();

  $('input').each(function(index, input) {
    $(input).val('');
  })

	$.post('/', contact)
  .done(function(data){
    var $contactRow = contactRow(contact);
    console.log($contactRow);
    $('#contactList').append($contactRow);
  })
  .fail(function(err){
    console.error(err);
  });
}

function contactRow(contact){
    var $tr = $('<tr>');
    var $name = $('<td>').addClass('name').text(contact.name)
    var $phone = $('<td>').addClass('phone').text(contact.phone)
    var $email = $('<td>').addClass('email').text(contact.email)

    var $editTd = $('<td>').addClass('edit text-center');
    var $editIcon = $('<i>').addClass('fa fa-pencil fa-lg')
    $editTd.append($editIcon);

    var $deleteTd = $('<td>').addClass('delete text-center');
    var $deleteIcon = $('<i>').addClass('fa fa-trash fa-lg')
    $deleteTd.append($deleteIcon);

    $tr.append($name, $phone, $email, $editTd, $deleteTd);
    return $tr;
}
function goToList(){
  window.location.replace("/");
};
