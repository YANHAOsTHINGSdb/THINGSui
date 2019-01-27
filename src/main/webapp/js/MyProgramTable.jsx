// my-program-table.js
// 相关程序照会画面


const program = {
  title:"相关程序照会画面",
  detail_data: [
   {
     "程序種別":"追加",
     "有無":"有"
   },
   {
	 "程序種別":"削除",
	 "有無":"有"
   },
   {0
	 "程序種別":"更新",
	 "有無":"有"
   }
   ]
};


class MyProgramTable extends React.Component {

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
	    return (			
	      <form >
	      <h1>{title}</h1>
	      
	      
	      <table>
	      	<tbody>
	      		<tr>
	      			<td>
	      				<div>
				        <MyReactTable
							programInfo={programInfo}
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