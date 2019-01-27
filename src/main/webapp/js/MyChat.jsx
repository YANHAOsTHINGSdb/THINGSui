
const react = React.createElement;

const Initicon = window.reactIniticon;


const program1 = {
  ajaxCallInfo:{
  	"url":"http://localhost:8080/SpringRestfulWebServicesCRUDExample/multiConditionCalc",
  	"param":{
			    '操作': '検索',
			    '目標': {'社員Bean':['番号','姓名','性別','生年月日','入社年月日','契約種類']}
		  	 }
  },
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

class RobotName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''
        };
    }
     render(){
         const name = this.props.name;
        return (<div  style={{
                            'display': 'inline-block',
                            'height': '17px','overflow': 'hidden',
                            'padding': '0',
                            'backgroundColor': '#f5d92a',
                            'borderRadius': '5px',
                            'padding':'10px 10px 0px 10px'}}>{name}</div>);
     }
}
class UserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''
        };
    }
    render(){
        const name = this.props.name;
        return (<div  style={{
                            'display': 'inline-block',
                            'height': '17px',
                            'overflow': 'hidden',
                            'padding': '0',
                            'backgroundColor': '#619fe8',
                            'color': '#ffffff',
                            'borderRadius': '5px',
                            'padding':'10px 10px 0px 10px'}}>{name}</div>);
    }
}
class MyUserTalkCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talkValue:''
        };
    }

    modifyStr(talkValue){
    	
    	if(talkValue.length > 35){
    		return talkValue.substring(1, 35) + '<br />' + this.modifyStr(talkValue.substring(36, talkValue.length));
    	}
    	else{
    		return talkValue;
    	}
    }
    
    render(){
        const talkValue = this.props.talkValue;
        var iLine = Math.round(talkValue.length / 35) + 1 ; // 暂定每行最大显示10个字
		
		var divStyle = {
  			width: '224px',
  			padding:'0',
  			backgroundColor: '#94e4a1',
  			padding:'10px 10px 0px 10px'
		};		
		
        if(iLine > 1){
        	divStyle['height'] = 13 * iLine + 'px';
        	divStyle['display'] = 'block';
        	divStyle['line-height'] = 10;
        	divStyle['border-radius'] = 2 * iLine + 'px';
        	divStyle['word-wrap'] = 'break-word';
        	divStyle['width'] = '224px';
        }else{
        	divStyle['height'] = 17 + 'px';
        	divStyle['display'] = 'inline-block';
        	divStyle['line-height'] = 0;
        	divStyle['border-radius'] = 10 + 'px';        	
        	divStyle['overflow']='hidden';
        	divStyle['width'] = talkValue.length * 10 + 'px';
        }
		
        return (<div style={divStyle}>{talkValue}</div>);

    }
}
class MyRobotTalkCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talkValue:''
        };
    }
    render(){
        const talkValue = this.props.talkValue;
        return (<div style={{
                            'display': 'inline-block',
                            'height': '17px',
                            'overflow': 'hidden',
                            'padding': '0',
                            'backgroundColor': '#ffffff',
                            'borderRadius': '5px',
                            'padding':'10px 10px 0px 10px'}}>
        
        {talkValue}</div>);
    }
}
class MyUserTalkRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            talkValue:''
        };
    }
    
    render(){
        const talkValue = this.props.talkValue;
        const name = this.props.name;
        return (
            <div style={{'width': '324px',
                        'textAlign':'-webkit-right'}}>
            <table>
            <tbody>
                <tr><td>
                    <MyUserTalkCard talkValue={talkValue}/>
                </td>
                <td>
                    <UserName name={name}/>
                </td></tr>
            </tbody>
            </table>
            </div>
        );
    }
}

class MyRobotTalkRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            talkValue:''
        };
    }
    
    render(){
        const talkValue = this.props.talkValue;
        const name = this.props.name;
        return (
            <div style={{'width': '324px',
                         'textAlign':'-webkit-left'}}>
            
            <table>
            <tbody>
                <tr><td>
                    <RobotName name={name}/>
                </td>
                <td>
                    <MyRobotTalkCard talkValue={talkValue}/>
                </td></tr>
            </tbody>
            </table>
            </div>
        );
    }
}

