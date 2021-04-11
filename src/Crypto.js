import React, {useEffect, useState} from "react";
import { Card, Row, Col, Avatar, Image, Select } from 'antd';
import { CaretUpOutlined, CaretDownOutlined, LoadingOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

const axios = require('axios');

const Crypto = () => {
const currencyRates = {
    AED: 4.371213,
    AFN: 92.291184,
    ALL: 123.947311,
    AMD: 635.189996,
    ANG: 2.1331,
    AOA: 747.545226,
    ARS: 109.689299,
    AUD: 1.561375,
    AWG: 2.142144,
    AZN: 2.027861,
    BAM: 1.95583,
    BBD: 2.3995,
    BDT: 100.620099,
    BGN: 1.955144,
    BHD: 0.448654,
    BIF: 2339.102223,
    BMD: 1.19008,
    BND: 1.5941,
    BOB: 8.2058,
    BRL: 6.774654,
    BSD: 1.1884,
    BTC: 0.000019998428,
    BTN: 88.786199,
    BWP: 13.0091,
    BYN: 3.1359,
    BYR: 23325.567835,
    BZD: 2.3954,
    CAD: 1.491111,
    CDF: 2375.400094,
    CHF: 1.100646,
    CLF: 0.030794,
    CLP: 849.68741,
    CNY: 7.798643,
    COP: 4355.097729,
    CRC: 727.839995,
    CUC: 1.19008,
    CUP: 31.53712,
    CVE: 111.277117,
    CZK: 26.013011,
    DJF: 211.559999,
    DKK: 7.43741,
    DOP: 67.751722,
    DZD: 157.809229,
    EGP: 18.692,
    ERN: 17.850707,
    ETB: 49.210274,
    EUR: 1,
    FJD: 2.460788,
    FKP: 0.867007,
    GBP: 0.868133,
    GEL: 4.082439,
    GGP: 0.867007,
    GHS: 6.879127,
    GIP: 0.867007,
    GMD: 60.936681,
    GNF: 11900.800339,
    GTQ: 9.1713,
    GYD: 248.399998,
    HKD: 9.25609,
    HNL: 28.698826,
    HRK: 7.582123,
    HTG: 95.881999,
    HUF: 357.538159,
    IDR: 17392.900069,
    ILS: 3.916423,
    IMP: 0.867007,
    INR: 88.928775,
    IQD: 1740.491988,
    IRR: 50108.318466,
    ISK: 151.676154,
    JEP: 0.867007,
    JMD: 175.309999,
    JOD: 0.843814,
    JPY: 130.50463,
    KES: 127.70011,
    KGS: 100.902484,
    KHR: 4813.873983,
    KMF: 498.410018,
    KPW: 1071.050762,
    KRW: 1336.531692,
    KWD: 0.359024,
    KYD: 0.9903,
    KZT: 515.049996,
    LAK: 11204.603536,
    LBP: 1818.442642,
    LKR: 238.270198,
    LRD: 205.467765,
    LSL: 17.381165,
    LTL: 3.513997,
    LVL: 0.719868,
    LYD: 5.373258,
    MAD: 10.658956,
    MDL: 21.272,
    MGA: 4516.353981,
    MKD: 61.615,
    MMK: 1675.615988,
    MNT: 3389.608521,
    MOP: 9.5199,
    MRO: 424.858352,
    MUR: 48.72,
    MVR: 18.387186,
    MWK: 935.403284,
    MXN: 23.994993,
    MYR: 4.921027,
    MZN: 76.082263,
    NAD: 17.381164,
    NGN: 453.420886,
    NIO: 41.736554,
    NOK: 10.122285,
    NPR: 142.057999,
    NZD: 1.692498,
    OMR: 0.45804,
    PAB: 1.1884,
    PEN: 4.31583,
    PGK: 4.202218,
    PHP: 57.77883,
    PKR: 181.933525,
    PLN: 4.544261,
    PYG: 7426.199948,
    QAR: 4.333127,
    RON: 4.92158,
    RSD: 117.574999,
    RUB: 92.124536,
    RWF: 1163.303192,
    SAR: 4.464019,
    SBD: 9.501977,
    SCR: 24.069413,
    SDG: 454.019894,
    SEK: 10.162587,
    SGD: 1.59904,
    SHP: 0.867007,
    SLL: 12167.378237,
    SOS: 695.007118,
    SRD: 16.844438,
    STD: 24520.53221,
    SVC: 10.399,
    SYP: 1496.739844,
    SZL: 17.381163,
    THB: 37.440356,
    TJS: 13.5499,
    TMT: 4.16528,
    TND: 3.293551,
    TOP: 2.719378,
    TRY: 9.713478,
    TTD: 8.0529,
    TWD: 33.93585,
    TZS: 2755.849981,
    UAH: 33.1754,
    UGX: 4337.599969,
    USD: 1.19008,
    UYU: 52.342,
    UZS: 12468.46847,
    VEF: 254475069202.9704,
    VND: 27411.999806,
    VUV: 130.267232,
    WST: 3.010675,
    XAF: 655.956995,
    XAG: 0.047121,
    XAU: 0.000682,
    XCD: 3.216251,
    XDR: 0.835,
    XOF: 656.333402,
    XPF: 119.900992,
    YER: 297.817951,
    ZAR: 17.399077,
    ZMK: 10712.152296,
    ZMW: 26.3404,
    ZWL: 383.206152
} // fetched 1618125494
const [assets, setAssets] = useState()
const [currency, setCurrency] = useState("USD")
const [priceUsd, setPriceUsd] = useState(10.000)


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

    const rateConveter = (priceUsd, rate) => {
        return currencyFormatter.format(parseInt(priceUsd) * rate)
        // since my rates are from EURO, I first need to convert to EUR then to the new rate
    }

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
    console.log()
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
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                <Option value="USD">USD</Option>
                <Option value="EUR">EUR</Option>
                <Option value="NOK">NOK</Option>
                <Option value="GBP">GBP</Option>
                <Option value="JPY">JPY</Option>
                <Option value="DKK">DKK</Option>
                <Option value="BGN">BGN</Option>
                <Option value="CZK">NOK</Option>
                <Option value="SEK">SEK</Option>
                <Option value="ISK">ISK</Option>
                <Option value="AUD">AUD</Option>
            </Select>

            {assets && assets.length !== 0 ? assets.map((assets) => (
                    <Card key={assets.id}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={span} style={{fontSize: 12}}>{assets.rank}.</Col>
                            <Col className="gutter-row" span={span}>
                                {/*<LoadingOutlined /> Replace this with avatar img if link cant fetch a photo, fallback*/}
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
                                {rateConveter(assets.priceUsd, currencyRates.NOK)}
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
