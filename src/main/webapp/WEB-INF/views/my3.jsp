<%@ page session="false" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/tabulator.css">

<script type="text/javascript" src="js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="js/jquery.json.js"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<title>人机接口</title>
</head>
<body>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.js"></script>
	<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
	<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

	<script crossorigin src="https://cdn.jsdelivr.net/npm/create-react-class@15.6.3/create-react-class.js"></script>
	
	<!-- CSS -->
	<link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/css/TczT7TJvLZn.css">
	<style> body {font-family: "Roboto", "Mplus 1p", arial, sans-serif;	}</style>
	
	<!-- JS -->
	<script src="https://unpkg.com/react-table@latest/react-table.js"></script>
	<script src="https://unpkg.com/babel-standalone@6/babel.js"></script>
	<script>var ReactTable = window.ReactTable.default</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
	<script src="https://rawgit.com/ccm-innovation/react-initicon/master/initicon.min.js"></script>
	<script src="./js/gojs/go.js"></script>
	<script src="./js/gojs/goSamples.js"></script>

	<script src="./js/components/MyReactTable.jsx" type="text/babel"></script>
	<script src="./js/components/MyViewInputTable.jsx" type="text/babel"></script>
	<script src="./js/MyProgramEdit.jsx" type="text/babel"></script>
	<script src="./js/MyProgramTableList.jsx" type="text/babel"></script>
	<script src="./js/MyGoJs.jsx" type="text/babel"></script>
	<script src="./js/MyDetailInfoInput.jsx" type="text/babel"></script>
	<script src="./js/MyConditionInfoInput.jsx" type="text/babel"></script>
	<script src="./js/MyChat.jsx" type="text/babel"></script>
	<script src="./js/MyMainPage.jsx" type="text/babel"></script>
	<script src="./js/MyAjaxCall.jsx" type="text/babel"></script>
	<div id="app"></div>
</body>
</html>