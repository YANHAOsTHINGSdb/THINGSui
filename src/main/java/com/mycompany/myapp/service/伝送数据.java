package com.mycompany.myapp.service;

import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.WordUtils;
//import org.apache.commons.lang.StringUtils;
//import org.apache.commons.lang.WordUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.util.CollectionUtils;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mycompany.myapp.service.dto.区間対象情報DTO;
import com.mycompany.myapp.service.dto.項目数据DTO;

import lombok.Data;

@Data
public class 伝送数据 {

	//几种特例需要对应
	// 1 区間条件
	// 2 条件関係

	public 伝送数据(String s操作) {
		this.s操作 = s操作;
	}

	String s操作;

	/**
	 *
	 * @param s対象名
	 * @param 区間対象情報List
	 * @param s条件関係
	 * @return
	 */
	public String 做成検索条件数据_根据対象名and区間対象情報Listand条件関係(
			String s対象名, List<区間対象情報DTO> 区間対象情報List, String s条件関係,
			Object object) {

		JSONObject obj = new JSONObject();

		// 目標
		String s目標 = this.做成目標数据_根据対象名(s対象名);
		obj.put("目標", 作成_目標Object(s対象名));

		// 操作
		if (!StringUtils.isEmpty(this.s操作)) {
			obj.put("操作", this.s操作);
		}

		List<項目数据DTO> 項目数据DTOList = 做成項目数据DTO_根据対象名(s対象名, object);

		JSONArray subObj = 做成条件数据_根据項目数据DTOList(項目数据DTOList, 区間対象情報List, s目標);

		// 条件
		obj.put("条件", subObj);

		String s条件関係数据[] = 做成条件关系数据_根据対象名(項目数据DTOList, s条件関係);

		String s条件关系数据 = s条件関係数据.toString();

		// 条件
		obj.put("条件関係", s条件关系数据);

		return obj.toString();
	}

