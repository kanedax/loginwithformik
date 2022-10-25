import { ErrorMessage, FastField } from 'formik';
import jMoment from 'moment-jalali';
import React, { useEffect, useState } from 'react';
import PersonalError from './PersonalError';

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const months = [
    { id: 1, value: "فروردین" },
    { id: 2, value: "اردیبهشت" },
    { id: 3, value: "خرداد" },
    { id: 4, value: "تیر" },
    { id: 5, value: "مرداد" },
    { id: 6, value: "شهریور" },
    { id: 7, value: "مهر" },
    { id: 8, value: "آبان" },
    { id: 9, value: "آذر" },
    { id: 10, value: "دی" },
    { id: 11, value: "بهمن" },
    { id: 12, value: "اسفند" },
];
const Date = ({ name, placeholder, formik }) => {
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [years, setYears] = useState([]);
    const [showconfig, setShowConfig] = useState(false);

    useEffect(() => {
        let now = jMoment();
        setDay(now.jDate());
        setMonth(now.jMonth());
        setYear(now.jYear());
    }, []);

    const handleShowDate = () => {
        // for(let index = parseInt(year)-80 ; index < parseInt(year) ; index++) {
        //     setYear((oldyears)=>{
        //         return[...oldyears , index]
        //     })
        // }
        let arr = []
        for (let index = parseInt(year) - 80; index <= parseInt(year); index++) {
            arr = [...arr, index]
        }
        setYears(arr);
        setShowConfig(true);
    }
    const handleSetData = (e) => {
        e.stopPropagation()
        formik.setValues({
            ...formik.values,
            [name]: `${day} / ${month} / ${year}`
        })
        setShowConfig(false)
    }
    return (

        <div className="username-input-time" onClick={handleShowDate}>
            <span className='function' >
            <FastField name={name} type="text" placeholder={placeholder} disabled={true} />
            </span>
            {
                showconfig ? (
                    <div className='datepicker'>
                        <div className="daypicker">
                            <select value={day} onChange={(e) => setDay(e.target.value)}>
                                {days.map(d => (
                                    <option key={d} value={d} >{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="monthpicker">
                            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                                {months.map(m => (
                                    <option key={m.id} value={m.id} >{m.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="yearpicker">
                            <select value={year} onChange={(e) => setYear(e.target.value)}>
                                {years.map((y, i) => (
                                    <option key={i} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className='icon-container'>
                            <i className='fas fa-check' onClick={handleSetData}></i>
                        </div>
                    </div>
                ) : null
            }
            <ErrorMessage name={name} component={PersonalError} />
        </div>


    );
}

export default Date;