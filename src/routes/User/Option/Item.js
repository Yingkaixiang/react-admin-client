import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import styles from './index.less';

const cardSource = {
	beginDrag(props) {
		return {
			id: props.id,
			index: props.index,
		};
	},
};

const cardTarget = {
	hover(props, monitor, component) {
    // 拖动元素的下标
    const dragIndex = monitor.getItem().index;
    // 目标的元素的下标
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }
    // 获取目标元素
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // 目标元素的高的一半
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // 获取鼠标位置
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    // 上方元素和下方元素交换
    // 当鼠标的位置超过了目标元素的一般才表示交换
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
    }
    // 下方元素和上方元素交换
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
    }
    // 传入被拖动元素和目标元素的下标
    // 用于在数组中进行位置的交互
    props.moveItem(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
	},
}

const type = 'Item';

@DropTarget(type, cardTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}))
@DragSource(type, cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))
class Item extends Component {
	render() {
		const {
			text,
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props

		return connectDragSource(
			connectDropTarget(
        <div
          className={styles.item}
          style={{ opacity: isDragging ? 0 : 1 }}
        >{text}</div>),
		);
	}
}

export default Item;