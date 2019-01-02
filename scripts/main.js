var myImage=document.querySelector('img');

myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	var s1='https://raw.githubusercontent.com/mdn/beginner-html-site-styled/gh-pages/images/firefox-icon.png';
	var s2='https://raw.githubusercontent.com/mdn/beginner-html-site-scripted/gh-pages/images/firefox2.png';
	if(mySrc===s1)
		myImage.setAttribute('src',s2);
	else
		myImage.setAttribute('src',s1);
}

var myHeading=document.querySelector('h1');

function setUserName(){
	var myName=prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent='Mozilla is cool, '+myName;
}

var name=localStorage.getItem('name');
if(name==='null'){
	setUserName();
}else{
	myHeading.textContent='Mozilla is cool, '+name;
}

document.querySelector('button').onclick=function(){
	setUserName();
}
