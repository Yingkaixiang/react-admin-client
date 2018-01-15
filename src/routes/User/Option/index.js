import React, { Component } from 'react';

function Option() {
  return (<div>123</div>)
}

export default Option;
// import { connect } from 'dva';
// import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
// import styles from './index.less';

// function collectTaget(connect, monitor) {
// 	return {
// 		connectDropTarget: connect.dropTarget()
// 	};


// class Item {
//   render() {
//     return (<div className={styles.item}>132</div>)
//   }
// }

// const MyItem = DropTarget('item', {}, collectTaget)(Item);

// class Option extends Component {
//   constructor(props) {
//     super(props);
//     this.a = 1;
//   }

//   render() {
//    return (
//      <div>123</div>
//    ) 
//   }
// }


// export default connect(data => data.userOption)(DragDropContext(HTML5Backend)(Option));
