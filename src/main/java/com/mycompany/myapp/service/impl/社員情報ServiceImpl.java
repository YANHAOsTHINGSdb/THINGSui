package com.mycompany.myapp.service.impl;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import com.google.gson.Gson;
import com.mycompany.myapp.bean.検索Bean;
import com.mycompany.myapp.bean.社員Bean;
import com.mycompany.myapp.service.伝送数据;
import com.mycompany.myapp.service.社員情報Service;

public class 社員情報ServiceImpl implements 社員情報Service {

	private final String USER_AGENT = "Mozilla/5.0";

	/**
	 * 検索
	 */
	@Override
	public List<社員Bean> 検索(検索Bean bean) {

		//社員Beanより検索条件作成
		String s送信情報 = "";

		伝送数据 o伝送数据 = new 伝送数据("検索");
		
		//
		//
		//
		//計算符号map
		//      -----key=姓名,value=like
		//      -----key=性別,value=like
		s送信情報 = o伝送数据.做成検索条件数据_根据対象名(
				"com.mycompany.myapp.bean.社員Bean", 
				(Object) bean, 
				"{\"姓名\":\"like\",\"性別\":\"like\"}");

		try {
			String sURL = "http://localhost:8080/SpringRestfulWebServicesCRUDExample/multiConditionCalc";
			return List_Object2社員Bean(sendingPostRequest(s送信情報, sURL));

		} catch (Exception e) {

			e.printStackTrace();
		}
		return null;
	}

	private List<社員Bean> List_Object2社員Bean(List<Object> sendingPostRequest) {
		List<社員Bean> result = new ArrayList();
		if (sendingPostRequest == null || sendingPostRequest.isEmpty()) {

			社員Bean 社員bean = new 社員Bean();

			社員bean.set番号("------");
			社員bean.set姓名("------");
			社員bean.set性別("------");
			社員bean.set生年月日("------");
			社員bean.set入社年月日("------");
			社員bean.set契約種類("------");

			result.add(社員bean);
			return result;
		} else {
			社員Bean 社員bean = new 社員Bean();

			for (Object jsonObject : sendingPostRequest) {
				社員bean = new Gson().fromJson(jsonObject.toString(), 社員Bean.class);
				result.add(社員bean);
			}
		}
		return result;
	}

	public List<String> 登録(社員Bean bean) {

		//社員Beanより登録情報作成
		String s送信情報 = "";

		伝送数据 o伝送数据 = new 伝送数据("");
		s送信情報 = o伝送数据.做成登録数据_根据対象名("com.mycompany.myapp.bean.社員Bean", (Object) bean);

		try {
			String sURL = "http://localhost:8080/SpringRestfulWebServicesCRUDExample/addInfo";
			return List_Object2String(sendingPostRequest(s送信情報, sURL));

		} catch (Exception e) {

			e.printStackTrace();
		}
		return null;

	}

	private List<String> List_Object2String(List<Object> sendingPostRequest) {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}

	/**
	 * HTTP Get request
	 * @throws Exception
	 */
	/*	private void sendingGetRequest() throws Exception {

		  String urlString = "http://localhost:8080/JAXRSJsonCRUDExample/rest/countries";

		  URL url = new URL(urlString);
		  HttpURLConnection con = (HttpURLConnection) url.openConnection();

		  // By default it is GET request
		  con.setRequestMethod("GET");

		  //add request header
		  con.setRequestProperty("User-Agent", USER_AGENT);

		  int responseCode = con.getResponseCode();
		  System.out.println("Sending get request : "+ url);
		  System.out.println("Response code : "+ responseCode);

		  // Reading response from input Stream
		  BufferedReader in = new BufferedReader(
		          new InputStreamReader(con.getInputStream()));
		  String output;
		  StringBuffer response = new StringBuffer();

		  while ((output = in.readLine()) != null) {
		   response.append(output);
		  }
		  in.close();

		  //printing result from response
		  System.out.println(response.toString());

		 }*/

	/**
	 * HTTP Post request
	 * @param s検索条件
	 * @return
	 * @throws Exception
	 */
	private List<Object> sendingPostRequest(String s送信情報, String url) throws Exception {

		//String url = "http://localhost:8080/SpringRestfulWebServicesCRUDExample/multiConditionCalc";
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();

		// Setting basic post request
		con.setRequestMethod("POST");
		con.setRequestProperty("User-Agent", USER_AGENT);

		con.setRequestProperty("Accept-Language", "jp");

		con.setRequestProperty("Content-Type", "application/json;charset=utf-8");
		con.setRequestProperty("Content-Length", String.valueOf(s送信情報.length()));

		String postJsonData = s送信情報;

		// Send post request
		con.setDoOutput(true);
		OutputStreamWriter wr = new OutputStreamWriter(con.getOutputStream());
		wr.write(postJsonData);
		wr.flush();
		wr.close();

		int responseCode = con.getResponseCode();
		System.out.println("nSending 'POST' request to URL : " + url);
		System.out.println("Post Data : " + postJsonData);
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(
				new InputStreamReader(con.getInputStream()));
		String output;
		StringBuffer response = new StringBuffer();

		while ((output = in.readLine()) != null) {
			response.append(output);
		}
		in.close();

		//printing result from response
		System.out.println(response.toString());

		return stringbuffer2List(response);

	}

	/**
	 * Stringbuffer To List
	 * @param response
	 * @return
	 */
	private List<Object> stringbuffer2List(StringBuffer response) {

		List<Object> jsonObjectList = new ArrayList();

		JSONArray jsonArr = new JSONArray(response.toString());

		for (int i = 0; i < jsonArr.length(); i++) {
			JSONObject jsonObj = jsonArr.getJSONObject(i);
			jsonObjectList.add((Object) jsonObj);
			System.out.println(jsonObj);
		}

		return jsonObjectList;

	}

	private List<Object> string2List(String string) {
		List<Object> resultList = new ArrayList();
		String[] result = string.split(",");
		for (String s : result) {
			resultList.add(s);
		}
		return resultList;
	}

}
