'use strict';

var buttons = [];
var elementDivRow;

document.addEventListener('DOMContentLoaded', init);

function init() {
  setUpDivRow();
  setUpDiv('col-md-12');
  setUpH3();
  setUpStarButton();
  setUpHr();

  setUpDivEmpty();
  setUpDivBtnGroup('btn-group');
  setUpBtnGroup(0, 4);

  setUpDivBtnGroup('btn-group');
  setUpBtnGroup(4, 7);

  setUpDivBtnGroup('btn-group');
  setUpBtnGroup(7, 8);

  setUpHr();

  setUpDivEmpty();
  setUpDivBtnGroup('btn-group btn-group-lg');
  setUpBtnGroupThreeOption();
}

function setUpDivRow() {
  elementDivRow = document.createElement('div');
  elementDivRow.className = 'row';
  document.getElementsByClassName('container')[0].appendChild(elementDivRow);
}

var elementColMD;
function setUpDiv(divName) {
  elementColMD = document.createElement('div');
  elementColMD.className = divName;
  elementDivRow.appendChild(elementColMD);
}

function setUpH3() {
  var elementH3 = document.createElement('h3');
  elementH3.innerText = 'Nothing clicked yet!';
  elementColMD.appendChild(elementH3);
}

function setUpStarButton() {
  var elementStarButton = document.createElement('button');
  elementStarButton.innerText = 'Star';
  elementStarButton.className = 'btn btn-default btn-lg';
  elementColMD.appendChild(elementStarButton);
}

function setUpHr() {
  var element = document.createElement('hr');
  elementColMD.appendChild(element);
}

var elementDivEmpty = '';
function setUpDivEmpty() {
  elementDivEmpty = document.createElement('div');
  elementColMD.appendChild(elementDivEmpty);
}

var elementDivBtnGroup = '';
function setUpDivBtnGroup(divName) {
  elementDivBtnGroup = document.createElement('div');
  elementDivBtnGroup.className = divName;
  elementDivEmpty.appendChild(elementDivBtnGroup);
}

function setUpBtnGroup(buttonCountStart, buttonCountEnd) {

  var i = buttonCountStart;

  for (i; i < buttonCountEnd; i++) {
    var element = document.createElement('button');
    element.innerText = i + 1;
    element.type = 'button';
    element.className = 'btn btn-default';
    elementDivBtnGroup.appendChild(element);
    element.addEventListener('click', myHandler);
  }
}

function setUpBtnGroupThreeOption() {
  var threeOption = ['Left', 'Middle', 'Right'];

  for (var i = 0; i < threeOption.length; i++) {
    var element = document.createElement('button');
    element.innerText = threeOption[i];
    element.type = 'button';
    element.className = 'btn btn-default';
    elementDivBtnGroup.appendChild(element);
    element.addEventListener('click', myHandler);
  }
}


function myHandler(e) {
  var src;
  var parts;
  src = e.target || e.srcElement;
  parts = src.innerHTML.split(": ");

  var elementH3 = document.getElementsByTagName('H3');
  elementH3[0].innerText = parts;
}

function replaceText(buttonLabel) {
  var elementH3 = document.getElementsByTagName('H3');
  elementH3[0].innerText = buttonLabel;
}