class MyChatView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            talkInfo:null //this.props.talkInfo
        };
    }

    render(){
     
        const rows = [];
        var ikey=0;
        const talkInfo = this.props.talkInfo;
        if(! talkInfo){
        	return(
            <div style={{'fontFamily': "'Helvetica',Arial, sans-serif",
                        'fontSize':'12px',
                        'backgroundColor': '#8b99b3',
                        'display': 'inline-block',
                        'height': '324px',
                        'lineHeight': '0',
                        'overflow': 'hidden',
                        'padding': '15px 10px'}}>
                <table >
                    <tbody><tr><td></td></tr></tbody>
                </table>
            </div>
			);
        }
        talkInfo.forEach((info) => {
        
            if(info.userTalk){
                rows.push(
                
                    <MyUserTalkRow
                            name={info.name}
                            talkValue={info.talkValue}
                            key={ikey++}
                    />
                
                );
            }else{
                rows.push(
                
                    <MyRobotTalkRow
                            name={info.name}
                            talkValue={info.talkValue}
                            key={ikey++}
                    />    
                
                );
            }
        
        });
        
        return (        
            <div style={{'fontFamily': "'Helvetica',Arial, sans-serif",
                        'fontSize':'12px',
                        'backgroundColor': '#8b99b3',
                        'display': 'inline-block',
                        'height': '324px',
                        'lineHeight': '0',
                        'overflow': 'hidden',
                        'padding': '15px 10px'}}>
                <table >
                    <tbody><tr><td>{rows}</td></tr></tbody>
                </table>
            </div>
        );
     
    }
}

