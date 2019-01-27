
const program = {
  programInfo: [
                   {
                     "key":"詞条A",
                     "value":"荷包蛋",
                     "edit":true
                   },
                   {
                     "key":"詞条B",
                     "value":"",
                     "edit":true
                   },
                   {
                     "key":"処理",
                     "value":"烹制",
                     "edit":true
                   },
                   {
                     "key":"程序名",
                     "value":"烹制荷包蛋",
                     "edit":true
                   },    
                   {
                     "key":"做成者",
                     "value":"A桑",
                     "edit":true
                   },
                   {
                     "key":"做成日期",
                     "value":"2018/8/31",
                     "edit":true
                   },                   
                   {
                     "key":"备注",
                     "value":"",
                     "edit":true
                   }
                   ]
   ,
   programbody:"炒锅倒油，\n大火将油烧热\n拿住鸡蛋，\n将鸡蛋的中间在碗沿、灶台沿、或者锅沿，\n用力磕一下。 ...\n拿起磕出了裂缝的鸡蛋，\n垂直在油锅上方，\n然后尽量离锅底越近越好，\n双手从裂缝处将鸡蛋掰开，\n让蛋清裹着蛋黄落入油锅中\n如果怕迸溅出油，\n可以趁着油还凉时就将鸡蛋磕入，\n而且离锅底越近越不容易溅油。"
};

class MyDetailInfoInput extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
          detailInfo: null, //this.props.detailInfo,
          editFlg: false 
        };
        
        this.handleViewInputTableInfoChanged = this.handleViewInputTableInfoChanged.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.handleCancleClick = this.handleCancleClick.bind(this);
    }
    
    handleViewInputTableInfoChanged(changedDetailInfo) {
        
        this.setState({ detailInfo: changedDetailInfo,  editFlg: 1 });
      
    }
  
    // detailInfo
    //       |----------detail
    //       |----------mode
    handleOkClick(detail) {

        var detailInfo;
        var program;
        
        detailInfo.detail = detail;
        
        // 将模式设置为编辑mode（0=view 1=edit）
        detailInfo.mode = 1; //
        
        program.detailInfo = detailInfo;
        
        // 向上传递
        this.props.onClick(program);
    }
    
    // 式样还不明确
    handleCancleClick(e) {
        // 写式样
        this.setState({ detailInfo:null, //this.props.detailInfo,  
        				editFlg: 1 });
        
        // 向上传递
        this.props.onClick(program);
    }
    
    render(){
    
        const detailInfo = this.props.detailInfo;
        const editFlg = this.props.editFlg;
        var mode = detailInfo.mode==="1" ? "编辑" : "照会";
        const title = "明细"+mode+"画面";
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
                              <h1>{title}</h1>
                              </div>
                              <div >
                                <MyViewInputTable
                                    detailInfo={detailInfo}
                                    editFlg = {editFlg} //0:view 1:edit
                                    onMyViewInputTableChanged={this.handleViewInputTableInfoChanged}
                                />
                            </div>
                              <div style={{'textAlign':'right'}}>
                                <button type="button" 
                                        name="okButton" 
                                        class="bg s_btn"
                                        onCLick={this.handleOkOnlick}
                                        >
                                    Ok
                                </button>
                                <button type="button" 
                                        name="cancleButton" 
                                        class="bg s_btn"
                                        onCLick={this.handleCancleOnlick}
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

//ReactDOM.render(<MyDetailInfoInput detailInfo={programInfo} editFlg =0 />, document.getElementById('app2'));