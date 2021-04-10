import React, {useEffect, useState} from "react";
import { Card, Row, Col, Avatar, Image, Select } from 'antd';
import { CaretUpOutlined, CaretDownOutlined, LoadingOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

const axios = require('axios');

const Crypto = () => {
const currencyRates =  [
        {currency: "USD", rate: "1.1888"},
        {currency: "JPY", rate: "130.42"},
        {currency: "BGN", rate: "1.9558"},
        {currency: "CZK", rate: "25.945"},
        {currency: "DKK", rate: "7.4372"},
        {currency: "GBP", rate: "0.86658"},
        {currency: "HUF", rate: "357.97"},
        {currency: "PLN", rate: "4.5392"},
        {currency: "RON", rate: "4.9198"},
        {currency: "SEK", rate: "10.1725"},
        {currency: "CHF", rate: "1.1010"},
        {currency: "ISK", rate: "151.90"},
        {currency: "NOK", rate: "10.1130"},
        {currency: "HRK", rate: "7.5755"},
        {currency: "RUB", rate: "91.8152"},
        {currency: "TRY", rate: "9.6903"},
        {currency: "AUD", rate: "1.5579"},
        {currency: "BRL", rate: "6.6641"},
        {currency: "CAD", rate: "1.4950"},
        {currency: "CNY", rate: "7.7934"},
        {currency: "HKD", rate: "9.2470"},
        {currency: "IDR", rate: "17354.52"},
        {currency: "ILS", rate: "3.9093"},
        {currency: "INR", rate: "88.8145"},
        {currency: "KRW", rate: "1331.28"},
        {currency: "MXN", rate: "23.9374"},
        {currency: "MYR", rate: "4.9157"},
        {currency: "NZD", rate: "1.6860"},
        {currency: "PHP", rate: "57.764"},
        {currency: "SGD", rate: "1.5941"},
        {currency: "THB", rate: "37.388"},
        {currency: "ZAR", rate: "17.3100"}]
const [assets, setAssets] = useState()
const [currency, setCurrency] = useState("USD")

    useEffect(() => {
            axios.get('https://api.coincap.io/v2/assets')
            .then(function (response) {
                setAssets(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    });

    const { Option } = Select;

    function onChange(value) {
        setCurrency(value)
        console.log(`selected ${value}`);
        console.log(currency)
    }
    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    console.log(currencyRates)
    const span = 4; // just for development, might keep if
    return (
        <>
            <Select
                showSearch
                style={{ width: 80 }}
                placeholder="USD"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="USD">USD</Option>
                <Option value="EUR">EURO</Option>
                <Option value="NOK">NOK</Option>
            </Select>
            {/*<LoadingOutlined />*/}
            {assets && assets.length !== 0 ? assets.map((assets) => (
                    <Card key={assets.id}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={span} style={{fontSize: 12}}>{assets.rank}.</Col>
                            <Col className="gutter-row" span={span}>
                                <Avatar
                                    src={<Image src={`https://static.coincap.io/assets/icons/${assets.symbol.toLowerCase()}@2x.png`}
                                                alt={'symbol'}
                                                height={24} width={24}
                                    />}/>
                            </Col>
                            <Col className="gutter-row" span={span} style={{fontSize: 14}}>
                                <a href={assets.explorer} style={{textDecoration: "underline"}}>{assets.name}</a>
                                <div style={{fontSize: "11px", color: "#5e5e5e"}}>{assets.symbol}</div>
                            </Col>
                            <Col className="gutter-row" span={span}>
                                {currencyFormatter.format(assets.priceUsd)}
                                <br/>

                                {assets.changePercent24Hr < 0 ?
                                    <div style={{color: "red"}}><CaretDownOutlined />{assets.changePercent24Hr.slice(0, -12) + "%"}</div> :
                                   <div style={{color: "green"}}><CaretUpOutlined />{assets.changePercent24Hr.slice(0, -12) + "%"}</div>}
                            </Col>
                            <Col className="gutter-row" span={span}>
                                {new Intl.NumberFormat('en-US').format(assets.supply) + " / "}
                                {new Intl.NumberFormat('en-US').format(assets.maxSupply)}
                            </Col>
                        </Row>
                    </Card>
            )): "Loading.." }
        </>
    )
};

export default Crypto;

// https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml for currency rates, CORS policy is a headache
