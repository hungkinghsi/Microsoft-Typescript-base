import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import './App.scss';

function App() {
  const isInit = useRef<boolean>(false);
  const [state, setState] = useState([
    { title: "累计用户数", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
    { title: "昨日新增用户数", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
    { title: "累计充值金额（元）", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
    { title: "昨日累计充值金额（元）", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
    { title: "昨日活跃用户数", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
    { title: "近7日活跃用户", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
    { title: "近30日活跃用户", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
    { title: "APP昨日日均启动次数", totalUsers: 0, newUsers: 0, totalRechargeAmount: 0, yestertodyTotalRechargeAmount: 0, yestertodyActiveUsers: 0, last7ActiveUsers: 0, last30ActiveUsers: 0, yestertodyAppUsers: 0 },
  ]);

  useEffect(() => {
    if (isInit.current) return;

    isInit.current = true;

    // serviceGetPanelData()
    // .then(res => {
    //   if (res.data) {
    //     const data = state.slice();
    //     setState(data)
    //   }
    // });
  }, [state]);

  return (
    <div className="App">
      <div className="base-data-title">基础数据</div>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }} className="panel-group">
        {
          state.map((item: any, idx: number) => (
            <Col xl={6} lg={6} md={8} sm={12} xs={12} key={idx}>
              <div className="data-container" style={(idx === 0 || idx === 4) ? {paddingLeft: "40px"} : (idx === 3 || idx === 7) ? {paddingRight: "40px"} : {marginLeft: "0px"}}>
                <div className="title">{item.title}</div>
                <div className="txt">{item.totalUsers}</div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default App;
