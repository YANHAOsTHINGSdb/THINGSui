
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>



<title>人机接口</title>


<style id="css_index" index="index" type="text/css">
html, body {
	height: 100%
}

html {
	overflow-y: auto
}

body {
	font: 12px arial;
	text-align:;
	background: #fff
}

body, p, form, ul, li {
	margin: 0;
	padding: 0;
	list-style: none
}

body, form, #fm {
	position: relative
}

td {
	text-align: left
}

img {
	border: 0
}

input {
	border: 0;
	padding: 0
}

#wrapper {
	position: relative;
	_position:;
	min-height: 100%
}

#head {
	padding-bottom: 100px;
	text-align: center;
	*z-index: 1
}


.bg {
	background-image:
		url(http://s1.bdstatic.com/r/www/cache/static/global/img/icons_5859e57.png);
	background-repeat: no-repeat;
	_background-image:
		url(http://s1.bdstatic.com/r/www/cache/static/global/img/icons_d5b04cc.gif)
}

.s_btn {
	width: 95px;
	height: 32px;
	padding-top: 2px\9;
	font-size: 14px;
	background-color: #ddd;
	background-position: 0 -48px;
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

#wrapper {
	min-width: 810px;
	height: 100%;
	min-height: 600px
}

#head {
	position: relative;
	padding-bottom: 0;
	height: 100%;
	min-height: 600px
}

#head .head_wrapper {
	height: 100%
}

.s_ipt_wr.bg, .s_btn_wr.bg, #su.bg {
	background-image: none
}

.s_btn_wr {
	width: auto;
	height: auto;
	border-bottom: 1px solid transparent;
	*border-bottom: 0
}

.s_btn {
	width: 100px;
	height: 36px;
	color: #fff;
	font-size: 15px;
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
	box-shadow: inset 1px 1px 5px #2964bb;
	-webkit-box-shadow: inset 1px 1px 5px #2964bb;
	-moz-box-shadow: inset 1px 1px 5px #2964bb;
	-o-box-shadow: inset 1px 1px 5px #2964bb
}



.s_form {
	position: relative;
	top: 38.2%
}

.s_form_wrapper {
	position: relative;
	top: -191px
}

.s_ipt_wr {
	height: 34px
}

#head .c-icon-bear-round {
	display: none
}

#form {
	margin: 22px auto 0;
	width: 641px;
	text-align: left;
	z-index: 100
}

#form .bdsug, #fm .bdsug {
	top: 35px
}

</style>


<style data-for="result" id="css_index_result" type="text/css">
.s_ipt_wr {
	border: 1px solid #b6b6b6;
	border-color: #7b7b7b #b6b6b6 #b6b6b6 #7b7b7b;
	background: #fff;
	display: inline-block;
	vertical-align: top;
	width: 539px;
	margin-right: 0;
	border-right-width: 0;
	border-color: #b8b8b8 transparent #ccc #b8b8b8;
	overflow: hidden
}

.wrapper_s .s_ipt_wr {
	width: 439px
}

.wrapper_s .s_ipt {
	width: 434px
}

.wrapper_s .s_ipt_tip {
	width: 434px
}

.s_ipt_wr:hover, .s_ipt_wr.ipthover {
	border-color: #999 transparent #b3b3b3 #999
}

.s_ipt_wr.iptfocus {
	border-color: #4791ff transparent #4791ff #4791ff
}

.s_ipt_tip {
	color: #aaa;
	position: absolute;
	z-index: -10;
	font: 16px/22px arial;
	height: 32px;
	line-height: 32px;
	padding-left: 7px;
	overflow: hidden;
	width: 526px
}

.s_ipt {
	width: 526px;
	height: 22px;
	font: 16px/18px arial;
	line-height: 22px;
	margin: 6px 0 0 7px;
	padding: 0;
	background: transparent;
	border: 0;
	outline: 0;
	-webkit-appearance: none
}

#wrapper .bdnuarrow {
	width: 0;
	height: 0;
	font-size: 0;
	line-height: 0;
	display: block;
	position: absolute;
	top: -10px;
	left: 50%;
	margin-left: -5px
}

#wrapper .bdnuarrow em, #wrapper .bdnuarrow i {
	width: 0;
	height: 0;
	font-size: 0;
	line-height: 0;
	display: block;
	position: absolute;
	border: 5px solid transparent;
	border-style: dashed dashed solid
}

#wrapper .bdnuarrow em {
	border-bottom-color: #d8d8d8;
	top: -1px
}

#wrapper .bdnuarrow i {
	border-bottom-color: #fff;
	top: 0
}

.wrapper_l .quickdelete-wrap input {
	width: 500px
}

.wrapper_s .quickdelete-wrap input {
	width: 402px
}

input::-ms-clear {
	display: none
}


</style>
<body link="#0000cc" style="">

	<div id="wrapper" style="display: block;">
		<div id="head">
			<div class="head_wrapper">
				<div class="s_form">
					<div class="s_form_wrapper soutu-env-nomac soutu-env-index">
<style>
.index-logo-srcnew {
	display: none;
}
</style>
						<div id="lg">
							<img  class="index-logo-src"
								src="./resources/bd_logo1.png" width="270" height="129"
								usemap="#mp"> <img 
								class="index-logo-srcnew" src="./resources/bd_logo1(1).png"
								width="270" height="129" usemap="#mp">

						</div>

						<form id="form" name="f" class="fm">

							<span class="bg s_ipt_wr quickdelete-wrap">
							
							<span class="soutu-btn"></span>
							<input id="kw" name="wd" class="s_ipt" value="" maxlength="255" autocomplete="off">
							
							<a href="javascript:;" id="quickdelete" title="清空"
							class="quickdelete" style="top: 0px; right: 0px; display: none;"></a></span><span
							class="bg s_btn_wr">
							
							<input type="submit" id="su" value="那啥" class="bg s_btn"></span>
						</form>
						<div id="m"></div>
					</div>
				</div>

			</div>
		</div>
		</div>

</body>
</html>