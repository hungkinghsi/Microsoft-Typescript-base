import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Input, Button, Table, Modal } from 'antd';
import logo from './logo.png'
import styles from './App.scss';

interface TodoItem {
  key: number,
  content: string,
  time: number,
  canEdit: boolean,
}

function App() {
  const [list, setList] = useState<Array<TodoItem>>([]);
  const addEle = useRef(null);
  const searchEle = useRef(null);
  const modalEle = useRef(null);
  const [sorted, setSorted] = useState<boolean>(false);
  const [timed, setTimed] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectRow, setSelectRow] = useState<TodoItem>();

  const columns = [
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      align: 'center' as 'center'
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      align: 'center' as 'center',
      render: (text: number, record: any) => (
        <span>{new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}</span>
      )
    },
    {
      width: "30ch",
      title: '操作',
      key: 'action',
      align: 'center' as 'center',
      render: (text: string, record: any) => {
        return (
          <span>
            <Button type="link" onClick={(e: any) => handleEditClick(record, e)
            }>编辑</Button>
            <Button type="link" onClick={(e: any) => handleDeleteClick(record, e)
            }>删除</Button>
          </span>
        )
      },
    },
  ]

  useEffect(() => {
    let _list: any = localStorage.getItem("ilist");
    if (_list) {
      _list = JSON.parse(_list);
      setList(_list);
    }
  }, []);

  const handleAddClick = (e: any) => {
    let _list: Array<TodoItem> = list;
    let ipt: any = addEle.current;
    let item: TodoItem = {
      key: list.length + 1,
      content: ipt.state.value,
      time: new Date().getTime(),
      canEdit: true,
    }
    ipt.state.value = "";
    _list.push(item);
    setData("ilist", _list);
    setList([..._list]);
  }

  const handleSearchClick = (e: any) => {
    let _list: Array<TodoItem> = getData("ilist");
    let ipt: any = searchEle.current;
    let filterList: Array<TodoItem> = [];
    _list.forEach((item: TodoItem) => {
      if (item.content.indexOf(ipt.state.value) > -1) {
        filterList.push(item);
      }
    });
    ipt.state.value = "";
    setList(filterList);
  }

  const handleSortClick = () => {
    let _list: Array<TodoItem> = list;
    _list.sort((a: TodoItem, b: TodoItem) => {
      if (!sorted) return a.content.localeCompare(b.content);
      else return b.content.localeCompare(a.content);
    });
    setSorted(!sorted);
    setList([..._list]);
  }
  const handleTimeSortClick = () => {
    let _list: Array<TodoItem> = list;
    _list.sort((a: TodoItem, b: TodoItem) => {
      if (!timed) return b.time - a.time;
      else return a.time - b.time;
    });
    setTimed(!timed);
    setList([..._list]);
  }

  const handleEditClick = (_item: TodoItem, e: any) => {
    setSelectRow({ ..._item });
    showModal(_item);
  }

  const showModal = (item: TodoItem) => {
    setVisible(true);
    setTimeout(() => {
      let ipt: any = modalEle && modalEle.current;
      ipt.state.value = item.content;
    }, 300);
  };

  const handleOk = () => {
    let _list: Array<TodoItem> = list;
    let ipt: any = modalEle && modalEle.current;
    _list.map((item: TodoItem) => {
      if (item.key === (selectRow && selectRow.key)) item.content = ipt.state.value;
      return item;
    })
    setList([..._list]);
    setData("ilist", _list);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDeleteClick = (_item: TodoItem, e: any) => {
    let _list: Array<TodoItem> = list;
    _list = _list.filter((item: TodoItem) => {
      if (item.key === _item.key) {
        return false;
      }
      return item;
    })
    setData("ilist", _list);
    setList([..._list]);
  }

  const setData = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
  const getData = (key: string): any => {
    let value: any = localStorage.getItem(key);
    if (value) value = JSON.parse(value);
    else value = null;
    return value;
  }

  return (
    <div className={styles.App}>
      <a href="https://blog.indeex.club"><img src={logo} alt="" className={styles.logo} /></a>
      <Row className={styles.btns}>
        <Col span={11}>
          {/* 增加 */}
          <Input placeholder="content" className={styles.ipt} ref={addEle} />
          <Button type="primary" className={styles.btn} onClick={handleAddClick}>add</Button>
        </Col>
        <Col span={11} offset={2}>
          {/* 搜索 */}
          <Input placeholder="keyword" className={styles.ipt} ref={searchEle} />
          <Button type="primary" className={styles.btn} onClick={handleSearchClick}>search</Button>
        </Col>
      </Row>
      <Row className={styles.sort}>
        {/* 排序 */}
        <Col span={4}><Button type="primary" onClick={handleSortClick}>字母排序</Button></Col>
        <Col span={4} offset={1}><Button type="primary" onClick={handleTimeSortClick}>时间排序</Button></Col>
      </Row>
      <Row>
        <Table columns={columns} dataSource={list} pagination={false} className={styles.tb} />
      </Row>
{/* 修改 */}
      <Modal
        title="编辑"
        visible={visible}
        okText="确认"
        cancelText="取消"
        destroyOnClose={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="" className={styles.ipt} ref={modalEle} defaultValue={(selectRow && selectRow.content)} />
      </Modal>
    </div>
  );
}

export default App;
