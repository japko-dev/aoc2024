"use client"

import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Location } from "@/domain/location"
import { useState } from "react";

const FormSchema = z.object({
  input: z.string().min(1, {
    message: "Input cannot be blank",
  }),
})

export default function Task1() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      input: "",
    },
  })

  const [result, setResult] = useState(0)

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const convertedData = data.input.split(' ').filter((value) => value !== '')
    console.log(data.input.split(' ').filter((value) => value !== ''))

    const location = new Location(convertedData)
    setResult(location.calculate2())
  }

  return (
    <div>
      TASK2
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data</FormLabel>
                <FormControl>
                  <Input placeholder="data" {...field} />
                </FormControl>
                <FormDescription>
                  Provide data or task 1
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      Result {result}
    </div>
  );
}


