/*$(function() {
	
	$("#search_btn1").click(function() {
		
		const response = {
			initial_data: [
			{
				"Did I see this plant in 2016?":"No",
			    "Did I see this plant in 2017?":"Yes",
			    "How Many?":1,
			    "User Data 4":"x",
			    "User Data 5":"",
			    "Did I see this plant in 2022?":"No",
			    "Name":"Abronia alpina"
			},
			{
			    "Did I see this plant in 2016?":"No",
			    "Did I see this plant in 2017?":"No",
			    "How Many?":11,
			    "User Data 4":"x",
			    "User Data 5":"",
			    "Did I see this plant in 2022?":"Yes",
			    "Name":"Abronia alpina1"
			}]
		};
		
	    console.log(1111)
	    
		var JSONdata = {
			search : $("#kw").val(),
		};

		alert(JSON.stringify(JSONdata));

		$.ajax({
			type : 'POST',
			url : "http://localhost:8080/myapp/getTestData",
			dataType : "json", //dataType设置成 json，这个意思是说 ’服务器的数据返回的是json格式数据，需要帮我把数据转换成对象
			contentType : "application/json",

			data : JSON.stringify(JSONdata),
			success : function(data) {
				success(data);
			},
			error : function(e) {
				console.log(e);
				alert("AJAXの返す処理はERRORがあり by Yan");
				success(e);
			}
		});
	    
		function success(data){
	    	
	    	data = response.initial_data
	        const columns = Object.keys(data[0])
	        console.log(222)
	        
	        var myInput='<table border="1" id="t">'
	
	        $.each(data,function(i,data) {
	        	for(var j=0;j<columns.length;j++){
	        		myInput += '<tr><td><lable>' + columns[j] + '</lable></td>'
	        			+ '<td><input type="text" name="' + data[columns[j]] + '"/></td></tr>'
	        	}
	        });
	    	myInput += '</table>'
	    		    + '<button onclick="myInputOK()">OK,就这样吧</button>'
	    		    
	        $("#myInput").after(myInput);
	    }
	
	
	//    $('#myModal').on('shown.bs.modal', function (e) {
	//        // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
	//        $(this).css('display', 'block');
	//        var modalHeight = $(window).height() / 2 - $('#myModal .modal-dialog').height() / 2;
	//        $(this).find('.modal-dialog').css({
	//            'margin-top': modalHeight
	//        });
	//    });
	});	
});

function myInputOK(){  
	alert("myInputOK");
}*/