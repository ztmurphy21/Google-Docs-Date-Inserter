/*Project: Live Date
By: Zach Murphy
*/This script runs in any Google App to inset the date and updates it 


/*
This function determines what will happen when reloading/loading Google Docs for the 
specified doc.
*/
function onOpen() {
//Places menu on toolbar for easy access
  var formApp = DocumentApp.getUi();
  formApp.createMenu('My Scripts')
      .addItem('Insert Date', 'insertDate')
      .addToUi();

}


/*
This function inserts the date in the specified area.
*/
function insertDate() {
  var insertionPoint = DocumentApp.getActiveDocument().getCursor();
  
  // Attempt to insert text at the cursor position. If insertion returns null,
  if (insertionPoint) {
      var d = new Date();
      var dd = d.getDate();
      dd = pad(dd, 2)
      var mm = d.getMonth() + 1; //Months to zeros
      mm = pad(mm, 2)
      var yyyy = d.getFullYear();
      var date = mm + "-" + dd + "-" + yyyy;
      var element = cursor.insertText(date);
      if (element) {
        element.setBold(true);
      } else {
        DocumentApp.getUi().alert('Error:Can't insert text at current location.');
      }
    } else {
      DocumentApp.getUi().alert('Error: Can't find a cursor in the document.');
  }

}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}
