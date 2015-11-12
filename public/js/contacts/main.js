'use strict';

$(document).ready(init);

// var sweetalert = require('sweetalert');

function init() {
  $('#goToAdd').click(goToAddPage);
  $('#contactList').on('click', 'i.fa.fa-trash.fa-lg', deleteContact);
  $('#contactList').on('click', 'i.fa.fa-pencil.fa-lg', editContact);
  $('.save').click(saveContent);
}

function deleteContact(e){
  var $target = $(e.target);
  var $targetRow = $target.closest('tr');
  var rowIndex = $targetRow.index();
  $.post('/delete', {index: rowIndex});
  $targetRow.remove();
}
function editContact(e){
  var $target = $(e.target);
  var $targetRow = $target.closest('tr');
  $targetRow.children('.editable').attr('contenteditable', true);
  // var rowIndex = $targetRow.index();
  console.log("editing time!");
  // $.post('/delete', {index: rowIndex});
  // $targetRow.remove();
}

function saveContent(e){
  var $target = $(e.target);
  var $targetRow = $target.closest('tr');
  $targetRow.children('.editable').attr('contenteditable', false);
  // var rowIndex = $targetRow.index();
  var rowText = $targetRow.text();
  $.post('/edit', {text: rowText} );
  // console.log($targetRow.text());
}

function goToAddPage(){
  window.location.replace("add");
};
