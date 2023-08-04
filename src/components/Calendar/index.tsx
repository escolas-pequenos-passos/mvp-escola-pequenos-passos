import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import ptBrLocale from "@fullcalendar/core/locales/pt-br";

import { CalendarEvent } from "@/dtos/calendarEvent";

interface Props {
  events: CalendarEvent[];
}

export function Calendar({ events }: Props) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale={ptBrLocale}
      events={events}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      }}
    />
  );
}
