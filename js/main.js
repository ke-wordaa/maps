$(document).ready(function () {
    const now = new Date()
    $('#win').modal('show');
    $("p").html('日期:'+now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日');
    
});
