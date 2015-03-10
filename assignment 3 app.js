Titanium.UI.setBackgroundColor('#F0FFFF');

//
// making a base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Home, Sweet Home',
    backgroundColor:'#E6E6FA'
});
var firstSection = Ti.UI.createTableViewSection({headerTitle: 'I hope this file works'
}); 
// Create a Button.
var button1 = Ti.UI.createButton({
	title : 'Navigate to the Camera Application',
	height : 30, 
	width : 50,
	top : 50,
	left : 30
});
button1.addEventListener('click', function(e) {alert('You clicked Me!');
}); 

// Listen for click events.
button1.addEventListener('click', function() {
	alert('\'button1\' was clicked!');
});
var nav = Titanium.UI.Android.NavigationWindow({
	window: win2
}); 

(function() {
var win1= Titanium.UI.createWindow({
	title: 'Which color would you like to choose?',
	backgroundColor: '#E6E6FA'
});
// open window
win1.open();
})();
var Teas = ['#E9967A', '#00CED1', '#FF8C00', '#ADFF2F'];

allRows = [];
var theColours = Ti.UI.createTableView({});

for (var i=0; i<Teas.length; i++) {
	theRow = Ti.TI.createTableViewRow({backgroundColor:
		Teas[i], height:50, TeaColour:Teas[i]});
		allRows.push(theRow);
}

theColours.setData(allRows);
win1.add(theColours);

function getVerdict(colour) {
	var indicator = colour.charAt (1); 
	var msg;
	//Make a crude decision on the strength of the tea based on the 2nd character of the hex color 
	switch(indicator) {
		case 'A': msg = 'I'; break;
		case 'S': msg = 'Really'; break;
		case 'D': msg = 'Hate'; break;
		case 'F': msg = 'Titanium'; break;
	}
	return msg;
}; 
	
function showTeaVerdict(_args) {
	var teaVerdict = Ti.UI.createWindow({layout:'vertical'});
	
	teaVerdict.background = _args;
	teaVerdict.msg = getVerdict(_args);
	var judgement = Ti.UI.createLabel
	({text:teaVerdict.msg, top:'50%'});
	var close = Ti.UI.createButton
	({title:'Choose again', top:25%''});
	close.addEvenntListener('click', function(e)
	{teaVerdict.close();
		//release the resources
		teaVerdict = null;
	});
	
	teaVerdict.add(judgement);
	teaVerdict.add(close);
	teaVerdict.open();
}
theColours.addEventListener('click', function(e)
{showTeaVerdict(e.source.TeaColour)});


}
	
	}
}
win2.add(button);
win1.add(nav);
win1.open();



//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Camera Activate!!!',
    backgroundColor:'#B22222'

});
var options = Ti.UI.createView({layout: 'vertical'});
var showCamera = Ti.UI.createButon({title: 'Show Camera'});
var thePhoto = Ti.UI.createImageView({height: '30%', width: '30%'});
options.add(showCamera);
options.add(thePhoto);
win1.add(options);

function showPhoto(_args) {
	thePhoto.setImage(_args.media);
}
showCamera.addEventListener('click', function (e) {
	Ti.Media.showCamera({animated:true,
		autoHide: true,
		saveToPhotoGallery: true,
		showControls: true,
		mediaTypes: [Ti.Media.Media_Type_Photo],
		success function(e) {showPhoto(e)} ,
		error: function(e) {alert('There was a problem accessing the camera')}
		})
});
var button2 = Ti.UI.createButton({
	title : 'Navigate back to home page',
	height : 30,
	width : 50,
	top : 30,
	left : 30
});
button2.addEventListener('click', function(e) {alert('You clicked Me!');
}); 

// Listen for click events.
button1.addEventListener('click', function() {
	alert('\'button2\' was clicked!');
});
var nav = Titanium.UI.Android.NavigationWindow({
	window: win1
}); 

win1.add(button);
win2.add(nav);
win2.open();


//