class MyChat extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            talkInfo : null, //this.props.talkInfo,
            talkValue:"",
			selectedOption:"NL"
        };
        this.handleSendButtonOnClick = this.handleSendButtonOnClick.bind(this);
        this.handleTalkInfoChanged = this.handleTalkInfoChanged.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    
    // [NL][GW][CRUD][SDP]选择改变时
    handleOptionChange(changeEvent) {
  		this.setState({
    		selectedOption: changeEvent.target.value
  		});
	}
    
    // 做成完整的{program}的数据
    addElement(name1, talkValue1, userTalk1){
    
        var talkInfo_input;
        
        talkInfo_input = {
			    name:name1,
			    talkValue: talkValue1,
			    userTalk:userTalk1
		};

        //--------------------------------
        //"name":"AI机器人",
        //"talkValue":"What can I do for U?",
        //"userTalk":false
        //--------------------------------
        
        var talkInfo_local = this.props.talkInfo;

        talkInfo_local.push(talkInfo_input);
        
        return talkInfo_local;
    }
    
    
    // 录入信息时激活此处
    handleTalkInfoChanged(e) {
        
        this.setState({ 
        	talkInfo : this.props.talkInfo,
        	talkValue: e.target.value 
        
        }); // 确保录入的信息留在IE上
        
    }
    
      
    // 按钮点击时激活此处
    handleSendButtonOnClick() {
    	
    	var program={
    		ajaxCallInfo:null,
    		talkInfo:null,
    		tableInfo:null,
    		nodeDataArray:null,
    		detailInfo:null,
    		conditionInfo:null,
    		programInfo:null
    	};
    	var talkRole_user = "用户";
    	var talkRole_robot = "AI机器人";
        var talkInfo = this.addElement(talkRole_user, this.state.talkValue, true); // 将当前对话添加到
        program.talkInfo = talkInfo;
        
        // Ajax计算结果置入
        // var tableInfo;
        // TODO
		switch( this.state.talkValue ) {
		    case "test":
		    	program.ajaxCallInfo = program1.ajaxCallInfo;
		   		program.talkInfo = talkInfo;
		        break;
		        
		    case "show me info":
		        program.tableInfo = program1.tableInfo;
		   		var talkInfo = this.addElement(talkRole_robot, "给你准备了一个表格（见右图）", false);
		   		program.talkInfo = talkInfo;
		        break;
		 
		    case "let me input":
		    case "show me detail":
		        program.detailInfo = program1.programInfo;
		        var talkInfo = this.addElement(talkRole_robot, "给你准备了明细画面（见右图）", false);
		        program.talkInfo = talkInfo;
		        break;

		    case "let me search":
		    	program.conditionInfo = program1.programInfo;
		    	var talkInfo = this.addElement(talkRole_robot, "给你准备了一个检索入力画面（见右图）", false);
		    	program.talkInfo = talkInfo;
		    	break;
		    	
		    case "let me program":
		    	var programInfo ={
		    		programDetail : program1.programInfo,
		    		programBody : program1.programBody,
		    		mode : '0' // 将模式设置为编辑mode（'0'=view '1'=edit）
		    	};
		    	program.programInfo = programInfo;
		    	
		    	var talkInfo = this.addElement(talkRole_robot, "给你准备了一个程序入力画面（见右图）", false);
		    	program.talkInfo = talkInfo;
		    	break;
		    	
		   	default:
		   		// var talkInfo = this.addElement(talkRole_robot, "俺没明白你啥意思？！", false);
		   		// program.talkInfo = talkInfo;
		   		switch(this.state.selectedOption){
		   		case 'NL':
					var param1 = {
						NL:this.state.talkValue
					};
					break;
				case 'GW':
					var param1 = {
						GW:this.state.talkValue
					};
					break;
				case 'CRUD':
					var param1 = {
						CRUD:this.state.talkValue
					};
					break;
				case 'SDP':
				
					var jsonObject = JSON.parse(this.state.talkValue);
				
					var param1 = {
						SDP:jsonObject
					};
					break;
		   		}
		   		var ajaxCallInfo = {
				  	url:'http://localhost:8080/SpringRestfulWebServicesCRUDExample/relation',
					param:param1
				};
				program.ajaxCallInfo = ajaxCallInfo;
		   		program.talkInfo = talkInfo;
		        break;
		}

        this.setState({ 
        	talkInfo : this.props.talkInfo,
        	talkValue:''
        });
        
        // var program = this.props.program;    // this.props.program 外来数据
        // 向上传递数据
        this.props.onClick(program);
    }

    render(){
        return (
            <div style={{'height': '580px','backgroundColor': '#320000'}}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <MyChatView 
                                    talkInfo={this.props.talkInfo} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
						          <label style={{'color': '#FFFF00'}}>
						            <input type="radio" value="NL" checked={this.state.selectedOption === 'NL'} 
						             onChange={this.handleOptionChange}/>
						            NL
						          </label>
						          <label style={{'color': '#FFFF00'}}>
						            <input type="radio" value="GW" checked={this.state.selectedOption === 'GW'} 
						            onChange={this.handleOptionChange}/>
						            GW
						          </label>
						          <label style={{'color': '#FFFF00'}}>
						            <input type="radio" value="CRUD"  checked={this.state.selectedOption === 'CRUD'}  
						            onChange={this.handleOptionChange}/>
						            CRUD
						          </label>
						          <label style={{'color': '#FFFF00'}}>
						            <input type="radio" value="SDP"  checked={this.state.selectedOption === 'SDP'}  
						            onChange={this.handleOptionChange}/>
						            SDP
						          </label>
						          
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                
	                                <textarea
	                                	value   ={this.state.talkValue}
	                                	onChange={this.handleTalkInfoChanged}
	                                	style   ={{
		                                            'height'         : '147px',
		                                            'backgroundColor': '#94e4a1',
		                                            'width'          : '340px'}}>
	                                </textarea>
                                </div>
                            </td>
                        </tr>
                        <tr>
	                         <td><div>
                                    <button value	="1" 
                                            type	="button" 
                                            onClick	={this.handleSendButtonOnClick}
                                            
                                            style	={{
                                            	'lineHeight': '22px',
                                                'backgroundColor': '#f5f6f7',
                                                'borderColor': '#ccd0d5',
                                                'color': '#4b4f56',
                                                'transition': '200ms cubic-bezier(.08,.52,.52,1) background-color, 200ms cubic-bezier(.08,.52,.52,1) box-shadow, 200ms cubic-bezier(.08,.52,.52,1) transform',
                                                'border': '1px solid',
                                                'borderRadius': '2px',
                                                'boxSizing': 'content-box',
                                                'fontFamily': "'Helvetica', Arial, sans-serif",
                                                'fontSize': '12px',
                                                'WebkitFontSmoothing': 'antialiased',
                                                'fontWeight': 'bold',
                                                'justifyContent': 'center',
                                                'padding': '8px',
                                                'position': 'relative',
                                                'textAlign': 'center',
                                                'textShadow': 'none',
                                                'verticalAlign': 'middle',
                                                'cursor': 'pointer',
                                                'display': 'inline-block',
                                                'textSecoration': 'none',
                                                'whiteSpace': 'nowrap',
                                                'marginLeft': '305px'
                                                }}>发送
                                                </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
//ReactDOM.render(<MyChat talkInfo={program.talkInfo} talkValue=""/>, document.getElementById('talk'));