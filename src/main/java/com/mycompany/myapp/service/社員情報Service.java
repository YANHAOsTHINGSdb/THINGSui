package com.mycompany.myapp.service;

import java.util.List;

import com.mycompany.myapp.bean.検索Bean;
import com.mycompany.myapp.bean.社員Bean;

public interface 社員情報Service {

	List<社員Bean> 検索(検索Bean bean);

	List<String> 登録(社員Bean bean);

}
