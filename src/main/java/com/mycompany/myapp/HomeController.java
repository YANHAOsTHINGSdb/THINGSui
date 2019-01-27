package com.mycompany.myapp;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mycompany.myapp.bean.検索Bean;
import com.mycompany.myapp.bean.社員Bean;
import com.mycompany.myapp.service.社員情報Service;
import com.mycompany.myapp.service.impl.社員情報ServiceImpl;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("serverTime", formattedDate);

		//return "mySmart";
		//return "my2";
		return "my3";   //React
		//return "searchEmployee";
	}

	/**
	 * テストデータの配列を返却する。
	 */
	@RequestMapping(value = "getTestData", method = RequestMethod.POST)
	@ResponseBody //将返回结果转成Json
	public List<社員Bean> getTestData(@RequestBody 検索Bean 検索bean) {//@RequestBody 将Json转成Java对象

		logger.info("call getTestData");
		List<社員Bean> result = new ArrayList<社員Bean>();

		社員情報Service 社員情報service = new 社員情報ServiceImpl();
		return 社員情報service.検索(検索bean);

	}

	@RequestMapping(value = "edit", method = RequestMethod.GET)
	public String edit(社員Bean bean, Model model) {

		logger.info("call edit");
		model.addAttribute("画面タイトル", "社員編集");
		model.addAttribute("モード", "編集");
		model.addAttribute("番号", bean.get番号());
		model.addAttribute("姓名", bean.get姓名());
		model.addAttribute("性別", bean.get性別());
		model.addAttribute("生年月日", bean.get生年月日());
		model.addAttribute("入社年月日", bean.get入社年月日());
		model.addAttribute("契約種類", bean.get契約種類());

		return "addEmployee";

	}

	@RequestMapping(value = "add", method = RequestMethod.GET)
	public ModelAndView add() {

		logger.info("call add");
		ModelAndView modelAndView = new ModelAndView("addEmployee");
		modelAndView.getModel().put("画面タイトル", "社員追加");

		return modelAndView;
	}

	@RequestMapping(value = "save", method = RequestMethod.POST)
	public String save(@ModelAttribute("fbean") 社員Bean bean, HttpSession session) {

		logger.info("call save");
		社員情報Service 社員情報service = new 社員情報ServiceImpl();
		社員情報service.登録(bean);
		return "searchEmployee";
	}

	@RequestMapping(value = "back", method = RequestMethod.POST)
	public String back() {

		logger.info("call back");
		return "searchEmployee";
	}
}
