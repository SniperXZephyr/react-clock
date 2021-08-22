import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import './styles.css'

function MalaysiaClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
      
    const interval = setInterval(
      () => {
        var event = new Date()
        setValue(event.toLocaleTimeString('ms', { timeZone: 'Asia/Kuala_Lumpur' }))
      },
      1000
    )

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <Clock value={value} />
    </div>
  )
}

export default MalaysiaClock