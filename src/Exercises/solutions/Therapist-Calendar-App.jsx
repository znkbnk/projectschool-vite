const solutionCode1 = `
// App.js

import React from 'react'
import TherapistScheduler from './TherapistScheduler'

const App = () => {
  return (
    <div>
      <TherapistScheduler />
    </div>
  )
}

export default App
`;

const solutionCode2 = `
// TherapistScheduler.js

import React, { useState, useMemo, useEffect } from "react";
import './styles.css'
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Check,
} from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";
import emailjs from "emailjs-com";

const TherapistScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [animatingMonth, setAnimatingMonth] = useState(false);

  useEffect(() => {
    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
  }, []);

  useEffect(() => {
    if (appointments.length > 0) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    }
  }, [appointments]);

  const availableSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const calendarDays = useMemo(() => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const selectedDateAppointments = useMemo(() => {
    if (!selectedDate) return [];
    return appointments.filter(
      (appt) => appt.date === selectedDate.toDateString()
    );
  }, [selectedDate, appointments]);

  const handlePrevMonth = () => {
    setAnimatingMonth(true);
    setTimeout(() => {
      setCurrentMonth((prev) => subMonths(prev, 1));
      setAnimatingMonth(false);
    }, 300);
  };

  const handleNextMonth = () => {
    setAnimatingMonth(true);
    setTimeout(() => {
      setCurrentMonth((prev) => addMonths(prev, 1));
      setAnimatingMonth(false);
    }, 300);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSchedule = () => {
    if (!selectedDate || !timeSlot) {
      showNotification("Please select both date and time", "error");
      return;
    }

    const isSlotTaken = selectedDateAppointments.some(
      (appt) => appt.time === timeSlot
    );

    if (isSlotTaken) {
      showNotification("This time slot is already booked", "error");
      return;
    }

    const newAppointment = {
      date: selectedDate.toDateString(),
      time: timeSlot,
    };

    setAppointments((prev) => {
      const updatedAppointments = [...prev, newAppointment];
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      return updatedAppointments;
    });

    sendEmailNotification(newAppointment);
    showConfirmation();
    setTimeSlot("");
  };

  const sendEmailNotification = (appointment) => {
    const emailTemplateParams = {
      to_name: "Therapist Name",
      from_name: "Client Name",
      appointment_date: format(
        new Date(appointment.date),
        "EEEE, MMM dd, yyyy"
      ),
      appointment_time: appointment.time,
      to_email: "therapist_email@example.com",
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        emailTemplateParams,
        "your_user_id"
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
        },
        (error) => {
          console.log("Error sending email", error);
        }
      );
  };

  const showConfirmation = () => {
    const confirmationEl = document.createElement("div");
    confirmationEl.className = "confirmation-animation";
    document.body.appendChild(confirmationEl);

    setTimeout(() => {
      confirmationEl.remove();
      showNotification("Appointment scheduled successfully!", "success");
    }, 1500);
  };

  const showNotification = (message, type) => {
    const notification = document.createElement("div");
    notification.className = \`notification \${type}\`;
    notification.innerHTML = \`
      \${
        type === "success"
          ? '<div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div>'
          : ""
      }
      \${message}
    \`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  return (
    <div className='ultra-modern-scheduler'>
      <div className='scheduler-glass'>
        <header className='scheduler-header'>
          <div className='header-title'>
            <CalendarIcon className='header-icon' size={28} />
            <h1>Schedule Your Session</h1>
          </div>
          <div className='current-date'>
            {format(currentMonth, "MMMM yyyy")}
          </div>
        </header>

        <div className='scheduler-content'>
          <div className='calendar-section'>
            <div className='calendar-navigation'>
              <button className='nav-btn' onClick={handlePrevMonth}>
                <ChevronLeft size={24} />
              </button>
              <button className='nav-btn' onClick={handleNextMonth}>
                <ChevronRight size={24} />
              </button>
            </div>

            <div className='calendar-grid'>
              <div className='weekdays'>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div key={day} className='weekday'>
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className={\`days-grid \${animatingMonth ? "animating" : ""}\`}>
                {calendarDays.map((date, index) => {
                  const hasAppointment = appointments.some(
                    (appt) => appt.date === date.toDateString()
                  );
                  const isSelected = isSameDay(date, selectedDate);
                  const isCurrentMonth = isSameMonth(date, currentMonth);
                  const isTodayDate = isToday(date);

                  return (
                    <button
                      key={index}
                      className={\`day-cell \${
                        !isCurrentMonth ? "other-month" : ""
                      } 
                        \${isSelected ? "selected" : ""} 
                        \${isTodayDate ? "today" : ""} 
                        \${hasAppointment ? "has-appointment" : ""}\`}
                      onClick={() => handleDateSelect(date)}
                      disabled={!isCurrentMonth}
                    >
                      <span className='day-number'>{format(date, "d")}</span>
                      {hasAppointment && (
                        <div className='appointment-indicator' />
                      )}
                      {isSelected && <div className='selection-indicator' />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className='time-slots'>
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  className={\`time-slot \${timeSlot === slot ? "selected" : ""} 
                    \${
                      selectedDateAppointments.some(
                        (appt) => appt.time === slot
                      )
                        ? "booked"
                        : ""
                    }\`}
                  onClick={() => setTimeSlot(slot)}
                  disabled={selectedDateAppointments.some(
                    (appt) => appt.time === slot
                  )}
                >
                  <Clock size={16} />
                  <span>{slot}</span>
                </button>
              ))}
            </div>

            <button
              className='schedule-btn'
              onClick={handleSchedule}
              disabled={!selectedDate || !timeSlot}
            >
              <span>Schedule Appointment</span>
              <Check size={20} />
            </button>
          </div>

          <div className='appointments-section'>
            <h2>Upcoming Sessions</h2>
            <div className='appointments-grid'>
              {appointments.map((appt, idx) => (
                <div key={idx} className='appointment-card'>
                  <div className='appointment-date'>
                    {format(new Date(appt.date), "EEEE, MMM dd")}
                  </div>
                  <div className='appointment-time'>
                    <Clock size={16} />
                    {appt.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistScheduler;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
 
];
