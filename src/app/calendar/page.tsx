"use client";

import { useState } from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { v4 } from "uuid";

import { Calendar } from "@/components/Calendar";
import { CalendarEvent } from "@/interfaces/calendarEvent";
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
import { FormDataDTO } from "@/components/EventForm/dtos/formDataDTO";

export default function Global() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const [openModal, setOpenModal] = useState(false);

  function handleAddNewEvent(data: FormDataDTO) {
    const key = EventName[data.type as keyof typeof EventName];
    const value = EventTypeMapper.get(key);

    setEvents((old) => [
      ...old,
      {
        id: v4(),
        title: data.title,
        start: data.start,
        end: data.end,
        color: value ? value.color : undefined,
      },
    ]);
    setOpenModal(false);
  }

  return (
    <main className="p-10 pt-6 overflow-y-auto overflow-x-hidden">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-4 mr-2 flex-wrap">
          {Array.from(EventTypeMapper.entries()).map(
            ([_, { color, title }], key) => {
              return (
                <div key={key} className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs font-semibold">{title}</span>
                </div>
              );
            }
          )}
        </div>

        <Button onClick={() => setOpenModal((old) => !old)}>
          <span className="text-xs font-semibold">Adicionar</span>
          <BsFillCalendarEventFill className="ml-3" size={16} />
        </Button>
      </div>

      <div className="h-full">
        <Calendar events={events} />
      </div>

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
