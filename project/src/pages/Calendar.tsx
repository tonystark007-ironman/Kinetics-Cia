import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const events = [
    {
      title: 'Team Meeting',
      start: '2024-03-20T10:00:00',
      end: '2024-03-20T11:30:00',
      backgroundColor: '#2563eb',
    },
    {
      title: 'Project Review',
      start: '2024-03-22T14:00:00',
      end: '2024-03-22T16:00:00',
      backgroundColor: '#2563eb',
    },
    {
      title: 'Client Presentation',
      start: '2024-03-25T09:00:00',
      end: '2024-03-25T10:30:00',
      backgroundColor: '#dc2626',
    },
    {
      title: 'Sprint Planning',
      start: '2024-03-21T11:00:00',
      end: '2024-03-21T12:00:00',
      backgroundColor: '#2563eb',
    },
    {
      title: 'Code Review',
      start: '2024-03-23T15:00:00',
      end: '2024-03-23T16:00:00',
      backgroundColor: '#059669',
    },
    {
      title: 'Team Building Event',
      start: '2024-03-26T13:00:00',
      end: '2024-03-26T17:00:00',
      backgroundColor: '#7c3aed',
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Calendar</h2>
      <div className="calendar-container">
        <style>
          {`
            .fc {
              background: white;
              padding: 20px;
              border-radius: 8px;
            }
            .fc-button-primary {
              background-color: #2563eb !important;
              border-color: #2563eb !important;
            }
            .fc-button-primary:hover {
              background-color: #1d4ed8 !important;
              border-color: #1d4ed8 !important;
            }
            .fc-button-active {
              background-color: #1e40af !important;
              border-color: #1e40af !important;
            }
            .fc-daygrid-day.fc-day-today {
              background-color: #eff6ff !important;
            }
            .fc-daygrid-event {
              border: none !important;
              padding: 2px 4px !important;
              border-radius: 4px !important;
            }
            .fc-h-event {
              border: none !important;
            }
            .fc-toolbar-title {
              font-size: 1.25rem !important;
              font-weight: 600 !important;
            }
            .fc-header-toolbar {
              margin-bottom: 1.5em !important;
            }
          `}
        </style>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          editable={true}
          selectable={true}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          eventDidMount={(info) => {
            info.el.style.fontSize = '0.875rem';
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;