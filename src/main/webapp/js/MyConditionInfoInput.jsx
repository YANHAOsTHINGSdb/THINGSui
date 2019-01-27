

const program1 = {

  tableInfo: [
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
   }],
  programInfo: [
                   {
                     "key":"詞条A",
                     "value":"荷包蛋",
                     "edit":false
                   },
                   {
                     "key":"詞条B",
                     "value":"",
                     "edit":false
                   },
                   {
                     "key":"処理",
                     "value":"烹制",
                     "edit":false
                   },
                   {
                     "key":"程序名",
                     "value":"烹制荷包蛋",
                     "edit":false
                   },    
                   {
                     "key":"做成者",
                     "value":"A桑",
                     "edit":false
                   },
                   {
                     "key":"做成日期",
                     "value":"2018/8/31",
                     "edit":false
                   },                   
                   {
                     "key":"备注",
                     "value":"",
                     "edit":true
                   }
                   ]
   ,
   programBody:"炒锅倒油，\n大火将油烧热\n拿住鸡蛋，\n将鸡蛋的中间在碗沿、灶台沿、或者锅沿，\n用力磕一下。 ...\n拿起磕出了裂缝的鸡蛋，\n垂直在油锅上方，\n然后尽量离锅底越近越好，\n双手从裂缝处将鸡蛋掰开，\n让蛋清裹着蛋黄落入油锅中\n如果怕迸溅出油，\n可以趁着油还凉时就将鸡蛋磕入，\n而且离锅底越近越不容易溅油。"
};

class MyConditionInfoInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          conditionInfo: {},
          editFlg: '1' 
        };
        
        this.handleConditionInfoChanged = this.handleConditionInfoChanged.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleCancleClick = this.handleCancleClick.bind(this);
    }
    
    handleConditionInfoChanged(changedConditionInfo) {
        
        this.setState({ conditionInfo: changedConditionInfo,  editFlg: '1' });
      
    }
    
    makeAjaxCallInfo (conditionInfo){
    
		var j目標 = {};
	    var j子目標 = [];
	    var j条件 = {};
	    var 目標詞条;
	    
	    conditionInfo.forEach(function(column)
	    {
	    	if(column.key === '目標詞条'){
	    		目標詞条 = column.value;
	    	}else{
		    	j子目標.push(column.key);
		        var columnName = column.key;
		        
		        // 如果条件有入力，则记入
		        if(column.value){
		        	j条件[columnName] = column.value;
		        }
	    	}
	    });
	    
	    j目標[目標詞条]=j子目標;
	    
	    var CRUD = {
	    	操作: '検索',
	    	目標: j目標,
	    	条件: j条件
	    };
	    
	    var param1 ={
	    	CRUD: CRUD
	    };
	    
	    // return param1;
	    return CRUD;
	 }
 
    handleSearchClick(e) {
    
        var conditionInfo = this.props.conditionInfo;
        var ajaxCallInfo = {
		  	//url:'http://localhost:8080/SpringRestfulWebServicesCRUDExample/relation',
		  	url:'http://localhost:8080/SpringRestfulWebServicesCRUDExample/multiConditionCalc',
			param:this.makeAjaxCallInfo(conditionInfo)
		};
		
        var program= {
        	ajaxCallInfo : ajaxCallInfo
        };
				
        // 向上传递
        this.props.onClick(program);
    }
  
    handleCancleClick(e) {
    
        // 在此编辑program数据
        var conditionInfo = this.props.conditionInfo;
        // 将模式设置为编辑mode（0=view 1=edit）
        conditionInfo.mode = '1'; //
                
        var program={
        	conditionInfo : conditionInfo
        };
        
        // 向上传递
        this.props.onClick(program);
    }
  
    render(){
        const conditionInfo = this.props.conditionInfo;
        const editFlg = this.props.editFlg;
        return (

          <table >
              <tbody>
                  <tr>
                      <td>
                          <div style={{'width': '200px', 
                                      'height': '500px', 
                                      'color': '##f2f7f7', 
                                      'backgroundColor':'##272828'}}>
                          
                              <div  style={{'width': '200px', 'height': '10px'}}>
                              <h1>条件入力画面</h1>
                              </div>
                              <div>
                                <MyViewInputTable
                                    detailInfo={this.props.conditionInfo}
                                    editFlg = {this.props.editFlg} //0:view 1:edit
                                    onMyViewInputTableChanged ={this.handleConditionInfoChanged}
                                />
                            </div>
                              <div style={{'textAlign':'right'}}>
                                <button type="button" 
                                        name="okButton" 
                                        class="bg s_btn"
                                        onClick={this.handleSearchClick}
                                        >
                                        検索
                                </button>
                                <button type="button"
                                        name="cancleButton" 
                                        class="bg s_btn"
                                        onClick={this.handleCancleClick}
                                        >
                                    Cancle
                                </button>
                              </div>
                          </div>
                    </td>
                </tr>
            </tbody>
            </table>
        );
    }
}

//ReactDOM.render(<MyConditionInfoInput conditionInfo={conditionInfo} editFlg =0 />, document.getElementById('app2'));