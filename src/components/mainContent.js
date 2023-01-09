import { Button } from "bootstrap";
import dummy from "../assets/dummy.png";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainContent = () => {
  const data = [
    {
      type: "A",
      pending: true,
      itemName: "A Pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "A",
      pending: true,
      itemName: "a Pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "A",
      pending: true,
      itemName: "A pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "A",
      pending: true,
      itemName: "a pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "A",
      pending: false,
      itemName: "a completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "A",
      pending: false,
      itemName: "a Completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "A",
      pending: false,
      itemName: "A completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "A",
      pending: false,
      itemName: "A Completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: true,
      itemName: "B Pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: true,
      itemName: "B pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: true,
      itemName: "b pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: true,
      itemName: "b Pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: false,
      itemName: "B Completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: false,
      itemName: "B completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: false,
      itemName: "b Completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "B",
      pending: false,
      itemName: "b completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: false,
      itemName: "C completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: false,
      itemName: "c completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: false,
      itemName: "c Completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: false,
      itemName: "C Completed",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: true,
      itemName: "c Pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: true,
      itemName: "C Pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: true,
      itemName: "c pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
    {
      type: "C",
      pending: true,
      itemName: "C pending",
      sales: 300,
      currentQty: 24,
      inicomingQty: 24,
      src: "",
      fillRate: 24,
      WOS: 24,
      orderDate: "20 Jan",
      tgtMonth: "Feb",
      qty: 5,
    },
  ];

  const [filterData, setFilterData] = useState(data);
  const [pend, setPend] = useState(true);
  const [ABC, setABC] = useState("A");
  const filter = () => {
    const fd = data.filter((item) => {
      if (item.pending == pend && item.type == ABC) return item;
    });
    console.log(fd);
    setFilterData(fd);
  };
  const changeFilterABC = (abc) => {
    setABC(abc);
    filter();
  };
  const changeFilter = (isPending) => {
    setPend(isPending);
    filter();
  };
  useEffect(() => {
    filter();
  }, []);

  return (
    <div className="">
      <div className="d-flex filter align-items-space-between">
              <div
          onClick={() => {
            changeFilter(true);
          }}
          className={`button m-auto ${pend ? "underlined" : ""}`}
        >
          Pending
        </div>
        |
        <div
          onClick={() => {
            changeFilter(false);
          }}
          className={`button m-auto ${pend ? "" : "underlined"}`}
        >
          Completed 
        </div>
        <div
          onClick={() => {
            changeFilterABC("A");
          }}
          className={`abc button m-auto ${ABC != "A" ? "" : "underlined"}`}
        >
          A |
        </div>
        <div
          onClick={() => {
            changeFilterABC("B");
          }}
          className={`button m-auto ${ABC != "B" ? "" : "underlined"}`}
        >
          B |
        </div>
        <div
          onClick={() => {
            changeFilterABC("C");
          }}
          className={`button m-auto ${ABC != "C" ? "" : "underlined"}`}
        >
          C |
        </div>
      </div>
      <div className="">
        {filterData.map((itm) => {
            return (
              <div className="cardContainer">
                <Card className="card">
                  <div className="">
                    <img
                      src={itm.src.length === 0 ? itm.src : dummy}
                      alt="image not found"
                      height={122}
                      width={122}
                    ></img>
                    <div className="h4">{itm.itemName}</div>
                    <div>{itm.sales}</div>
                    <div>{itm.currentQty}</div>
                    <div>{itm.inicomingQty}</div>
                    <div>{itm.fillRate}</div>
                    <div>{itm.WOS}</div>
                    <Row>
                      <Col>
                        <Row> Order Date </Row>
                        <Row> {itm.orderDate} </Row>
                      </Col>
                      <Col>
                        <Row>| TGT Month </Row>
                        <Row>| {itm.tgtMonth} </Row>
                      </Col>
                      <Col>
                        <Row>| QTY </Row>
                        <Row>| {itm.qty} </Row>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default MainContent;
