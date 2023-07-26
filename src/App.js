import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(moment());
  const [resultDate, setResultDate] = useState(moment().format("DD/MM/YYYY"));
  const [dateOfMonth, setDateOfMonth] = useState(moment().daysInMonth());
  const [getMonth, setGetMonth] = useState(moment().month()+1)
  const [getYear, setGetYear] = useState(moment().year());

  const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

  useEffect(() => {
  }, [resultDate, dateOfMonth])
  
  useEffect(() => {
    setStartDate(moment(`${getYear}-${getMonth}`))
    setDateOfMonth(moment(`${getYear}-${getMonth}`).daysInMonth())
  },[getMonth])

  const handleChangeDate = () => {
    const data = []
    const dateOfWeek = moment(startDate.date(1)).day();
    date.map((value, index) => {
      if ((index +1) <= dateOfWeek) {
        data.unshift('')
        data.push(value)
      }
      else if (index < dateOfMonth) data.push(value)
    })
    return data;
  }

  const choiceDate = (e) => {
    let dat = `${getYear}-${getMonth}-` + e.target.innerText;
    setResultDate(moment(dat).format('DD/MM/YYYY'))
  }
  const choiceMonth = (e) => {

    if (e.target.innerText === "<") {
      if (getMonth === 1) {
        setGetMonth(12)
        setGetYear(getYear - 1)
      }
      else {
        setGetMonth(getMonth - 1)
      }
    }
    if (e.target.innerText === ">"){
      if (getMonth === 12) {
        setGetMonth(1)
        setGetYear(getYear + 1)
      }
      else {
        setGetMonth(getMonth + 1)
      }
    }

  }

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
        <div onClick={choiceMonth} style={{ cursor: 'pointer', fontSize: '30px' }}>	&#60;</div>
        <div onClick={choiceMonth} style={{ cursor: 'pointer', fontSize: '30px' }}>	&#62;</div>
      </div>
      <table style={{ height: '350px', width: '400px', backgroundColor: '#8c8c8c', color: 'white' }}>
        <tr>
          <th>H</th>
          <th>B</th>
          <th>T</th>
          <th>N</th>
          <th>S</th>
          <th>B</th>
          <th>C</th>
        </tr>
        {handleChangeDate().map((value, index) => {
          if (index == 1 || index == 9 || index == 15 || index == 22 || index == 29 || index == 36) {
            return <tr>
              {handleChangeDate().map((val, ind) => {
                if (ind >= index && ind < (index + 7))
                  return <td
                    className='Choice-date'
                    onClick={choiceDate}
                  >{val}</td>
              })}
            </tr>
          }
        })}
      </table>

      <p>{resultDate}</p>
    </div>
  );
}

export default App;