	private List<String> 作成_目標List(String s対象名) {

		Class stuClass = null;
		try {
			stuClass = Class.forName(s対象名);
		} catch (ClassNotFoundException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
		Field[] fieldArray = stuClass.getDeclaredFields();
		//JSONArray sub目標Array = new JSONArray();
		List<String> 目標List = new ArrayList();
		for (Field f : fieldArray) {
			JSONObject obj目標 = new JSONObject();
			目標List.add(f.getName());
		}

		return 目標List;
	}

	/**
	 *
	 * @param 項目数据dtoList
	 * @param s条件関係
	 * @return
	 */
	private String[] 做成条件关系数据_根据対象名(List<項目数据DTO> 項目数据dtoList, String s条件関係) {
		// s条件関係 = "A XX B XX C";
		// 根据A B C找好ID号即可。
		// 即把ABC替.换.成123再.输.出
		// return " 1 XX 2 XX 3 "
		
		// 注,1,2,3就是项目的ID
		String s条件関係数据[] = s条件関係.split(" ");
		for (int i = 0; i < s条件関係数据.length; i++) {

			int j = 0;

			for (項目数据DTO 項目数据dto : 項目数据dtoList) {

				if (項目数据dto.getSName().equals(s条件関係数据[i])) {
					break;
				}

				j++;
			}

			s条件関係数据[i] = j + "";
		}

		return s条件関係数据;
	}

	/**
	 *
	 * @param s対象名
	 * @param 区間対象情報List
	 * @return
	 */
	public String 做成検索条件数据_根据対象名and区間対象情報List(String s対象名, List<区間対象情報DTO> 区間対象情報List, Object object) {

		JSONObject obj = new JSONObject();

		// 目標
		String s目標 = this.做成目標数据_根据対象名(s対象名);
		obj.put("目標", 作成_目標Object(s対象名));

		// 操作
		if (!StringUtils.isEmpty(this.s操作)) {
			obj.put("操作", this.s操作);
		}

		List<項目数据DTO> 項目数据DTOList = 做成項目数据DTO_根据対象名(s対象名, object);

		JSONArray subObj = 做成条件数据_根据項目数据DTOList(項目数据DTOList, 区間対象情報List, s目標);
		obj.put("条件", subObj);

		String s条件关系数据 = 做成条件关系数据_根据対象名(項目数据DTOList);
		obj.put("条件関係", s条件关系数据);

		return obj.toString();

	}

	/**
	 *
	 * @param s条件数据
	 * @return
	 */
	private String get条件(String s条件数据) {
		if (StringUtils.isEmpty(s条件数据)) {
			return "";
		}
		return "," + s条件数据;
	}

	private JSONArray 做成条件数据_根据項目数据DTOList(List<項目数据DTO> 項目数据dtoList, List<区間対象情報DTO> 区間対象情報List, String s目標) {

		JSONArray ja = new JSONArray();

		String s条件数据 = "\"条件\":[";
		int i = 0;
		for (項目数据DTO 項目数据dto : 項目数据dtoList) {

			JSONObject subsubObj = new JSONObject();
			subsubObj.put("項目", 項目数据dto.getSName());
			subsubObj.put("値", 項目数据dto.getSValue());
			subsubObj.put("計算符号", 取得运算符号_根据区間対象情報List(項目数据dto, 区間対象情報List));
			subsubObj.put("ID", i);
			if (!StringUtils.isEmpty(s目標)) {
				subsubObj.put("目標", s目標);
			}

			ja.put(subsubObj);

			if (i < 項目数据dtoList.size())
				s条件数据 += s条件数据 + ",";
			i++;
		}

		s条件数据 += "]";
		return ja;
	}

	private String 取得运算符号_根据区間対象情報List(項目数据DTO 項目数据dto, List<区間対象情報DTO> 区間対象情報List) {
		for (区間対象情報DTO 区間対象情報dto : 区間対象情報List) {
			if (区間対象情報dto.getS対象名().equals(項目数据dto.getSName())) {
				return 区間対象情報dto.getS运算符号();
			}
		}
		return "等于";
	}

	/**
	 *
	 * @param s対象名 = "com.mycompany.myapp.bean.社員Bean"
	 * @return
	 */
	public String 做成検索条件数据_根据対象名(String s対象名, Object object, String... s計算符号) {

		JSONObject obj = new JSONObject();


		ObjectMapper mapper = new ObjectMapper();
		Map<String, Object> 計算符号map = null;
		try {
			if( s計算符号 != null && !StringUtils.isEmpty(s計算符号[0])) {
				計算符号map = mapper.readValue(s計算符号[0], Map.class);
			}
		} catch (JsonParseException e1) {
			// TODO 自動生成された catch ブロック
			e1.printStackTrace();
		} catch (JsonMappingException e1) {
			// TODO 自動生成された catch ブロック
			e1.printStackTrace();
		} catch (IOException e1) {
			// TODO 自動生成された catch ブロック
			e1.printStackTrace();
		}

		// 目標
		String s目標 = this.做成目標数据_根据対象名(s対象名);
		obj.put("目標", 作成_目標Object(s対象名));

		// 操作
		if (!StringUtils.isEmpty(this.s操作)) {
			obj.put("操作", this.s操作);
		}

		// 条件
		List<項目数据DTO> 項目数据DTOList = 做成項目数据DTO_根据対象名(s対象名, object);

		JSONArray subObj = 做成条件数据_根据項目数据DTOList(項目数据DTOList, s目標, 計算符号map);
		if (subObj == null) {

		} else if (StringUtils.isEmpty(subObj.toString())) {

		} else {
			obj.put("条件", subObj);
		}

		// 条件関係
		String s条件关系数据 = 做成条件关系数据_根据対象名(項目数据DTOList);

		if (!StringUtils.isEmpty(s条件关系数据)) {
			obj.put("条件関係", s条件关系数据);
		}

		return obj.toString();
	}

	private Map<String, Object> 作成_目標Object(String s対象名) {
		Map map = new HashMap<String, Object>();
		map.put(this.做成目標数据_根据対象名(s対象名), 作成_目標List(s対象名));

		return map;
	}

	/**
	 *
	 * @param size
	 * @return
	 */
	private String 做成条件关系数据_根据対象名(List<項目数据DTO> 項目数据dtoList) {

		String s条件关系数据 = "";

		// 如果只有一个条件，直接返回""
		//if(size == 1) return s条件关系数据;

		int i = 0;
		for (項目数据DTO 項目数据dto : 項目数据dtoList) {

			if (StringUtils.isEmpty(項目数据dto.getSValue())) {
				continue;
			}

			if(i == 0) {
				s条件关系数据 += i + " ";
			}


			if (i > 0 && i < 項目数据dtoList.size() - 1) {
				s条件关系数据 += "and ";
				s条件关系数据 += i + " ";
			}

			i++;
		}

		// 如果只有1个条件，也不需要弄条件关系
		return i <= 1 ? "" : s条件关系数据;

	}

	/**
	 *
	 * @param 項目数据dtoList
	 * @param s目標
	 * @return
	 */
	private JSONArray 做成条件数据_根据項目数据DTOList(List<項目数据DTO> 項目数据dtoList, String s目標, Map<String, Object> 計算符号map) {

		JSONArray ja = new JSONArray();

		String s条件数据 = "\"条件\":{";
		int i = 0;
		for (項目数据DTO 項目数据dto : 項目数据dtoList) {

			if (StringUtils.isEmpty(項目数据dto.getSValue())) {
				continue;
			}

			JSONObject subsubObj = new JSONObject();
			subsubObj.put("項目", 項目数据dto.getSName());
			subsubObj.put("値", 項目数据dto.getSValue());

			if(!CollectionUtils.isEmpty(計算符号map) && !StringUtils.isEmpty((String)計算符号map.get((String)項目数据dto.getSName()))) {
				subsubObj.put("計算符号", (String)計算符号map.get((String)項目数据dto.getSName()));
			}else {
				subsubObj.put("計算符号", "等于");
			}

			subsubObj.put("ID", i + "");
			subsubObj.put("FORMAT", "0");
			subsubObj.put("目標", s目標);

			ja.put(subsubObj);

			i++;
		}

		s条件数据 += "}";

		// 如果无条件，就干脆不出力MSG
		return i == 0 ? null : ja;
	}

	/**
	 *
	 * @param s対象名
	 * @return
	 */
	private List<項目数据DTO> 做成項目数据DTO_根据対象名(String s対象名, Object object) {
		List<項目数据DTO> 項目数据DTOList = new ArrayList();
		//1.获取Class对象
		Class stuClass = null;
		try {
			//Class<?> obj = Class.forName("com.withiter.test.Person");
			stuClass = Class.forName(s対象名);
		} catch (ClassNotFoundException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}

		System.out.println("************获取所有的字段(包括私有、受保护、默认的)********************");
		Field[] fieldArray = stuClass.getDeclaredFields();
		for (Field f : fieldArray) {
			項目数据DTO 項目数据dto = new 項目数据DTO();
			項目数据dto.setSName(f.getName());
			try {

				Method testParamMethod = object.getClass().getDeclaredMethod("get" + WordUtils.capitalize(f.getName()));
				String str = (String) testParamMethod.invoke(object);

				項目数据dto.setSValue(str);

			} catch (IllegalArgumentException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (SecurityException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (NoSuchMethodException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			}
			System.out.println(f);
			項目数据DTOList.add(項目数据dto);
		}

		return 項目数据DTOList;
	}

	/**
	 *
	 * @param s対象名
	 * @return
	 */
	private String 做成目標数据_根据対象名(String s対象名) {
		// "目標":社員
		try {
			Class stuClass3 = Class.forName(s対象名);// 注意此字符串必须是真实路径，就是带包名的类路径，包名.类名
			String sClassFullName = stuClass3.getName();
			String sClassFullNames[] = sClassFullName.split("\\.");

			return sClassFullNames[sClassFullNames.length - 1];

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		return null;
	}

	public String 做成登録数据_根据対象名(String s対象名, Object object) {

		JSONObject obj = new JSONObject();
		JSONObject subObj = new JSONObject();

		//1.获取Class对象
		Class stuClass = null;
		try {
			//Class<?> obj = Class.forName("com.withiter.test.Person");
			stuClass = Class.forName(s対象名);
		} catch (ClassNotFoundException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}

		System.out.println("************获取所有的字段(包括私有、受保护、默认的)********************");
		Field[] fieldArray = stuClass.getDeclaredFields();
		for (Field f : fieldArray) {

			try {

				Method testParamMethod = object.getClass().getDeclaredMethod("get" + WordUtils.capitalize(f.getName()));
				String str = (String) testParamMethod.invoke(object);
				subObj.put(f.getName(), str);

			} catch (IllegalArgumentException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (SecurityException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (NoSuchMethodException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (InvocationTargetException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();
			}
			System.out.println(f);

		}

		// 例，s目標 =社員Bean
		String s目標 = this.做成目標数据_根据対象名(s対象名);

		obj.put(s目標, subObj);

		return obj.toString();
	}

}
