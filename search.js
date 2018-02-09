function selectText(){
  var ss = SpreadsheetApp.getActiveSpreadsheet() // SpreadsheetApp.openByUrl("ССЫЛКА НА ТАБЛИЦУ")
  var sheet = ss.getActiveSheet() // ss.getSheetByName("ИМЯ ЛИСТА")

  var text = "ВАШ ТЕКСТ" // Текст, который вы хотите найти
  var arrData = sheet.getDataRange().getDisplayValues() // sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn())

  for(var row = 0; row < arrData.length; row++){
    for(var col = 0; col < arrData[0].length; col++){
      if(arrData[row][col] == text){
        sheet.getRange(row+1, col+1).setFontWeight("bold")
         //Если нужно только одно сова\падение в єтой строке добавьте return
      }
    }
  }
}
