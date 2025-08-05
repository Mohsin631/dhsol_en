'use client';

import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import TimePicker from 'react-time-picker';

const TimeZoneConverter = () => {
  const [time, setTime] = useState('12:00');
  const [fromZone, setFromZone] = useState('UTC');
  const [toZone, setToZone] = useState('UTC');
  const [convertedTime, setConvertedTime] = useState('');
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    const zones = moment.tz.names();
    setTimeZones(zones);
  }, []);

  const convertTime = () => {
    if (!time) {
      setConvertedTime('Please enter a valid time');
      return;
    }

    const date = new Date(`1970-01-01T${time}:00Z`);
    const fromOffset = new Date(date.toLocaleString('en-US', { timeZone: fromZone })).getTime() - date.getTime();
    const convertedDate = new Date(date.getTime() + fromOffset + new Date().getTimezoneOffset() * 60000);
    const convertedTime = convertedDate.toLocaleString('en-US', { timeZone: toZone });

    setConvertedTime(convertedTime);
  };

  return (
    <section className="timezone-converter">
      <div className="converter-card">
        <div className="converter-title">Time Zone Converter</div>
        <div className="converter-description">
          Convert time between multiple time zones instantly with this tool. Ideal for international scheduling.
        </div>

        <div className="form-group">
          <label className="form-label">Enter Time</label>
          <TimePicker
            onChange={setTime}
            value={time}
            className="form-time-picker"
          />
        </div>

        <div className="form-group">
          <label className="form-label">From Time Zone</label>
          <select
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
            className="form-select"
          >
            {timeZones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">To Time Zone</label>
          <select
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
            className="form-select"
          >
            {timeZones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        <button type="button" className="convert-btn" onClick={convertTime}>
          Convert Time
        </button>

        {convertedTime && (
          <div className="result-box">
            <div className="result-title">Converted Time</div>
            <div className="result-text">{convertedTime}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TimeZoneConverter;
