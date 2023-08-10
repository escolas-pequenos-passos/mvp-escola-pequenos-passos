"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useRouter as useNavigation } from "next/navigation";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Editor } from "@/components/Editor";
import { formatDate } from "@/helpers/formatData";
import { editMock } from "@/mocks/editMock";

const schema = z.object({
  content: z.string({ required_error: "Insira um conteudo valido" }),
  date: z.date({ required_error: "Insira uma data valida" }),
  discipline: z.string({ required_error: "Insira uma disciplina valida" }),
  descriptionPlan: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function New({ params }: { params: { type: "new" | "edit" } }) {
  const [load, setLoad] = useState(false);

  const navigation = useNavigation();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues:
      params.type === "edit"
        ? {
            content: editMock.content,
            date: new Date(editMock.date),
            discipline: editMock.discipline,
            descriptionPlan: editMock.descriptionPlan,
          }
        : {
            content: undefined,
            date: undefined,
            discipline: undefined,
            descriptionPlan: "",
          },
  });

  function handleSendData(data: FormData) {
    setLoad(true);
    const payload = {
      ...data,
    };

    setTimeout(() => {
      console.log({ payload });
      navigation.back();
    }, 5000);
  }

  return (
    <main className="h-full p-10 pt-6 overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-zinc-900 font-bold text-xl">Novo Plano</h1>
      </div>

      <div className="mt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSendData)}>
            <div className="grid grid-cols-3 gap-5">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conteudo</FormLabel>
                    <FormControl>
                      <Input
                        onChange={field.onChange}
                        value={field.value}
                        disabled={load}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="discipline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Disciplina</FormLabel>
                    <FormControl>
                      <Input
                        onChange={field.onChange}
                        value={field.value}
                        disabled={load}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col self-end">
                      <FormLabel>Data de aplicacao</FormLabel>
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
                            disabled={load}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <Separator className="my-5" />
            <div className="w-full">
              <FormField
                control={form.control}
                name="descriptionPlan"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor
                        content={field.value}
                        onUpdateContent={field.onChange}
                        isEditable={!load}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-2 flex justify-end">
              <Button
                type="submit"
                className="flex items-center gap-2"
                disabled={load}
              >
                {load && <Loader2 className="w-4 h-4 animate-spin" />}
                Criar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
