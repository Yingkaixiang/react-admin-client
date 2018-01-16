import React, { Component } from 'react';
import { connect } from 'dva';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Item from './Item';
import styles from './index.less';

@DragDropContext(HTML5Backend)
class Option extends Component {
	constructor(props) {
		super(props);
		this.moveItem = this.moveItem.bind(this);
	}

	moveItem(dragIndex, hoverIndex) {
    this.props.dispatch({
      type: 'userOption/exchangePos',
      payload: { dragIndex, hoverIndex }
    });
	}

	render() {
		return (
			<div className={styles.list}>
				{this.props.disableList.map((item, i) => (
					<Item
						key={item.id}
						index={i}
						id={item.id}
						text={item.title}
						moveItem={this.moveItem}
					/>
				))}
			</div>
		)
	}
}

export default connect(data => data.userOption)(Option);