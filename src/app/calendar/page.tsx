"use client";

import { useState } from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";

import { Calendar } from "@/components/Calendar";
import { CalendarEvent } from "@/dtos/calendarEvent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EventForm } from "@/components/EventForm";
import { EventName } from "@/interfaces/eventName";
import { EventTypeMapper } from "@/mappers/eventType";

export default function Global() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const [openModal, setOpenModal] = useState(false);

  function handleAddNewEvent(data: any) {
    console.log(data);
    const key = EventName[data.type as keyof typeof EventName];
    const values = EventTypeMapper.get(key);

    console.log(key, values);
    setEvents((old) => [
      ...old,
      {
        title: data.title,
        date: data.date,
        color: values ? values.color : undefined,
      },
    ]);
    setOpenModal(false);
  }

  return (
    <main className="p-10 pt-6 overflow-y-auto overflow-x-hidden">
      <div className="flex justify-end mb-5">
        <Button onClick={() => setOpenModal((old) => !old)}>
          <span className="text-xs font-semibold">Adicionar</span>
          <BsFillCalendarEventFill className="ml-3" size={16} />
        </Button>
      </div>
      <Calendar events={events} />

      <Dialog open={openModal} onOpenChange={() => setOpenModal((old) => !old)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Novo Evento</DialogTitle>
          </DialogHeader>
          <EventForm onSubmit={handleAddNewEvent} />
        </DialogContent>
      </Dialog>
    </main>
  );
}
