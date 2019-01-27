
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> --%>
<%@ page session="false" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/tabulator.css">
<!-- <link href="css/tabulator_midnight.min.css" rel="stylesheet"> -->
<script type="text/javascript" src="js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="js/jquery.json.js"></script>

<script type="text/javascript" src="js/jquery-ui.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>

<!-- <script type="text/javascript" src="js/tabulator.min.js"></script>
<script type="text/javascript" src="js/tabulator.js"></script> -->

<style data-for="result" id="css_result" type="text/css">
body {
	color: #333;
	background: #fff;
	padding: 6px 0 0;
	margin: 0;
	position: relative;
	min-width: 900px
}

body, th, td, .p1, .p2 {
	font-family: arial
}

p, form, ol, ul, li, dl, dt, dd, h3 {
	margin: 0;
	padding: 0;
	list-style: none
}

input {
	padding-top: 0;
	padding-bottom: 0;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box
}

table, img {
	border: 0
}

td {
	font-size: 9pt;
	line-height: 18px
}

.s_ipt_wr {
	width: 536px;
	height: 30px;
	display: inline-block;
	margin-right: 5px;
	background-position: 0 -96px;
	border: 1px solid #b6b6b6;
	border-color: #7b7b7b #b6b6b6 #b6b6b6 #7b7b7b;
	vertical-align: top
}

.s_ipt {
	width: 523px;
	height: 22px;
	font: 16px/18px arial;
	line-height: 22px;
	margin: 5px 0 0 7px;
	padding: 0;
	background: #fff;
	border: 0;
	outline: 0;
	-webkit-appearance: none
}

.s_btn {
	width: 95px;
	height: 32px;
	padding-top: 2px\9;
	font-size: 14px;
	padding: 0;
	background-color: #ddd;
	background-position: 0 -48px;
	border: 0;
	cursor: pointer
}

.s_btn_h {
	background-position: -240px -48px
}

.s_btn_wr {
	width: 97px;
	height: 34px;
	display: inline-block;
	background-position: -120px -48px;
	*position: relative;
	z-index: 0;
	vertical-align: top
}

#head {
	padding-left: 35px;
	margin-bottom: 20px;
	width: 900px
}

a font[size="3"] font, font[size="3"] a font {
	text-decoration: underline
}

body {
	min-width: 1000px
}

body {
	padding: 0
}

.s_form:after, .s_tab:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden
}

.s_form {
	zoom: 1;
	height: 55px;
	padding: 0 0 0 10px
}

#result_logo {
	float: left;
	margin: 7px 0 0
}

#result_logo img {
	width: 101px
}

#head {
	padding: 0;
	margin: 0;
	width: 100%;
	position: absolute;
	z-index: 301;
	min-width: 1000px;
	background: #fff;
	border-bottom: 1px solid #ebebeb;
	position: fixed;
	_position: absolute;
	-webkit-transform: translateZ(0)
}

.fm {
	clear: none;
	float: left;
	margin: 11px 0 0 10px
}

.s_ipt_wr.bg, .s_btn_wr.bg, #su.bg {
	background-image: none
}

.s_ipt_wr.bg {
	background: 0 0
}

.s_btn_wr {
	width: auto;
	height: auto;
	border-bottom: 1px solid transparent;
	*border-bottom: 0
}

.s_btn {
	width: 100px;
	height: 34px;
	color: #fff;
	letter-spacing: 1px;
	background: #3385ff;
	border-bottom: 1px solid #2d78f4;
	outline: medium;
	*border-bottom: 0;
	-webkit-appearance: none;
	-webkit-border-radius: 0
}

.s_btn.btnhover {
	background: #317ef3;
	border-bottom: 1px solid #2868c8;
	*border-bottom: 0;
	box-shadow: 1px 1px 1px #ccc
}

.s_btn_h {
	background: #3075dc;
	box-shadow: inset 1px 1px 3px #2964bb;
	-webkit-box-shadow: inset 1px 1px 3px #2964bb;
	-moz-box-shadow: inset 1px 1px 3px #2964bb;
	-o-box-shadow: inset 1px 1px 3px #2964bb
}

#lg {
	display: none
}
</style>
<title>人机接口</title>
</head>

<body link="#0000cc" style="">

	<div id="wrapper" style="display: block;" class="wrapper_s">

		<div id="head" class="">
			<div class="head_wrapper">
				<div class="s_form">
					<div class="s_form_wrapper soutu-env-nomac soutu-env-index">
						<style>
						.index-logo-srcnew {
							display: none;
						}
						</style>

						<a href="http://localhost:8080/myapp/" id="result_logo"> <img
							class="index-logo-src" src="./resources/baidu_jgylogo3.gif"> 
							
							<img class="index-logo-srcnew"
							src="./resources/baidu_jgylogo3.gif">
						</a>
						<form id="form" name="f" class="fm">

							<span class="bg s_ipt_wr"> <input id="kw" name="wd"
								class="s_ipt" value="" maxlength="255" autocomplete="off">
							</span><span class="bg s_btn_wr">
							<input type="button" id="search_btn" value="那啥" class="bg s_btn">
							</span>
						</form>

					</div>
				</div>

			</div>
		</div>
<!-- 		<div>
			<div id="example-table"></div>
		</div>

 		<div >
			<div id="myDiagramDiv" ></div>
		</div>

		<div>
			<div id="myInput"></div>
		</div> -->
		<br>
		<br>
		<br>
		<br>
		<br>
<!-- 		<div>
			<div id="like_button_container"></div>
		</div> -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
		<!-- CSS -->
		<link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css">
		
		<!-- JS -->
		<script src="https://unpkg.com/react-table@latest/react-table.js"></script>
		<script src="https://unpkg.com/babel-standalone@6/babel.js"></script>
		<script>var ReactTable = window.ReactTable.default</script>
		
		
		<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>

  		<script src="./js/components/my-component-react-table.jsx" type="text/babel"></script>
		<script src="./js/components/my-component-analysis.js"></script>
		<script src="./js/gojs/go.js"></script>
		<script src="./js/gojs/goSamples.js"></script>
		<script src="./js/components/my-component-view-input.jsx" type="text/babel"></script>
		<script src="./js/my-program-detail.jsx" type="text/babel"></script>
		<script src="./js/my-program-table-list.jsx" type="text/babel"></script>
		<script src="./js/my-search-ok.jsx" type="text/babel"></script>
		<div id="app"></div>
	</div>

</body>
</html>