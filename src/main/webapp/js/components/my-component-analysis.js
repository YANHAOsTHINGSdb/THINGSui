  const jsondata = {
		  "nodes":[
			  { "key":"条件", "color":"lightblue" },
			  { "key":"Java", "color":"orange" },
			  { "key":"日本语", "color":"orange" },
			  { "key":"技术者", "color":"pink" },
			  { "key":"姓名", "color":"lightgreen" },
			  { "key":"性别", "color":"lightgreen" },
			  { "key":"会社", "color":"lightgreen" }
			    ],
			    "links":[
			  { "from":"条件", "to":"Java" },
			  { "from":"条件", "to":"日本语" },
			  { "from":"Java", "to":"技术者" },
			  { "from":"日本语", "to":"技术者" },
			  { "from":"技术者", "to":"姓名" },
			  { "from":"技术者", "to":"性别" },
			  { "from":"技术者", "to":"会社" }
			    ]
			  };
  const jsondata2 = { "nodeKeyProperty": "id",
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
/*  function search_analysis() {
//	    if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
	    var $$ = go.GraphObject.make;  // for conciseness in defining templates, avoid $ due to jQuery

	    myDiagram = $$(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
	                   {
	                     initialContentAlignment: go.Spot.Center,  // center the content
	                     "undoManager.isEnabled": true  // enable undo & redo
	                   });

	    // define a simple Node template
	    myDiagram.nodeTemplate =
	      $$(go.Node, "Auto",  // the Shape will go around the TextBlock
	        $$(go.Shape, "RoundedRectangle", { strokeWidth: 0},
	          // Shape.fill is bound to Node.data.color
	          new go.Binding("fill", "color")),
	        $$(go.TextBlock,
	          { margin: 8 },  // some room around the text
	          // TextBlock.text is bound to Node.data.key
	          new go.Binding("text", "key"))
	      );

	    // but use the default Link template, by not setting Diagram.linkTemplate

	    // The previous initialization is the same as the minimal.html sample.
	    // Here we request JSON-format text data from the server, in this case from a static file.
	    $.getJSON("minimal.json", load)
	    .success(function(json) {
	        console.log("成功");
	    })
	    .error(function(jqXHR, textStatus, errorThrown) {
	        console.log("エラー：" + textStatus);
	        console.log("テキスト：" + jqXHR.responseText);
	    })
	    .complete(function() {
	        console.log("完了");
	    });
	    .done(function() { alert('getJSON request succeeded!'); })
	    .fail(function(jqXHR, textStatus, errorThrown) { 
	    	//alert('getJSON request failed! ' + textStatus);
	    	load(jsondata);
	    	})
	    .always(function() { 
	    	//alert('getJSON request ended!'); 
	    	});
  }*/
  function search_analysis(name) {
	    //if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
	    var $ = go.GraphObject.make;  // for conciseness in defining templates
	    
	    myDiagram =
	      $(go.Diagram, name,  // must name or refer to the DIV HTML element
	        {
	          // start everything in the middle of the viewport
	          initialContentAlignment: go.Spot.Center,
	          // have mouse wheel events zoom in and out instead of scroll up and down
	          "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
	          // support double-click in background creating a new node
	          "clickCreatingTool.archetypeNodeData": { text: "new node" },
	          // enable undo & redo
	          "undoManager.isEnabled": true
	        });

	    // when the document is modified, add a "*" to the title and enable the "Save" button
	    myDiagram.addDiagramListener("Modified", function(e) {
	      var button = document.getElementById("SaveButton");
	      if (button) button.disabled = !myDiagram.isModified;
	      var idx = document.title.indexOf("*");
	      if (myDiagram.isModified) {
	        if (idx < 0) document.title += "*";
	      } else {
	        if (idx >= 0) document.title = document.title.substr(0, idx);
	      }
	    });

	    // define the Node template
	    myDiagram.nodeTemplate =
	      $(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        // define the node's outer shape, which will surround the TextBlock
	        $(go.Shape, "RoundedRectangle",
	          {
	            parameter1: 20,  // the corner has a large radius
	            fill: $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }),
	            stroke: null,
	            portId: "",  // this Shape is the Node's port, not the whole Node
	            fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
	            toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
	            cursor: "pointer"
	          }),
	        $(go.TextBlock,
	          {
	            font: "bold 11pt helvetica, bold arial, sans-serif",
	            editable: true  // editing the text automatically updates the model data
	          },
	          new go.Binding("text").makeTwoWay())
	      );

	    // unlike the normal selection Adornment, this one includes a Button
	    myDiagram.nodeTemplate.selectionAdornmentTemplate =
	      $(go.Adornment, "Spot",
	        $(go.Panel, "Auto",
	          $(go.Shape, { fill: null, stroke: "blue", strokeWidth: 2 }),
	          $(go.Placeholder)  // a Placeholder sizes itself to the selected Node
	        ),
	        // the button to create a "next" node, at the top-right corner
	        $("Button",
	          {
	            alignment: go.Spot.TopRight,
	            click: addNodeAndLink  // this function is defined below
	          },
	          $(go.Shape, "PlusLine", { width: 6, height: 6 })
	        ) // end button
	      ); // end Adornment

	    // clicking the button inserts a new node to the right of the selected node,
	    // and adds a link to that new node
	    function addNodeAndLink(e, obj) {
	      var adornment = obj.part;
	      var diagram = e.diagram;
	      diagram.startTransaction("Add State");

	      // get the node data for which the user clicked the button
	      var fromNode = adornment.adornedPart;
	      var fromData = fromNode.data;
	      // create a new "State" data object, positioned off to the right of the adorned Node
	      var toData = { text: "new" };
	      var p = fromNode.location.copy();
	      p.x += 200;
	      toData.loc = go.Point.stringify(p);  // the "loc" property is a string, not a Point object
	      // add the new node data to the model
	      var model = diagram.model;
	      model.addNodeData(toData);

	      // create a link data from the old node data to the new node data
	      var linkdata = {
	        from: model.getKeyForNodeData(fromData),  // or just: fromData.id
	        to: model.getKeyForNodeData(toData),
	        text: "transition"
	      };
	      // and add the link data to the model
	      model.addLinkData(linkdata);

	      // select the new Node
	      var newnode = diagram.findNodeForData(toData);
	      diagram.select(newnode);

	      diagram.commitTransaction("Add State");

	      // if the new node is off-screen, scroll the diagram to show the new node
	      diagram.scrollToRect(newnode.actualBounds);
	    }

	    // replace the default Link template in the linkTemplateMap
	    myDiagram.linkTemplate =
	      $(go.Link,  // the whole link panel
	        {
	          curve: go.Link.Bezier, adjusting: go.Link.Stretch,
	          reshapable: true, relinkableFrom: true, relinkableTo: true,
	          toShortLength: 3
	        },
	        new go.Binding("points").makeTwoWay(),
	        new go.Binding("curviness"),
	        $(go.Shape,  // the link shape
	          { strokeWidth: 1.5 }),
	        $(go.Shape,  // the arrowhead
	          { toArrow: "standard", stroke: null }),
	        $(go.Panel, "Auto",
	          $(go.Shape,  // the label background, which becomes transparent around the edges
	            {
	              fill: $(go.Brush, "Radial",
	                      { 0: "rgb(240, 240, 240)", 0.3: "rgb(240, 240, 240)", 1: "rgba(240, 240, 240, 0)" }),
	              stroke: null
	            }),
	          $(go.TextBlock, "transition",  // the label text
	            {
	              textAlign: "center",
	              font: "9pt helvetica, arial, sans-serif",
	              margin: 4,
	              editable: true  // enable in-place editing
	            },
	            // editing the text automatically updates the model data
	            new go.Binding("text").makeTwoWay())
	        )
	      );

	    // read in the JSON data from the "mySavedModel" element
	    this.setState({myModel: model, myDiagram: diagram},
	    	      () => {
	    	        model.nodeDataArray = this.props.data;
	    	        diagram.model = model;
	    	        this.setState({myModel: model, myDiagram: diagram});
	    	      }
	    	    );
	  }

	  // Show the diagram's model in JSON format
	  function save() {
	    //document.getElementById("mySavedModel").value = myDiagram.model.toJson();
	  }
	  function load() {

	    //myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
	    myDiagram.model = go.Model.fromJson(jsondata2);	    
	  }
	  
//  function load(jsondata) {
//    // create the model from the data in the JavaScript object parsed from JSON text
//    myDiagram.model = new go.GraphLinksModel(jsondata["nodes"], jsondata["links"]);
//  }
//  
  $(function() {
	  
	  $("#search_btn").click(function() {

		  $('#app').css({'border': 'solid 1px black', 'width': '500px', 'height': '400px'});
		  search_analysis('app');
		  
	  });
  });

