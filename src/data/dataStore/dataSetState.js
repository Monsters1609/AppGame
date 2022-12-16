import { useState } from "react";
import { dataSecurities } from '../dataSecurities';
import { dataPrice } from '../dataTablePrice';
import { dataUserDetail } from '../dataUserDetails';
export const DataSetState = () => {
    const [data, setData] = useState([]);
    const [dataCurrentSecurities, setDataCurrentSecurities] = useState(dataSecurities ?? []);
    const [dataCurrentPrice, setDataCurrentPrice] = useState(dataPrice ?? []);
    const [dataCurrentUserDetail, setDataCurrentUserDetail] = useState(dataUserDetail ?? []);
    setData([dataCurrentSecurities, dataCurrentPrice, dataCurrentUserDetail]);
    const jsonStrData = JSON.stringify(data);
    localStorage.setItem('Data',jsonStrData);
}