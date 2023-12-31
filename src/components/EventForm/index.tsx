import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { EventTypeMapper } from "@/mappers/eventType";
import { formatDate } from "@/helpers/formatData";

import { formSchema } from "./schema/formSchema";
import { FormDataDTO } from "./dtos/formDataDTO";

interface Props {
  onSubmit: (data: any) => void;
}

export function EventForm({ onSubmit }: Props) {
  const form = useForm<FormDataDTO>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      start: undefined,
      end: undefined,
      type: undefined,
    },
  });

  function handleSendData(data: FormDataDTO) {
    const start = formatDate(data.start);
    const end = data.end ? formatDate(data.end) : undefined;

    const payload = {
      type: data.type,
      title: data.title,
      start: start,
      end: end,
    };
    onSubmit(payload);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSendData)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input placeholder="insira um titulo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={undefined}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo do evento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.from(EventTypeMapper.entries()).map(
                    ([type, { color, title }], key) => {
                      return (
                        <SelectItem value={type} key={key}>
                          <div className="flex items-center gap-2">
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-xs font-semibold">
                              {title}
                            </span>
                          </div>
                        </SelectItem>
                      );
                    }
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-5">
          <FormField
            control={form.control}
            name="start"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col flex-1">
                  <FormLabel>Data Inicial</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button>
                          {field.value ? (
                            <span>{formatDate(field.value)}</span>
                          ) : (
                            <span>Escolha uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="end"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col flex-1">
                  <FormLabel>Data Final</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button>
                          {field.value ? (
                            <span>{formatDate(field.value)}</span>
                          ) : (
                            <span>Escolha uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
