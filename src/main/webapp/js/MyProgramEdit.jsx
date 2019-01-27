      const goJsDataInfo = { 
          "nodeKeyProperty": "id",
          "nodeDataArray": [
                { "id": 0, "loc": "120 200", "text": "条件" },
                { "id": 1, "loc": "240 240", "text": "Java" },
                { "id": 2, "loc": "240 360", "text": "日本语" },
                { "id": 3, "loc": "360 120", "text": "技术者" },
                { "id": 4, "loc": "480 120", "text": "姓名" },
                { "id": 5, "loc": "480 240", "text": "性别" },
                { "id": 6, "loc": "480 360", "text": "会社" }
              ],
              "linkDataArray": [
                  
                { "from": 0, "to": 1, "text": "ID=1442011", "curviness": 20 },
             //   { "from": 1, "to": 0, "text": "up (moved)\nPOST", "curviness": 20 },
                { "from": 0, "to": 2, "text": "ID=7542011", "curviness": 20 },
             //   { "from": 1, "to": 2, "text": "up (no move)" },
                { "from": 1, "to": 3, "text": "未找到计算程序" },
             //   { "from": 2, "to": 0, "text": "timer\nPOST" },
                { "from": 2, "to": 3, "text": "ID=7514122011" },
             //   { "from": 3, "to": 0, "text": "up\nPOST\n(dblclick\nif no move)" },

            //    { "from": 4, "to": 0, "text": "up\nPOST" },

                { "from": 3, "to": 4, "text": "ok" },
                { "from": 3, "to": 5, "text": "ok" },
                { "from": 3, "to": 6, "text": "ok" }
              ]
            };

  
class MyProgramInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            programBody: null, 	//this.props.programBody,
            editFlg : null		//this.props.editFlg
        };
        
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    
    handleValueChange(e){
        const programBody = e.target.value;
        
        // 向上传{programInfo}数据
        this.props.onMyProgramInputChanged(programBody);
    }
    
    render() {
    
        const programBody = this.props.programBody;
        
        var disabled = "";
        var fontColorCode= '#303331';
        var backgroundColorCode= '#ffffff';
        
        // 将模式设置为编辑mode（'0'=view '1'=edit）
        
        switch(this.props.editFlg){
        case '0':
        	disabled = "disabled";
        	backgroundColorCode = '#ffffff';
        	fontColorCode= '#303331';
        	break;
        	
        case '1':
        	disabled = "";
        	backgroundColorCode = '#ff0000';
        	fontColorCode= '#999999';
        	break;
        	
        default:
        	disabled = "disabled";
        	backgroundColorCode = '#ffffff';
        	fontColorCode= '#303331';
        }
        
        return (
         <form >
          <table>
              <tbody>
                  <tr><td>
                      <div  style={{'width': '300px', 'height': '10px'}}>
                          <h1>程序入力框</h1>
                      </div>
                  </td>
                </tr>
                <tr><td>
                          <div >
                              
                            <textarea
                                    style = {{'backgroundColor': {backgroundColorCode}, 'color': {fontColorCode}}}
                                    name = "programBody"
                                    rows = "20"
                                    cols = "45"
                                    placeholder = "please write program here"
                                    onChange = {this.handleValueChange}
                                    disabled = {disabled}
                                    value = {programBody}
                                    >
                            </textarea>
                        </div>

                      </td>
                </tr>

            </tbody>
            </table>
          </form>
        );
    }
}

class MyProgramEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            programInfo:this.props.programInfo
        };
        
        this.handleProgramInputInfoChanged = this.handleProgramInputInfoChanged.bind(this);
        this.handleViewInputTableInfoChanged = this.handleViewInputTableInfoChanged.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.handleTestClick = this.handleTestClick.bind(this);
        this.handleCancleClick = this.handleCancleClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }
    
    handleProgramInputInfoChanged(programBody) {
		var programInfo = this.props.programInfo;
		programInfo.programBody = programBody;
		
    	this.state = {
    		programInfo:programInfo
    	};
		
    }
    
    
    handleViewInputTableInfoChanged(programDetail) {
		var programInfo = this.props.programInfo;
		programInfo.programDetail = programDetail;
        
    	this.state = {
    		goJsDataInfo:goJsDataInfo
    	};
        
    }
    
    handleOkClick() {
        
        var programInfo= this.state.programInfo;
        programInfo.mode = '0'; // 将模式设置为编辑mode（'0'=view '1'=edit）
        
        var program ={
        	programInfo : programInfo
        };
        
        // 向上传递
        this.props.onClick(program);
    }
    
    handleTestClick() {

        var programInfo = this.state.programInfo;
        
        // 将模式设置为编辑mode（0=view 1=edit）
        programInfo.mode = '1';
        
        var program ={
        	programInfo : programInfo,
        	goJsDataInfo : goJsDataInfo
        }
        
        // 向上传递
        this.props.onClick(program);
    }
    
    // 
    handleCancleClick() {
        // 写式样
        // this.setState({ programBody: this.props.programBody,  editFlg: '1' });
        
        var program = this.state.programInfo;
        
        // 向上传递
        this.props.onClick(program);
    }

    //
    handleEditClick(){
    	
    	var programInfo = this.state.programInfo;
        
        programInfo.mode = '1'; // 将模式设置为编辑mode（0=view 1=edit）
        
        var program = {        
    		programInfo : programInfo
    	};
    	
        // 向上传递
        this.props.onClick(program);
    }
    
    render(){
    	const okButtonName="就这样吧";
    	const testButtonName="测一测";
    	const cancleButtonName="取消";
    	const editButtonName="编辑";
    	const programInfo = this.props.programInfo;
        const programDetail = programInfo.programDetail;
        const programBody = programInfo.programBody;
        const mode = programInfo.mode;
        var disabled;
        var not_disabled;

        // 将模式设置为编辑mode（'0'=view '1'=edit）
        switch(mode){
        case '0':
        	disabled = "disabled";
        	not_disabled = "";
        	break;
        case '1':
        	disabled = "";
        	not_disabled = "disabled";
        	break;
        deafult:
        	disabled = "disabled";
        	not_disabled = "";
        	break;
        }

        return (

          <table >
              <tbody>
                  <tr><td>
                      <div style={{'width': '300px', 'height': '10px'}}>
                      <h1>程序编辑画面</h1>
                      </div>
                      </td>
                  </tr>
                  <tr>
                      <td valign="top">
                          <div  class="myViewInputTable">
                            <MyViewInputTable
                                detailInfo={programDetail}
                                editFlg ={mode} //0:view 1:edit
                                onMyViewInputTableChanged = {this.handleViewInputTableInfoChanged}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <MyProgramInput
                                programBody={programBody}
                                editFlg ={mode} //0:view 1:edit
                                onMyProgramInputChanged = {this.handleProgramInputInfoChanged}/>                                
                            
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style={{'textAlign':'right'}}>
                            <button type="button" 
                                    name="okButton" 
                                    class="bg s_btn"
                                    onClick={this.handleOkClick}
                                    disabled={disabled}>{okButtonName}</button>
                            <button 
                                    type="button" 
                                    name="testButton" 
                                    class="bg s_btn"
                                    onClick={this.handleTestClick}
                                    disabled={disabled}>{testButtonName}</button>
                            <button 
                                    type="button" 
                                    name="cancleButton" 
                                    class="bg s_btn"
                                    onClick={this.handleCancleClick}>{cancleButtonName}</button>
                            <button 
                                    type="button" 
                                    onClick={this.handleEditClick}
                                    name="editButton" 
                                    class="bg s_btn"
                                    disabled={not_disabled}>{editButtonName}</button>
                        </div>
                    </td>
                </tr>
            </tbody>
            </table>

        );
    }
}

//ReactDOM.render(<MyProgramEdit programBody={programBody} programDetail={programDetail} />, document.getElementById('app1'));
//ReactDOM.render(<MyProgramEdit programbody={programInfo} programDetail={programDetail} />, document.getElementById('app2'));