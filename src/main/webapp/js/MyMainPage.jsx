
const program = {

   talkInfo: [
                   {
                     "name":"AI机器人",
                     "talkValue":"What can I do for U?",
                     "userTalk":false
                   }                  
    ]
};

class MyMainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             program: this.props.program,
             talkInfo:this.props.program.talkInfo
             
        };
        
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick2(programOut){
        this.setState({ program: programOut });
    }
    
    handleClick(programOut){
        programOut.talkInfo = this.state.talkInfo;
        this.setState({ program: programOut });
    }
    
    render(){
        var program = this.state.program;
        
        if(program.ajaxCallInfo){var ajaxCallInfo = program.ajaxCallInfo;console.log(ajaxCallInfo);}
        if(program.programInfo){var programInfo = program.programInfo;console.log(programInfo);}
        if(program.tableInfo){var tableInfo = program.tableInfo;console.log(tableInfo);}
        if(program.talkInfo){var talkInfo = program.talkInfo;console.log(talkInfo);}
        if(program.goJsDataInfo){var goJsDataInfo = program.goJsDataInfo;console.log(goJsDataInfo);}
        if(program.detailInfo){var detailInfo = program.detailInfo;console.log(detailInfo);}
        if(program.conditionInfo){var conditionInfo = program.conditionInfo;console.log(conditionInfo);}

        
        var rows1;
        var rows2;
        var rows3;
          if (ajaxCallInfo) {
          
          	rows1 = <MyAjaxCall 
                      ajaxCallInfo={ajaxCallInfo} 
                      onClick={this.handleClick} 
                      />;
          }
          if (tableInfo) {
            rows1 = <MyReactTable 
                      tableInfo={tableInfo} 
                      onClick={this.handleClick} 
                      />;
          }
          if (programInfo) {
            rows1 = <MyProgramEdit 
                        programInfo={programInfo} 
                        onClick={this.handleClick} 
                        />;
          }
          if (goJsDataInfo) {
            rows2 = <MyGoJs goJsDataInfo={goJsDataInfo} />;
          }
          if (detailInfo) {
            rows1 = <MyDetailInfoInput 
                        onClick={this.handleClick}
                        detailInfo={detailInfo} 
                        editFlg='0' // 将模式设置为编辑mode（'0'=view '1'=edit）
                        />;
          }
          if (conditionInfo) {
            rows2 = <MyConditionInfoInput 
                        onClick={this.handleClick}
                        conditionInfo={conditionInfo} 
                        editFlg='1' // 将模式设置为编辑mode（'0'=view '1'=edit）
                        />;
          }
          
        return (
                <table>
                	<tbody>
                    <tr>
                        <td>
                            <div class="rh" data-ifc="[[[&quot;5,5,5,5&quot;,null,0,2]]]">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td >
                                                <div style={{"backgroundColor": "#dedada",
                                                            "display": "inline-block",
                                                            "height": "580px",
                                                            "lineHeight": "0",
                                                            "overflow": "hidden",
                                                        	"padding": "3px"
                                                            }}>

                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <MyChat 
                                                                        talkInfo={talkInfo} 
                                                                        onClick={this.handleClick2} 
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <div id="app2" >{rows1}</div>
                                                                </td>
                                                                <td>
                                                                    <div id="app3" >{rows2}</div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
        );
    }
}

ReactDOM.render(<MyMainPage program={program} />, document.getElementById('app'));