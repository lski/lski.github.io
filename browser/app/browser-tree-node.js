"use strict";var React=React,BrowserTreeNode=React.createClass({displayName:"BrowserTreeNode",getDefaultProps:function(){return{isLast:!0}},propTypes:{folder:React.PropTypes.object.isRequired,isLast:React.PropTypes.bool,selectedFolder:React.PropTypes.string.isRequired,onSelectedChanged:React.PropTypes.func.isRequired},isSelected:function(){return this.props.folder.path==this.props.selectedFolder},onClick:function(){this.isSelected()||this.props.onSelectedChanged(this.props.folder)},render:function(){var e=[],t=this.props.folder.directories;if(t&&t.length)for(var r=0,s=t.length;s>r;r++){var o=t[r];e.push(React.createElement(BrowserTreeNode,{key:o.id,folder:o,isLast:r==s-1,selectedFolder:this.props.selectedFolder,onSelectedChanged:this.props.onSelectedChanged}))}var a=this.props.isLast?" tree-item-last":"",i=this.isSelected()?" tree-item-selected":"",c=t.length>0?" tree-item-opened":"";return React.createElement("li",{className:"tree-item"+a+i+c},React.createElement("i",{className:"tree-icon tree-item-path-icon"}),React.createElement("a",{className:"tree-item-label",onClick:this.onClick},React.createElement("i",{className:"tree-icon tree-item-icon-open-folder"}),this.props.folder.name),React.createElement("ul",{className:"tree-container"},e))}});
//# sourceMappingURL=../maps/app/browser-tree-node.js.map
