// my-program-table-list.js
// 程序一览画面


const program = {
  title:"相关程序照会画面",
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
				   }
   				]
   ,
   detail_data: [
   {
     "程序名":"程序1",
     "做成者":"A桑",
     "做成日期":"2018/8/31",
    	"备注":"糊了"
   },
   {
     "程序名":"程序2",
     "做成者":"B桑",
     "做成日期":"2018/8/31",
    	"备注":"不好吃"
   },
   {
     "程序名":"程序3",
     "做成者":"C桑",
     "做成日期":"2018/8/31",
    	"备注":"还行吧"
   },
   {
     "程序名":"程序4",
     "做成者":"D桑",
     "做成日期":"2018/8/31",
    	"备注":"没放盐"
   }
   
   ]
};


class MyProgramTableList extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
			//TODO
	    };
	}
	 render(){
			const program = this.props.program;
			const title = program.title;
			const detail_data = program.detail_data;
			const programInfo = program.programInfo;
		    return (
		      <form >
		      <h1>{title}</h1>
		      <table>
		      	<tbody>
		      		<tr>
		      			<td>
		      				<div>
					        <MyViewInputTable
								programInfo={programInfo}
					        />
					        </div>
						</td>
					</tr>
		      		<tr>
		      			<td>
		      				<div>
					        <MyReactTable
								programInfo={program}
					        />
					        </div>
						</td>
					</tr>
				</tbody>
				</table>
		      </form>
		    );
	}
}
	
