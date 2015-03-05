
Titanium.UI.setBackgroundColor('#F0FFFF');

//
// making a base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#E6E6FA'
});
var firstSection = Ti.UI.createTableViewSection({headerTitle: 'I hope this file works'
}); 
// Create a Button.
var button1 = Ti.UI.createButton({
	title : 'button1',
	height : 30, 
	width : 30,
	top : 30,
	left : 30
});
button1.addEventListener('click', function(e) {alert('You clicked Me!');
}); 

// Listen for click events.
button1.addEventListener('click', function() {
	alert('\'button1\' was clicked!');
});
var nav = Titanium.UI.Android.createNavigationGroup({
	window: win2
}); 

// Add to the parent view.
parentView.add(button1);

var switchOrientation = Ti.UI.createButton({title: 'Switch orientation'});
switchOrientation.addEventListener('click', rotateLayout);
var layout = Ti.UI.createView({layout: 'vertical'});
function rotateLayout() {
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
	switchOrientation.hide();
}
win2.add(button);
win1.add(nav);
win1.open();



//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#B22222'

});
var button2 = Ti.UI.createButton({
	title : 'button2',
	height : 30,
	width : 30,
	top : 30,
	left : 30
});
button2.addEventListener('click', function(e) {alert('You clicked Me!');
}); 

// Listen for click events.
button1.addEventListener('click', function() {
	alert('\'button2\' was clicked!');
});
var nav = Titanium.UI.Android.createNavigationGroup({
	window: win1
}); 

// Add to the parent view.
parentView.add(button2);

var switchOrientation = Ti.UI.createButton({title: 'Make Landscape'});
switchOrientation.addEventListener('click', rotateLayout);
var layout = Ti.UI.createView({layout: 'vertical'});
function rotateLayout() {
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
	switchOrientation.hide();
}
win1.add(button);
win2.add(nav);
win2.open();


//
