'use strict';

var tabTitleBox = document.getElementsByClassName('tab_title-box'),
    tabTitle = document.getElementsByClassName('tab_title'),
    tabContent = document.getElementsByClassName('tab_content-box');


tabTitle[0].onclick = function (e) {
    var target = e.target;

    if (target.className === 'tab_title-box') {
        for (var k = 0; k < tabTitleBox.length; k++) {
            if (target === tabTitleBox[k]) {
                showTab(k);
                break;
            }
        }
    }
};

function showTab(tab) {
    hideTab(0);
    tabContent[tab].classList.add('active');
    tabTitleBox[tab].classList.add('active');
}

function hideTab(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabTitleBox[i].classList.remove('active');
        tabContent[i].classList.remove('active');
    }
}