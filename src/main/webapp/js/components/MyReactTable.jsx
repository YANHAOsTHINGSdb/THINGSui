"use strict";

const react = React.createElement;

//const ReactTable1 = window.ReactTable.default;

const program1 = {
  title:"检索结果画面",
  talkInfo: [
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
const program2 = {
  programDetail: [
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
class MyReactTable extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
			tableInfo:null //this.props.tableInfo
	    };
	    
        this.handleAdd = this.handleAdd.bind(this);
        this.handleView = this.handleView.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSeleted = this.handleSeleted.bind(this);
	}
	
	// 
	handleAdd(e){
	
		// 新规一个空记录
		var detail = Object.keys(tableInfo[0]).map((key, id)=>{
	      return {
	        key:key,
	        value:''
	      }
	    });
		
		var detailInfo = {
			detail : detail,
			// 将模式设置为编辑mode（0=view 1=edit）
			mode : '1'
		};
		
		// 把detailInfo刷到页面数据(program)
		var program = {
			detailInfo : detailInfo
		};
		
		// 向上传递数据
		this.props.onClick(program);
	}
	
	// 
	handleView(e){
		
		// 新规一个空记录
		var detail = Object.keys(e).map((key, id)=>{
	      return {
	        key:key,
	        value:e[key]
	      }
	    });
	    
		var detailInfo = {
			detail : detail,
			// 将模式设置为编辑mode（0=view 1=edit）
			mode : '0'
		};
		
		
		// 把detailInfo刷到页面数据(program)
		var program={
			detailInfo : detailInfo
		};
		
		// 向上传递数据
		this.props.onClick(program);
	}
	
	// 
	handleEdit(e){
		
		// 新规一个记录
		var detail = Object.keys(e).map((key, id)=>{
	      return {
	        key:key,
	        value:e[key]
	      }
	    });
	    
		var detailInfo = {
			detail : detail,
			// 将模式设置为编辑mode（0=view 1=edit）
			mode : '1'
		};
		
		
		// 把detailInfo刷到页面数据(program)
		var program={
			detailInfo : detailInfo
		};
		
		// 向上传递数据
		this.props.onClick(program);
	}
	
	// 
	handleDelete(e){	

		var newTableInfo;
		
		this.props.tableInfo.forEach(function(val){
		    if(e !== val){
		    	newTableInfo.push(val);
		    }
		});
		
		var program ={
			detailInfo : newTableInfo
		};
		
		// 向上传递数据
		this.props.onClick(program);
	}
	
	// 
	handleSeleted(e){
		
		// 新规一个记录
		var detail = Object.keys(e).map((key, id)=>{
	      return {
	        key:key,
	        value:e[key]
	      }
	    });
	    
	    var programInfo = {
			programDetail : program2.programDetail,
			programBody : program2.programBody,
			mode : '0' // 将模式设置为编辑mode（0=view 1=edit）
		};
		
		// 把detailInfo刷到页面数据(program)
		var program={
			programInfo : programInfo
		};
		
		// 向上传递数据
		this.props.onClick(program);
		
	}
	
	render() {
	
		const viewButtonName='照会';
		const selectButtonName='选择';
		const editButtonName='编辑';
		const deleteButtonName='删除';
		const tableInfo = this.props.tableInfo;

		
	    const CUSTOM_COLUMNS = Object.keys(tableInfo[0]).map((key, id)=>{
	      return {
	        Header: key,
	        accessor: key
	      }
	    });
	    
	    const columns = [
	    	...CUSTOM_COLUMNS,
	    	{
		  		Header: 'Actions',
		  		accessor: 'id',
		  		minWidth: 210,
			    Cell: row => (
			           <div>
							<button onClick={() => this.handleView(row.original)}>{viewButtonName}</button>
							<button onClick={() => this.handleSeleted(row.original)}>{selectButtonName}</button>
							<button onClick={() => this.handleEdit(row.original)}>{editButtonName}</button>
							<button onClick={() => this.handleDelete(row.original)}>{deleteButtonName}</button>
							
			           </div>
			       )
		}];
	
	
	    return(
          <table>
              <tbody>
                  <tr><td>
                      <div >
		   	    		<ReactTable
			    			data = { tableInfo }
			    			columns = { columns }
			            	defaultPageSize={30}
			            	className="-striped -highlight"
			            	style={{
					        	height: "540px", // This will force the table body to overflow and scroll, since there is not enough room
					            width:"780px"
			            	}}
			    		/>
                      </div>
                  </td>
                </tr>
                <tr><td>

                              <div style={{'textAlign':'right'}}>
                                <button type="button" 
                                        name="okButton" 
                                        class="bg s_btn"
                                        onCLick={this.handleAdd}
                                        >
                                    追加
                                </button>

                              </div>
                      </td>
                </tr>

            </tbody>
            </table>
	    );
	}
}

//ReactDOM.render(<MyReactTable programInfo={program} />, document.getElementById('app12'))