import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (dates) => {
    setStartDate(dates);
  };
  return (
    <div className="App">
      <div style={{ height: '300px', width: '300px' }}>
        <input value={moment(startDate).format("DD/MM/YYYY")} />
        <DatePicker
          selected={startDate}
          onChange={onChange}
          value={startDate}
          inline
        />
      </div>
    </div>
  );
}

export default App;
