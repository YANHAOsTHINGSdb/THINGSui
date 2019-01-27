
class MyViewEditRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            key: null, 			//this.props.rowkey,
            value: null,		//this.props.value,
            placeholder: null	//this.props.placeholder
        };
        
        this.handleInfoChanged = this.handleInfoChanged.bind(this);
    }
    
    handleInfoChanged(e) {
        
        var changedInfo={
        	key : this.props.rowkey,
        	value : e.target.value
        };
        // 写式样
        this.props.onValueChanged(changedInfo);
        
    }
    render() {
        const key = this.props.rowkey;
        const value = this.props.rowvalue;
        const placeholder = "写点关于"+key+"的信息吧";
        return (                    
        <tr >                
            <td style={{'line-height': '10'}}>
                { key }        
            </td>            
            <td>            

                <input
                  type = "text"
                  value ={ value }
                  placeholder = {placeholder}
                  style={{'backgroundColor': '#94e4a1'}}
                  onChange={this.handleInfoChanged}
                />
            </td>
        </tr>
        );
    }
}
class MyViewRow extends React.Component {

      render() {
      
          const key = this.props.rowkey;
          const value = this.props.rowvalue;
          return (
              <tr>
                  <td >
                      <div >
                          {key}
                      </div>
                  </td>
                  <td>
                      {value}
                  </td>
              </tr>
          );
    }
}

class MyViewInputTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detailInfo: null,	//this.props.detailInfo,
            editFlg : null		//this.props.editFlg
        };
        
        this.handleDetailInfoChanged = this.handleDetailInfoChanged.bind(this);
    }
    
    handleDetailInfoChanged(changedInfo) {
    
        this.props.detailInfo.forEach((info) => {
            if(info.key === changedInfo.key){
                info.value = changedInfo.value;
            }
        });
        
        
        this.props.onMyViewInputTableChanged(this.props.detailInfo);
    }
    
    render() {
        const rows = [];
        const detail = this.props.detailInfo;
        const mode = this.props.detailInfo.mode;
		if(! detail){
			return(	
			 <div style={{'width': '300px', 'height': '80px','verticalAlign': 'middle','marginLeft': '40px','marginTop': '50px'}}>
					*****暂时没有信息*****
            </div>
			)
		}
		
		
		// 将模式设置为编辑mode（0=view 1=edit）
		if(mode === "1"){
            Object.keys(detail).forEach(function (key) {
            	// 
                rows.push(
                    <MyViewEditRow
                            rowkey={detail[key].key}
                            rowvalue={detail[key].value}
                            key={key}
                            onValueChanged={() => this.handleDetailInfoChanged}
                    />);
            });
		}else{
		
        	Object.keys(detail).forEach(function (key) {

	            if(detail[key].edit){
	                rows.push(
	                
	                    <MyViewEditRow
                            	rowkey={detail[key].key}
                            	rowvalue={detail[key].value}
	                            key={key}
	                            onValueChanged={() =>this.handleDetailInfoChanged}
	                    />);
	                
	            }else{
	                rows.push(
	                
	                    <MyViewRow
                            	rowkey={detail[key].key}
                            	rowvalue={detail[key].value}
	                            key={key}
	                    />);
	                
	            }

       		});
        }
        return (
            <table style={{'width': '200px', 'height': '200px'}}>        
              <tbody>{rows}</tbody>
            </table>
        );        
    }
}