import React, { Component } from 'react';
import { connect } from 'dva';
import { DragDropContext } from 'react-dnd';
import { Card } from 'antd'; 
import HTML5Backend from 'react-dnd-html5-backend';
import Item from './Item';
import styles from './index.less';

@DragDropContext(HTML5Backend)
class Option extends Component {
	constructor(props) {
		super(props);
	}

	moveItem(type, dragIndex, hoverIndex) {
    this.props.dispatch({
      type: 'userOption/exchangePos',
      payload: { dragIndex, hoverIndex, type }
		});
	}

	render() {
		const { enableList, disableList } = this.props.userOption;
		return (
			<div>
				<Card
					title="已启用插件列表"
					style={{ marginBottom: 20 }}
				>
					{enableList.map((item, i) => (
						<Item
							key={item.id}
							index={i}
							id={item.id}
							title={item.title}
							desc={item.desc}
							moveItem={this.moveItem.bind(this, 'enable')}
						/>
					))}
				</Card>
				<Card title="未启用插件列表">
					{disableList.map((item, i) => (
						<Item
							key={item.id}
							index={i}
							id={item.id}
							title={item.title}
							desc={item.desc}
							moveItem={this.moveItem.bind(this, 'disable')}
						/>
					))}
				</Card>
			</div>
		)
	}
}

export default connect(({ userOption, loading }) => ({ userOption, loading }))(Option);