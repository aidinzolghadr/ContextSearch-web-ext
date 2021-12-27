const defaultSearchAction = {
		event:"mouseup",
		button:0,
		altKey:false,
		ctrlKey:false,
		metaKey:false,
		shiftKey:false,
		action: "",
		folder:false
	};

let defaultSearchActions = {
	"quickMenuLeftClick":{"action":"openNewTab"},
	"quickMenuFolderLeftClick":{"action":"openFolder","folder":true},
	"quickMenuRightClick":{"button":2,"action":"openBackgroundTabKeepOpen"},
	"quickMenuFolderRightClick":{"button":2,"action":"openFolder","folder":true},
	"quickMenuMiddleClick":{"button":1,"action":"openBackgroundTabKeepOpen"},
	"quickMenuFolderMiddleClick":{"button":1,"action":"openBackgroundTab","folder":true},
	"quickMenuShift":{"shiftKey":true,"action":"openNewIncognitoWindow"},
	"quickMenuFolderShift":{"shiftKey":true,"action":"openNewWindow","folder":true},
	"quickMenuCtrl":{"ctrlKey":true,"action":"openNewWindow"},
	"quickMenuFolderCtrl":{"ctrlKey":true,"action":"openNewIncognitoWindow","folder":true},
	"quickMenuAlt":{"altKey":true,"action":"keepMenuOpen"},
	"quickMenuFolderAlt":{"altKey":true,"action":"noAction","folder":true}
};

function isSearchAction(g, e) {

	return (
		e.altKey === g.altKey &&
		e.ctrlKey === g.ctrlKey &&
		e.shiftKey === g.shiftKey &&
		e.metaKey === g.metaKey &&
		g.button === e.button
	)
}

// function isSearchAction(g, e) {

// 	return (
// 		e.altKey === g.altKey &&
// 		e.ctrlKey === g.ctrlKey &&
// 		e.shiftKey === g.shiftKey &&
// 		e.metaKey === g.metaKey &&

// 		g.button === e.button &&
// 		g.key === e.key
// 	)
// }

const additionalSearchActions = [
	Object.assign(Object.assign({}, defaultSearchAction), { button:3, altKey:true, action: "openNewWindow"}),
	Object.assign(Object.assign({}, defaultSearchAction), { button:4, shiftKey:true, action: "openNewIncognitoWindow"}),
	Object.assign(Object.assign({}, defaultSearchAction), { button:3, altKey:true, ctrlKey:true, action: "openNewWindow"}),

];



// setTimeout(() => {
// 	var searchActions = convertSearchActions();

// 	searchActions.forEach( g => {
// 		document.addEventListener(g.event, e => {

// 			if ( !isSearchAction(g,e) ) return;

// 			console.log(g.action);
// 		})
// 	})

// 	document.addEventListener('contextmenu', e => {

// 		if ( window.contextMenuTimer ) {
// 			e.preventDefault();
// 			return document.dispatchEvent(new MouseEvent('dblclick', e));	
// 		}

// 		window.contextMenuTimer = setTimeout(() => {
// 			clearTimeout(window.contextMenuTimer);
// 			delete window.contextMenuTimer;
// 		}, 250);
// 	});

// 	// trigger dblclick event for other buttons
// 	let dblClickHandler = e => {
// 		if ( e.detail === 2 && e.button !== 0 ) {
// 			console.log(e);
// 			document.dispatchEvent(new MouseEvent('dblclick', e));
// 		}
// 	}
// 	document.addEventListener('mousedown', dblClickHandler);


// }, 1000)

