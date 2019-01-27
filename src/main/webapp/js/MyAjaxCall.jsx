class MyAjaxCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			error: null,
			isLoaded: false,
			items: [],
			tableInfo:null,
    		ajaxCallInfo:null,
    		talkInfo:null,    		
    		nodeDataArray:null,
    		detailInfo:null,
    		conditionInfo:null,
    		programInfo:null
    };
    
    // this is important so that the getNewData method will have the correct "this" context on click
    this.getNewData = this.getNewData.bind(this);
  }

	componentDidMount1() {
        $.ajax({
			headers: {          
				Accept: 'application/json; charset=utf-8',
				'Content-Type': 'application/json; charset=utf-8'
			},
			url:this.props.ajaxCallInfo.url, 		// 通信先のURL
			type:'POST',							// 使用するHTTPメソッド (GET/ POST)
			data:JSON.stringify(this.props.ajaxCallInfo.param), 	// 送信するデータ
			dataType:'json', 						// 応答のデータの種類 
													// (xml/html/script/json/jsonp/text)
			//timeout:1000, 						// 通信のタイムアウトの設定(ミリ秒)
        
			// 2. doneは、通信に成功した時に実行される
			//  引数のdata1は、通信で取得したデータ
			//  引数のtextStatusは、通信結果のステータス
			//  引数のjqXHRは、XMLHttpRequestオブジェクト
		        
        }) // call ajax
        .done(function(data1,textStatus,jqXHR) {
				// $("#out1").html(jqXHR.status); 	//jqXHR.statusを表示
				// $("#out2").html(textStatus); 	//textStatusを表示
				
				// 3. キーを指定して値を表示 
				// $("#out4").html(data1["form"]["cs1"]);

				// 4. オブジェクトをJSON形式の文字列に変換
				var data2 = JSON.stringify(data1);
				console.log(data2); //コンソールにJSON形式で表示される

				// 5.JSON形式の文字列をオブジェクトにし、
				// キーを指定して値(httpbin.org)を表示
				var data3 = JSON.parse(data2);
				// $("#out5").html(data3["headers"]["Host"]);

		// 6. failは、通信に失敗した時に実行される
		}).fail(function(jqXHR, textStatus, errorThrown ) {
				// $("#out1").html(jqXHR.status); //jqXHR.statusを表示
				// $("#out2").html(textStatus); //textStatusを表示
				// $("#out3").html(errorThrown); //errorThrownを表示
				console.log(errorThrown); //コンソールにJSON形式で表示される
				
		// 7. alwaysは、成功/失敗に関わらず実行される
		}).always(function(){
				// $("#out6").html("complete"); //表示3
				console.log("complete"); //コンソールにJSON形式で表示される
		});		

    }
    /**
    	组件初始化加载
    */
	componentDidMount() {

		this.getNewData();
    }
    
    /**    
	    更新道具或州的更改可能导致更新。重新渲染组件时，将按以下顺序调用这些方法：
		
		static getDerivedStateFromProps()
		shouldComponentUpdate()
		render()
		getSnapshotBeforeUpdate()
		componentDidUpdate()
	*/

    componentDidUpdate(){
		
		if (! this.state.tableInfo 
			&& ! this.state.conditionInfo 
			&& ! this.state.nodeDataArray 
			&& ! this.state.detailInfo 
			&& ! this.state.programInfo){
			// 对象值为空时，才Ajax
			this.getNewData();
		}

    	var program={
    		ajaxCallInfo 	: this.state.ajaxCallInfo,
    		talkInfo 		: this.state.talkInfo,
    		tableInfo 		: this.state.tableInfo,
    		nodeDataArray 	: this.state.nodeDataArray,
    		detailInfo 		: this.state.detailInfo,
    		conditionInfo 	: this.state.conditionInfo,
    		programInfo 	: this.state.programInfo
    	};

    	// 向上传递数据
        this.props.onClick(program);
        
    }

    getNewData(e) {
        //e.preventDefault();

        // any logic to set up url or params for the ajax call can be done here
        
	    $.ajax({
			headers: {          
				Accept: 'application/json; charset=utf-8',
				'Content-Type': 'application/json; charset=utf-8'
			},
			url:this.props.ajaxCallInfo.url, 		// 通信先のURL
			type:'POST',							// 使用するHTTPメソッド (GET/ POST)
			data:JSON.stringify(this.props.ajaxCallInfo.param), 	// 送信するデータ
			dataType:'json', 						// 応答のデータの種類 
	      success(res) {
	        // ここのthisの話
	        //this.setState({ res });
				var data2 = JSON.stringify(res);
				console.log(data2); 				//コンソールにJSON形式で表示される
				
	      },
	      error(error) {
	        // ここのthisの話
	        //this.setState({ error });
	        console.log(error); //コンソールにJSON形式で表示される
	      },
	    }).done(data => {
            
            // 返回结果判断
            if (data && data[0] && data[0].key) {
    			// 如果有Key，则为检索画面
            	this.setState({conditionInfo: data});
			
			}else{
            	// 否则，为一览画面
            	this.setState({tableInfo: data});
            }
            
            /*
            $.each(array, function(index, value) {
     			console.log(index + ': ' + value);
 			})
			*/
            
        });
	    

    }

  componentDidMount2() {
  	const ajaxCallInfo = this.props.ajaxCallInfo;
    fetch(ajaxCallInfo.url, 
    		{
			  method: 'POST',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			  },
		      mode: 'cors',
		      credentials: 'include',
//-------------------------------
//      body: JSON.stringify({
//        name: this.state.name,
//        mail: this.state.mail,
//      })
//-------------------------------
			  body: ajaxCallInfo.param
			}
    ).then(res => res.json()
    ).then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
	)
  }

  render() {
  
  	//this.getNewData();
  	
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

    }
  }
}