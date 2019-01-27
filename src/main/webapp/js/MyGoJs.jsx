
const goObj = go.GraphObject.make;
  
class MyGoJs extends React.Component {

	constructor(props) {
	    super(props);
	    
	    this.renderCanvas = this.renderCanvas.bind (this);
	    
	    this.state = {
	    	myModel: null, myDiagram: null
	    };
	}
	
  renderCanvas () {
	  
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
	    
        /*
                var model = make(go.TreeModel);
                model.nodeDataArray = eval(json);
                myDiagram.model = model;
        */
        
     
	 //let model = go.Model.fromJson(nodeDataArray2);
	 //let model = new go.Model(nodeDataArray2);//Uncaught Error: Model.nodeDataArray value is not an instance of Array or NodeList or HTMLCollection:
	 //let model;
	 //let model = new go.Model(nodeDataArray2);
	 let model = goObj(go.GraphLinksModel);
	 
	 //const diagramDiv = this.relationsDiv.nativeElement;
	 
	 let diagram =
		 //goObj(go.Diagram, this.refs.goJsDiv,  // must name or refer to the DIV HTML element
		 goObj(go.Diagram, this.refs.goJsDiv,
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
		        
	 //diagram.div = null;

	 //diagram.model = go.Model.fromJson(nodeDataArray2);
	 //diagram.model = model;
	 
	    // when the document is modified, add a "*" to the title and enable the "Save" button
	 diagram.addDiagramListener("Modified", function(e) {
	      var button = document.getElementById("SaveButton");
	      if (button) button.disabled = !myDiagram.isModified;
	      var idx = document.title.indexOf("*");
	      if (diagram.isModified) {
	        if (idx < 0) document.title += "*";
	      } else {
	        if (idx >= 0) document.title = document.title.substr(0, idx);
	      }
	    });
	 
	    // define the Node template
	 diagram.nodeTemplate =
		 goObj(go.Node, "Auto",
	        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
	        // define the node's outer shape, which will surround the TextBlock
	        goObj(go.Shape, "RoundedRectangle",
	          {
	            parameter1: 20,  // the corner has a large radius
	            fill: goObj(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }),
	            stroke: null,
	            portId: "",  // this Shape is the Node's port, not the whole Node
	            fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
	            toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
	            cursor: "pointer"
	          }),
	          goObj(go.TextBlock,
	          {
	            font: "bold 11pt helvetica, bold arial, sans-serif",
	            editable: true  // editing the text automatically updates the model data
	          },
	          new go.Binding("text").makeTwoWay())
	      );
	 
	    // unlike the normal selection Adornment, this one includes a Button
	diagram.nodeTemplate.selectionAdornmentTemplate =
		goObj(go.Adornment, "Spot",
				goObj(go.Panel, "Auto",
						goObj(go.Shape, { fill: null, stroke: "blue", strokeWidth: 2 }),
						goObj(go.Placeholder)  // a Placeholder sizes itself to the selected Node
	        ),
	        // the button to create a "next" node, at the top-right corner
	        goObj("Button",
	          {
	            alignment: go.Spot.TopRight,
	            click: addNodeAndLink  // this function is defined below
	          },
	          goObj(go.Shape, "PlusLine", { width: 6, height: 6 })
	        ) // end button
	      ); // end Adornment
	
    // replace the default Link template in the linkTemplateMap
    diagram.linkTemplate =
    	goObj(go.Link,  // the whole link panel
        {
          curve: go.Link.Bezier, adjusting: go.Link.Stretch,
          reshapable: true, relinkableFrom: true, relinkableTo: true,
          toShortLength: 3
        },
        new go.Binding("points").makeTwoWay(),
        new go.Binding("curviness"),
        goObj(go.Shape,  // the link shape
          { strokeWidth: 1.5 }),
          goObj(go.Shape,  // the arrowhead
          { toArrow: "standard", stroke: null }),
          goObj(go.Panel, "Auto",
        		  goObj(go.Shape,  // the label background, which becomes transparent around the edges
            {
              fill: goObj(go.Brush, "Radial",
                      { 0: "rgb(255, 255, 255)", 0.3: "rgb(255, 255, 255)", 1: "rgba(255, 255, 255, 0)" }),
              stroke: null
            }),
            goObj(go.TextBlock, "transition",  // the label text
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
    
    diagram.model = goObj(go.GraphLinksModel, this.props.goJsDataInfo);
    
    this.setState({myModel: model, myDiagram: diagram},
      () => {
        model = this.props.data;
        //model.nodeDataArray = this.props.data.nodeDataArray;
        //diagram.model = new goObj(go.GraphLinksModel);
        //diagram.model = model;
        //diagram.model = new go.GraphLinksModel(model.nodeDataArray, model.linkDataArray,model.nodeKeyProperty);
        //diagram.model = new go.Model(model.nodeDataArray, model.linkDataArray,model.nodeKeyProperty);
        //diagram.model.nodeKeyProperty = model.nodeKeyProperty;
        
        this.setState({myModel: model, myDiagram: diagram});
      }
    );
  }
  componentDidMount () {
	    this.renderCanvas ();
	  }

  componentWillUpdate (prevProps) {
	    if (this.props.data !== prevProps.data) {
	      //console.log ('Updating');
	      const model = this.state.myModel;
	      const diagram = this.state.myDiagram;
	      
	      //model.nodeDataArray = this.props.data.nodeDataArray;
	      //model.linkDataArray = this.props.data.linkDataArray;
	     // model = this.props.data;
	      diagram.model = model;
	     //diagram.model = new go.GraphLinksModel(model.nodeDataArray, model.linkDataArray);
	     //diagram.model = this.props.data;
	     
	      this.setState({myModel: model, myDiagram: diagram});
	    }
	  }

  render () {
	    return <div ref="goJsDiv" style={{'width': '500px', 'height': '500px'}}></div>;
	}
  
}
  MyGoJs.propTypes = { data: PropTypes.string.isRequired };
  MyGoJs.defaultProps = { data: '[]' };
  
//ReactDOM.render(<MyGoJs goJsDataInfo={nodeDataArray2} />, document.getElementById('app_gojs'));